import { window, workspace, Disposable, ExtensionContext } from "vscode";
import Connection from "./connection";
import getKeyBindings from "./keyBindings/getKeyBindings";

export default class Manager implements Disposable {
    constructor(
        public context: ExtensionContext,
        public connection: Connection
    ) {}
    async start() {
        const keyBindings = await getKeyBindings(this.context);

        const configuration = workspace.getConfiguration();
    }
    dispose() {}
}
