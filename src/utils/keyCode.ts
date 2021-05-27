import { names, scancodes } from "../data/scancodes";
import { KeyboardHookEvent } from "../keyboardHook";

export function getKeyCode(search: string): number {
    const code = names[search];
    if (code) {
        return code;
    }

    console.error("Unknown key", search);

    return undefined as any;
}

export function getKeyName(input: number | KeyboardHookEvent) {
    let code: number = input as number;

    if (typeof input === "object") {
        code = input.keycode ?? input.rawcode;
    }

    const hasKey = scancodes[code];
    if (hasKey) {
        return hasKey;
    }

    console.error("Unknown key code", code);

    return undefined;
}
