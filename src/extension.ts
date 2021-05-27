import { ExtensionContext } from "vscode";
import { configure } from "mobx";
import Connection from "./connection";
import KeyboardListener from "./listener";
import Manager from "./manager";

import State from "./state/State";

configure({
    enforceActions: "never"
});

export function activate(context: ExtensionContext) {
    const state = new State();

    const connection = new Connection();
    const layout = new KeyboardListener(state.keyboard);

    const manager = new Manager(context, connection, state);

    async function init() {
        await connection.start();
        await layout.start();
        await manager.start();
    }

    try {
        init();
    } catch (error) {
        console.error(error);
    }

    context.subscriptions.push(connection, layout, manager);
}

export function deactivate() {}
