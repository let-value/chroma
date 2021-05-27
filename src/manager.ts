import { autorun, observe } from "mobx";
import { Disposable, ExtensionContext } from "vscode";
import Connection from "./connection";
import getKeyBindings from "./keyBindings/getKeyBindings";
import KeyBinding from "./keyBindings/KeyBinding";
import { KeyboardHook } from "./utils/keyboardHook";
import State from "./state/State";
import getKeysLookup from "./utils/getCommands";
import { Animation, AnimationFrame, Color, WaveAnimation } from "./chroma-js";
import tryToRun from "./utils/tryToRun";
import { IPlayInstance } from "./chroma-js";
import { getChromaKey } from "./utils/keyCode";

export default class Manager extends Animation implements Disposable {
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

        await this.sendFrame();
    }

    async sendFrame() {
        console.log("creating frame", this.state);

        const frame = new AnimationFrame();

        frame.Keyboard.setAll(Color.Red);

        for (const event of this.state.keyboard.pressed.values()) {
            const chromaKey = getChromaKey(event.keycode);
            console.log(chromaKey);

            if (chromaKey) {
                frame.Keyboard.setKey(chromaKey, Color.While);
            }
        }

        //frame.Keyboard.setKey
        this.Frames.push(frame);

        await this.Instance?.send(frame);
    }

    public async stop() {
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
