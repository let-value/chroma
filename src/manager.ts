import { workspace, Disposable, ExtensionContext, debug } from "vscode";
import Connection from "./connection";
import getKeyBindings from "./keyBindings/getKeyBindings";
import { KeyboardHook } from "./keyboardHook";

export default class Manager implements Disposable {
    constructor(
        public context: ExtensionContext,
        public connection: Connection,
        public hook: KeyboardHook
    ) {}
    async start() {
        const keyBindings = await getKeyBindings(this.context);
        const configuration = workspace.getConfiguration();
    }
    dispose() {}
}
