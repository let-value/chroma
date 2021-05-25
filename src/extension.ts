import { inherits } from "util";
import * as vscode from "vscode";
import Connection from "./connection";
import Manager from "./manager";

export function activate(context: vscode.ExtensionContext) {
    const connection = new Connection();
    const manager = new Manager(connection);

    async function init() {
        await connection.start();
        await manager.start();
    }

    try {
        init();
    } catch (error) {
        console.error(error);
    }

    context.subscriptions.push(connection, manager);
}

export function deactivate() {}
