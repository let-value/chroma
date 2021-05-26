import { extensions } from "vscode";
import KeyBinding from "./KeyBinding";

export default function getExtensionsKeyBindings(): KeyBinding[] {
    const result: KeyBinding[] = [];

    for (const extension of extensions.all) {
        const keybindings = extension.packageJSON?.contributes
            ?.keybindings as KeyBinding[];

        if (keybindings) {
            result.push(...keybindings);
        }
    }

    return result;
}
