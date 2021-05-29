import { autorun } from "mobx";
import { Disposable, ExtensionContext } from "vscode";
import Connection from "./connection";
import getKeyBindings from "./keyBindings/getKeyBindings";
import KeyBinding from "./keyBindings/KeyBinding";
import State from "./state/State";
import getKeysLookup from "./utils/getCommands";
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

export default class Display extends Animation implements Disposable {
    keyBindings: KeyBinding[] = [];

    constructor(
        public context: ExtensionContext,
        public connection: Connection,
        public state: State
    ) {
        super();
        const dispose = autorun(this.handleState);

        context.subscriptions.push({
            dispose
        });
    }

    async start() {
        this.keyBindings = await getKeyBindings(this.context);

        const lookUps = getKeysLookup(this.keyBindings);

        console.log(this, lookUps);

        await tryToRun(() => this.connection.instance?.playAnimation(this));
    }

    handleState = () => {
        this.sendFrame();
    };

    async play(instance: IPlayInstance) {
        this.Instance = instance;
        this.isPlaying = true;

        await this.sendFrame();
    }

    async sendFrame() {
        if (!this.state.theme.colors || !this.isPlaying) {
            return;
        }

        const frame = new AnimationFrame();

        applySolarizedColors(frame);
        //applyThemeColors(frame, this.state.theme.colors);
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
