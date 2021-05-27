import { chromaCodes, names, scancodes } from "../data/scancodes";
import { KeyboardHookEvent } from "./keyboardHook";

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

export const modifierKeys = [
    names.ShiftLeft,
    names.ControlLeft,
    names.AltLeft,
    names.ShiftRight,
    names.ControlRight,
    names.AltRight
];

export const systemKeys = [names.MetaLeft, names.Escape, names.MenuRight];

export const editingKeys = [
    names.Enter,
    names.NumpadEnter,
    names.Backspace,
    names.Insert,
    names.Delete
];

export function getChromaKey(keyCode: number) {
    const hasKey = chromaCodes[keyCode];
    if (hasKey) {
        return hasKey;
    }

    console.error("Unknown key code", keyCode);

    return undefined;
}

export function getChromaKeys(keys: number[]) {
    return keys.map((x) => getChromaKey(x)!).filter(Boolean);
}
