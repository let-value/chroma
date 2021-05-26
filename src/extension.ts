import { ExtensionContext } from "vscode";
import Connection from "./connection";
import Manager from "./manager";

export function activate(context: ExtensionContext) {
    const connection = new Connection();
    const manager = new Manager(context, connection);

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
