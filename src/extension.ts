import { ExtensionContext } from "vscode";
import Connection from "./connection";
import { KeyboardHook } from "./keyboardHook";
import Manager from "./manager";

export function activate(context: ExtensionContext) {
    const connection = new Connection();
    const hook = new KeyboardHook();
    const manager = new Manager(context, connection, hook);

    async function init() {
        await connection.start();
        await hook.start();
        await manager.start();
    }

    try {
        init();
    } catch (error) {
        console.error(error);
    }

    context.subscriptions.push(connection, hook, manager);
}

export function deactivate() {}
