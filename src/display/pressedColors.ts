import chroma from "chroma-js";
import { AnimationFrame, Color } from "../chroma-js/src";
import KeyboardState from "../state/KeyboardState";
import { getChromaKey } from "../utils/keyCode";

export default function applyPressedColors(
    frame: AnimationFrame,
    keyboard: KeyboardState
) {
    Array.from(keyboard.pressed.values()).forEach((event) => {
        const key = getChromaKey(event.keycode);
        if (!key) {
            return;
        }

        let color = frame.Keyboard.getKey(key);
        if (!color) {
            return;
        }

        color = new Color(
            chroma(color.toHEX())
                .brighten(1)
                .hex("rgb")
        );

        frame.Keyboard.setKey(key, color);
    });
}
