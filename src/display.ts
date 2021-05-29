import { autorun, observe } from "mobx";
import {
    Disposable,
    ExtensionContext,
    workspace,
    WorkspaceConfiguration
} from "vscode";
import Connection from "./connection";
import getKeyBindings from "./keyBindings/getKeyBindings";
import KeyBinding from "./keyBindings/KeyBinding";
import State from "./state/State";
import getKeysLookup, { KeyLookup } from "./utils/getCommands";
import {
    Animation,
    AnimationFrame,
    Color,
    IPlayInstance
} from "./chroma-js/src";
import tryToRun from "./utils/tryToRun";

import applyThemeColors from "./display/themeColors";
import applyPressedColors from "./display/pressedColors";
import applySolarizedColors from "./display/solarizedColors";
import ExtensionSettings from "./state/ExtensionSettings";
import applyCustomColors from "./display/customColors";

export default class Display extends Animation implements Disposable {
    private subscriptions: Disposable[] = [];

    constructor(private connection: Connection, private state: State) {
        super();

        this.subscriptions.push(
            { dispose: autorun(this.handleState.bind(this)) },
            workspace.onDidChangeConfiguration(this.handleState.bind(this))
        );
    }

    async start() {
        await tryToRun(() => this.connection.instance?.playAnimation(this));
        await tryToRun(() => this.sendInitialFrame());
    }

    private handleState() {
        this.sendFrame();
    }

    async play(instance: IPlayInstance) {
        this.Instance = instance;
        this.isPlaying = true;

        await this.sendFrame();
    }

    private async sendInitialFrame() {
        const frame = new AnimationFrame();
        frame.setAll(Color.Black);
        this.Frames.push(frame);
        await this.Instance?.send(frame);
    }

    private async sendFrame() {
        const frame = new AnimationFrame();
        frame.setAll(Color.Black);

        if (this.state.configuration?.get<boolean>("solarized")) {
            applySolarizedColors(frame);
        }

        if (
            this.state.configuration?.get<boolean>("theme") &&
            this.state.theme.colors
        ) {
            applyThemeColors(frame, this.state.theme.colors);
        }

        applyCustomColors(frame, this.state.configuration?.colors);

        applyPressedColors(frame, this.state.keyboard);

        this.Frames.push(frame);
        await this.Instance?.send(frame);
    }

    public async stop() {
        this.isPlaying = false;

        if (this.Instance) {
            const effectIds: string[] = [];
            for (const frame of this.Frames) {
                if (frame.Keyboard.effectId !== "") {
                    effectIds.push(frame.Keyboard.effectId);
                }
                frame.Keyboard.effectId = "";
            }

            await this.Instance.deleteEffect(effectIds);
        }
    }

    dispose() {
        this.stop();
        this.connection.instance?.stopAnimation();
    }
}
