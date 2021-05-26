import { join } from "path";
import { ExtensionContext } from "vscode";

export default function getDefaultUserDirPath(context: ExtensionContext) {
    return join(context.logPath, "..", "..", "..", "..", "User");
}
