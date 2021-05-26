import KeyBinding from "./KeyBinding";

import getDefaultKeyBindings from "./getDefaultKeyBindings";
import getExtensionsKeyBindings from "./getExtensionsKeyBindings";
import getUserKeyBindings from "./getUserKeyBindings";
import { ExtensionContext } from "vscode";

export default async function getKeyBindings(
    context: ExtensionContext
): Promise<KeyBinding[]> {
    const _default = getDefaultKeyBindings();
    const user = await getUserKeyBindings(context);
    const extensions = getExtensionsKeyBindings();

    return Array<KeyBinding>().concat(_default).concat(user).concat(extensions);
}
