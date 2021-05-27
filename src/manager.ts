import { autorun, observe } from "mobx";
import { workspace, Disposable, ExtensionContext, debug } from "vscode";
import Connection from "./connection";
import getKeyBindings from "./keyBindings/getKeyBindings";
import KeyBinding from "./keyBindings/KeyBinding";
import { KeyboardHook, KeyboardHookEvent } from "./keyboardHook";
import State from "./state/State";
import getKeysLookup from "./utils/getCommands";
import { getKeyName } from "./utils/keyCode";

export default class Manager implements Disposable {
    keyBindings: KeyBinding[] = [];

    constructor(
        public context: ExtensionContext,
        public connection: Connection,
        public hook: KeyboardHook,
        public state: State
    ) {
        hook.keyboardEvents.addListener("key", this.handleKeyboard);
        const dispose = observe(state, this.handleState);

        context.subscriptions.push({
            dispose
        });
    }

    async start() {
        this.keyBindings = await getKeyBindings(this.context);

        const lookUps = getKeysLookup(this.keyBindings);

        console.log(this, lookUps);
        //const configuration = workspace.getConfiguration();
    }

    handleKeyboard = (event: KeyboardHookEvent) => {
        console.log(event, getKeyName(event));
    };

    handleState() {
        console.log("state update", this.state);
    }

    dispose() {
        this.hook.keyboardEvents.removeListener("key", this.handleKeyboard);
    }
}
