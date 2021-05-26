import { jsonc } from "jsonc";
import { join } from "path";
import { ExtensionContext } from "vscode";
import getDefaultUserDirPath from "../utils/getDefaultUserDirPath";
import readFileAsync from "../utils/readFileAsync";

import KeyBinding from "./KeyBinding";

export default async function getUserKeyBindings(context: ExtensionContext) {
    const result: KeyBinding[] = [];

    try {
        const path = getDefaultUserDirPath(context);
        const buffer = await readFileAsync(join(path, "keybindings.json"));
        const json = buffer.toString();
        const bindings = jsonc.parse(json) as KeyBinding[];

        result.push(...bindings);
    } catch {
        console.error("Cannot find default User keybindings");
    }

    return result;
}
