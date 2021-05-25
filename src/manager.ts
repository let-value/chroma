import * as vscode from "vscode";
import Connection from "./connection";
import getKeyBindings from "./utils/getKeyBindings";

export default class Manager implements vscode.Disposable {
    constructor(public connection: Connection) {}
    async start() {
        const editor = vscode.window.activeTextEditor;
        console.log(await getKeyBindings());
        const configuration = vscode.workspace.getConfiguration();
    }
    dispose() {}
}
