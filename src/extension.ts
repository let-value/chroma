import { ExtensionContext } from "vscode";
import Connection from "./connection";
import { KeyboardHook } from "./keyboardHook";
import KeyboardLayout from "./keyboardLayout";
import Manager from "./manager";

import State from "./state/State";

export function activate(context: ExtensionContext) {
    const state = new State();

    const connection = new Connection();
    const hook = new KeyboardHook();
    const layout = new KeyboardLayout(state.keyboard);

    const manager = new Manager(context, connection, hook, state);

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

    context.subscriptions.push(connection, hook, layout, manager);
}

export function deactivate() {}
