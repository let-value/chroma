import { Disposable } from "vscode";
import KeyboardState from "./state/KeyboardState";
import { KeyboardHook, KeyboardHookEvent } from "./utils/keyboardHook";
import { getKeyName } from "./utils/keyCode";

export default class KeyboardListener implements Disposable {
    hook: KeyboardHook;

    constructor(private state: KeyboardState) {
        this.hook = new KeyboardHook();
        this.hook.keyboardEvents.addListener("key", this.handleKeyboardEvents);

        // state.layout = keymap.getCurrentKeyboardLayout();
        // state.keyMap = keymap.getKeyMap();
        // keymap.onDidChangeKeyboardLayout(this.handleKeyboardLayout);
    }

    start() {
        this.hook.start();
    }

    handleKeyboardLayout = () => {
        // this.state.layout = keymap.getCurrentKeyboardLayout();
        // this.state.keyMap = keymap.getKeyMap();
    };

    handleKeyboardEvents = (event: KeyboardHookEvent) => {
        const key = getKeyName(event);

        if (!key) {
            return;
        }

        if (event.type === "keydown") {
            if (!this.state.pressed.has(key)) {
                this.state.pressed.set(key, event);
            }
        } else {
            this.state.pressed.delete(key);
        }

        //console.log(event, getKeyName(event));
    };

    dispose() {
        this.hook.keyboardEvents.removeListener(
            "key",
            this.handleKeyboardEvents
        );
        this.hook.dispose();
    }
}
