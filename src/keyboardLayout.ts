import { Disposable } from "vscode";
import KeyboardState from "./state/KeyboardState";

export default class KeyboardLayout implements Disposable {
    constructor(private state: KeyboardState) {
        // state.layout = keymap.getCurrentKeyboardLayout();
        // state.keyMap = keymap.getKeyMap();
        // keymap.onDidChangeKeyboardLayout(() => {
        //     console.log("changed");
        //     this.handleChange();
        // });
    }

    handleChange = () => {
        // this.state.layout = keymap.getCurrentKeyboardLayout();
        // this.state.keyMap = keymap.getKeyMap();
    };

    dispose() {}
}
