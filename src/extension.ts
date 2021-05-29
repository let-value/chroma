import { ExtensionContext } from "vscode";
import Connection from "./connection";
import Display from "./display";

import State from "./state/State";

export function activate(context: ExtensionContext) {
    const state = new State(context);
    const connection = new Connection();
    const display = new Display(connection, state);

    async function init() {
        await connection.start();
        await state.start();
        await display.start();
    }

    try {
        init();
    } catch (error) {
        console.error(error);
    }

    context.subscriptions.push(connection, state, display);
}

export function deactivate() {}
