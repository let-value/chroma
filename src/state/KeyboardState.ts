import { action, makeAutoObservable, runInAction } from "mobx";
import { Disposable } from "vscode";
import { KeyboardHook, KeyboardHookEvent } from "../utils/keyboardHook";
import { getKeyName } from "../utils/keyCode";

export default class KeyboardState implements Disposable {
    hook: KeyboardHook;
    pressed = new Map<string, KeyboardHookEvent>();
    constructor() {
        this.hook = new KeyboardHook();
        this.hook.keyboardEvents.addListener(
            "key",
            this.handleKeyboardEvents.bind(this)
        );

        makeAutoObservable(this, {
            hook: false
        });
    }

    start() {
        this.hook.start();
    }

    handleKeyboardEvents(event: KeyboardHookEvent) {
        const key = getKeyName(event);

        if (!key) {
            return;
        }

        runInAction(() => {
            if (event.type === "keydown") {
                if (!this.pressed.has(key)) {
                    this.pressed.set(key, event);
                }
            } else {
                this.pressed.delete(key);
            }
        });
    }

    dispose() {
        this.hook.keyboardEvents.removeListener(
            "key",
            this.handleKeyboardEvents
        );
        this.hook.dispose();
    }
}
