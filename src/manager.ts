import { window, workspace, Disposable } from "vscode";
import Connection from "./connection";
import getKeyBindings from "./utils/getKeyBindings";

export default class Manager implements Disposable {
    constructor(public connection: Connection) {}
    async start() {
        console.log(await getKeyBindings());
        const configuration = workspace.getConfiguration();
    }
    dispose() {}
}
