import chroma from "chroma-js";
import { AnimationFrame, Color } from "../chroma-js/src";
import { VSTheme } from "../state/color/VSTheme";

import {
    editingChromaKeys,
    modifierChromaKeys,
    systemChromaKeys
} from "./keyGroups";

export default function applyThemeColors(
    frame: AnimationFrame,
    colors: VSTheme
) {
    //set base color
    const baseColor = new Color(chroma(colors.foreground).hex("rgb"));
    frame.Keyboard.setAll(baseColor);

    //set modifier key
    const modifierColor = new Color(
        chroma(colors["button-background"]).hex("rgb")
    );
    frame.Keyboard.setKey(modifierChromaKeys, modifierColor);

    //set enter and editing keys
    const editingColor = new Color(
        chroma(colors["symbolIcon-variableForeground"]).hex("rgb")
    );
    frame.Keyboard.setKey(editingChromaKeys, editingColor);

    //set enter and editing keys
    const systemColor = new Color(
        chroma(colors["symbolIcon-classForeground"]).hex("rgb")
    );
    frame.Keyboard.setKey(systemChromaKeys, systemColor);
}
