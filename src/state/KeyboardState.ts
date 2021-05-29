import { action, makeAutoObservable, runInAction } from "mobx";
import { Disposable } from "vscode";
import { ModificatorMask } from "../utils/getCommands";
import { KeyboardHook, KeyboardHookEvent } from "../utils/keyboardHook";
import { getKeyName } from "../utils/keyCode";

function getEventMask(event: KeyboardHookEvent) {
    let modificators = 0;

    if (event.shiftKey) {
        modificators = modificators | ModificatorMask.Shift;
    }
    if (event.ctrlKey) {
        modificators = modificators | ModificatorMask.Control;
    }
    if (event.altKey) {
        modificators = modificators | ModificatorMask.Alt;
    }
    if (event.metaKey) {
        modificators = modificators | ModificatorMask.Meta;
    }
    return modificators;
}

interface LastKey extends Omit<KeyboardHookEvent, "type"> {
    modificators: number;
}

export default class KeyboardState implements Disposable {
    hook: KeyboardHook;
    pressed = new Map<string, KeyboardHookEvent>();
    lastKey?: LastKey;
    modificators: number = 0;
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

            if (event.type === "keydown") {
                const modificators = getEventMask(event);
                this.lastKey = {
                    ...event,
                    modificators
                };
            }

            this.modificators = Array.from(this.pressed.values()).reduce(
                (acc, key) => Math.max(acc, getEventMask(key)),
                0
            );
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
