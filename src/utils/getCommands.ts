import { pascalCase } from "pascal-case";
import { names } from "../data/scancodes";
import KeyBinding from "../keyBindings/KeyBinding";
import { getKeyCode, getKeyName } from "./keyCode";

export interface Key {
    ctrl: boolean;
    shift: boolean;
    cmd: boolean;
    win: boolean;
    meta: boolean;
    alt: boolean;
    key: string;
    keyCode: number;
}

export interface KeyLookup {
    sequence: Key[];
    binding: KeyBinding;
}

export default function getKeysLookup(keyBindings: KeyBinding[]) {
    const keys = keyBindings.map(
        (binding): KeyLookup => {
            const keysSequence = binding.key.split(" ");
            const sequence = keysSequence.map(
                (keyNotation): Key => {
                    const codes = keyNotation
                        .toLocaleLowerCase()
                        .split("+")
                        .map((key) => getKeyCode(pascalCase(key) || key))
                        .reverse();

                    const [keyCode, ...modifiers] = codes;

                    return {
                        shift: modifiers.includes(names.Shift),
                        ctrl: modifiers.includes(names.Ctrl),
                        alt: modifiers.includes(names.Alt),
                        cmd: modifiers.includes(names.Cmd),
                        win: modifiers.includes(names.Win),
                        meta: modifiers.includes(names.Meta),
                        key: getKeyName(keyCode)!,
                        keyCode
                    };
                }
            );

            return {
                sequence,
                binding
            };
        }
    );

    console.log(keyBindings.length, keys.length);

    return keys;
}
