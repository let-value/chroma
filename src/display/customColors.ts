import { AnimationFrame, Color } from "../chroma-js/src";
import ExtensionSettings from "../state/ExtensionSettings";
import { getChromaKey, getKeyCode } from "../utils/keyCode";
import {
    editingChromaKeys,
    modifierChromaKeys,
    systemChromaKeys
} from "./keyGroups";

export default function applyCustomColors(
    frame: AnimationFrame,
    colors?: ExtensionSettings["colors"]
) {
    if (!colors) {
        return;
    }

    if (colors.base) {
        frame.setAll(new Color(colors.base));
    }

    if (colors.group.modifier) {
        frame.Keyboard.setKey(
            modifierChromaKeys,
            new Color(colors.group.modifier)
        );
    }

    if (colors.group.editing) {
        frame.Keyboard.setKey(
            editingChromaKeys,
            new Color(colors.group.editing)
        );
    }

    if (colors.group.system) {
        frame.Keyboard.setKey(systemChromaKeys, new Color(colors.group.system));
    }

    for (const setting of colors.keys) {
        const key = getChromaKey(getKeyCode(setting.key));

        if (key) {
            frame.Keyboard.setKey(key, new Color(setting.default));
        }
    }
}
