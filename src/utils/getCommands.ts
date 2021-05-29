import { memoize } from "lodash-es";
import { pascalCase } from "pascal-case";
import { names } from "../data/scancodes";
import KeyBinding from "../keyBindings/KeyBinding";
import { getKeyCode, getKeyName } from "./keyCode";

const CHROD_SEPARATOR = " ";
const KEY_SEPARATOR = "+";

export enum ModificatorMask {
    Control = 1,
    Alt = 2,
    Shift = 4,
    Meta = 8
}

export interface Key {
    ctrl: boolean;
    shift: boolean;
    meta: boolean;
    alt: boolean;
    modificators: number;
    key: string;
    keyCode: number;
}

export interface KeyLookup {
    chord: Key[];
    binding: KeyBinding;
}

const parseKey = memoize(
    (keyNotation: string): Key => {
        const tokens = keyNotation
            .toLowerCase()
            .split(KEY_SEPARATOR)
            .map((key) => getKeyCode(pascalCase(key) || key));

        tokens.reverse();

        const [keyCode, ...prefixes] = tokens;

        const shift = prefixes.includes(names.Shift);
        const ctrl = prefixes.includes(names.Ctrl);
        const alt = prefixes.includes(names.Alt);
        const meta =
            prefixes.includes(names.Meta) ||
            prefixes.includes(names.Win) ||
            prefixes.includes(names.Cmd);

        let modificators = 0;

        if (shift) {
            modificators = modificators | ModificatorMask.Shift;
        }
        if (ctrl) {
            modificators = modificators | ModificatorMask.Control;
        }
        if (alt) {
            modificators = modificators | ModificatorMask.Alt;
        }
        if (meta) {
            modificators = modificators | ModificatorMask.Meta;
        }

        return {
            shift,
            ctrl,
            alt,
            meta,
            modificators,
            key: getKeyName(keyCode)!,
            keyCode
        };
    }
);

export default function getKeysLookup(keyBindings: KeyBinding[]) {
    const keys = keyBindings.map(
        (binding): KeyLookup => {
            const rawChord = binding.key.split(CHROD_SEPARATOR);
            const chord = rawChord.map(parseKey);

            return {
                chord,
                binding
            };
        }
    );

    const chainSize = keys.reduce(
        (acc, key) => Math.max(acc, key.chord.length),
        0
    );
    const sizeGroups = Array<KeyLookup[]>(chainSize)
        .fill(null as any)
        .map(() => [] as KeyLookup[]);

    for (const key of keys) {
        const index = key.chord.length - 1;
        sizeGroups[index].push(key);
    }

    console.log();

    // const groups = keys.reduce((acc, key) => {
    //     if(acc.has(key.binding.command))
    //     return acc;
    // }, new Map<number, KeyLookup[]>())

    return { keys };
}
