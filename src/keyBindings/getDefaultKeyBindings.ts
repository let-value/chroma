import { platform } from "os";

import KeyBinding from "./KeyBinding";

import windows from "../vs-code-default-keybindings/windows.keybindings.json";
import linux from "../vs-code-default-keybindings/linux.keybindings.json";
import mac from "../vs-code-default-keybindings/macos.keybindings.json";

export default function getDefaultKeyBindings(): KeyBinding[] {
    switch (platform()) {
        case "darwin":
            return mac as unknown as KeyBinding[];
        case "win32":
            return windows as unknown as KeyBinding[];
        default:
            return linux as unknown as KeyBinding[];
    }
}
