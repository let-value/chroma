import { autorun } from "mobx";
import { ColorThemeKind, Disposable, ExtensionContext } from "vscode";
import Connection from "./connection";
import getKeyBindings from "./keyBindings/getKeyBindings";
import KeyBinding from "./keyBindings/KeyBinding";
import State from "./state/State";
import getKeysLookup from "./utils/getCommands";
import { Animation, AnimationFrame, Color, Key } from "./chroma-js";
import tryToRun from "./utils/tryToRun";
import { IPlayInstance } from "./chroma-js";
import {
    getChromaKey,
    modifierKeys,
    systemKeys,
    getChromaKeys,
    editingKeys
} from "./utils/keyCode";
import chroma from "chroma-js";

export const modifierChromaKeys = getChromaKeys(modifierKeys);
export const systemChromaKeys = [...getChromaKeys(systemKeys), Key.Function];
export const editingChromaKeys = getChromaKeys(editingKeys);

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

    getColor(color: string, luminance?: number) {
        let result = chroma(color);
        if (luminance) {
            result = result.luminance(luminance, "hsl");
        }
        return new Color(result.hex("rgb"));
    }

    async sendFrame() {
        if (!this.state.theme.colors || !this.isPlaying) {
            return;
        }

        const frame = new AnimationFrame();

        const baseColor = this.getColor(
            this.state.theme.colors.foreground,
            0.1
        );
        frame.Keyboard.setAll(baseColor);

        //set modifier key
        const modifierColor = this.getColor(
            this.state.theme.colors["button-background"]
        );
        frame.Keyboard.setKey(modifierChromaKeys, modifierColor);

        //set enter and editing keys
        const editingColor = this.getColor(
            this.state.theme.colors["symbolIcon-variableForeground"]
        );
        frame.Keyboard.setKey(editingChromaKeys, editingColor);

        //set enter and editing keys
        const systemColor = this.getColor(
            this.state.theme.colors["symbolIcon-classForeground"]
        );
        frame.Keyboard.setKey(systemChromaKeys, systemColor);

        //set active keys
        const activeKeys = Array.from(this.state.keyboard.pressed.values())
            .map((event) => getChromaKey(event.keycode)!)
            .filter(Boolean);
        frame.Keyboard.setKey(activeKeys, Color.While);

        //frame.Keyboard.setKey
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
