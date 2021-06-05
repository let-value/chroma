import { Disposable } from "vscode";
import iohook from "@let-value/iohook";
import EventEmitter from "events";

export interface KeyboardHookEvent {
    altKey: boolean;
    ctrlKey: boolean;
    keycode: number;
    metaKey: boolean;
    rawcode: number;
    shiftKey: boolean;
    type: "keydown" | "keyup";
}

export class KeyboardHook implements Disposable {
    keyboardEvents = new EventEmitter();

    constructor() {
        iohook.useRawcode(true);

        iohook.on("keydown", this.handleKeyboard.bind(this));
        iohook.on("keyup", this.handleKeyboard.bind(this));
    }

    start() {
        iohook.start();
    }

    dispose(): void {
        iohook.stop();
    }

    handleKeyboard = (data: KeyboardHookEvent): void => {
        this.keyboardEvents.emit("key", data);
    };
}
