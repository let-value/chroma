import { access } from "fs";
import { AnimationFrame, Color, Key } from "../chroma-js/src";
import { scancodes, names } from "../data/scancodes";
import { getChromaKey } from "../utils/keyCode";

const colors = {
    black: "#0F3B3A",
    darkGray: "#155352",
    brightGrey: "#B1C9C3",
    red: "#DC322F",
    orange: "#CB4B16",
    yellow: "#CFC041",
    green: "#009403",
    blue: "#0048BD",
    lightBlue: "#40A4B9",
    magenta: "#B154CF",
    brown: "#98875F"
};

const solarized: Record<number, string> = {};

const darkGreyKeys = Array()
    .concat(
        Object.entries(scancodes)
            .filter(([_, key]) => key.includes("Key"))
            .map(([code]) => code)
    )
    .concat(
        Object.entries(scancodes)
            .filter(([_, key]) => /Numpad(\d)/.test(key))
            .map(([code]) => code)
    );
for (const key of darkGreyKeys) {
    solarized[key] = colors.darkGray;
}

const brightGreyKeys = Array()
    .concat(
        Object.entries(scancodes)
            .filter(([_, key]) => key.includes("Digit"))
            .map(([code]) => code)
    )
    .concat([
        names.Backquote,
        names.Minus,
        names.Equal,
        names.BracketLeft,
        names.BracketRight,
        names.Semicolon,
        names.Period,
        names.Comma,
        names.Quote,
        names.Slash,
        names.Backslash,
        names.NumpadDivide,
        names.NumpadMultiply,
        names.NumpadSubtract,
        names.NumpadAdd,
        names.NumpadDecimal
    ]);
for (const key of brightGreyKeys) {
    solarized[key] = colors.brightGrey;
}

const lightBlueKeys = [names.Escape, names.F5, names.F6, names.F7, names.F8];
for (const key of lightBlueKeys) {
    solarized[key] = colors.lightBlue;
}

const blueKeys = [names.AltLeft, names.AltRight];
for (const key of blueKeys) {
    solarized[key] = colors.blue;
}

const redKeys = [names.ControlLeft, names.ControlRight];
for (const key of redKeys) {
    solarized[key] = colors.red;
}

const orangeKeys = [names.Tab, names.Backspace, names.Delete];
for (const key of orangeKeys) {
    solarized[key] = colors.orange;
}

const yellowKeys = [names.Meta, names.Function, names.MenuRight];
for (const key of yellowKeys) {
    solarized[key] = colors.yellow;
}

const greenKeys = [names.ShiftLeft, names.ShiftRight];
for (const key of greenKeys) {
    solarized[key] = colors.green;
}

const magentaKeys = [names.CapsLock, names.Enter, names.NumpadEnter];
for (const key of magentaKeys) {
    solarized[key] = colors.magenta;
}

const brownKeys = [
    names.Home,
    names.PageUp,
    names.PageDown,
    names.End,
    names.ArrowUp,
    names.ArrowDown,
    names.ArrowLeft,
    names.ArrowRight
];

for (const key of brownKeys) {
    solarized[key] = colors.brown;
}

const solarizedChroma = Object.entries(solarized).reduce(
    (acc, [keyCode, color]) => {
        const key = getChromaKey(parseInt(keyCode));
        if (key) {
            acc.push([key, new Color(color)]);
        }
        return acc;
    },
    Array<[Key, Color]>()
);

export default function applySolarizedColors(frame: AnimationFrame) {
    frame.Keyboard.setAll(new Color(colors.black));

    for (const [key, color] of solarizedChroma) {
        frame.Keyboard.setKey(key, color);
    }
}
