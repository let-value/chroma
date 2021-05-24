import * as vscode from "vscode";
import ConnectionManager from "./instance";

export function activate(context: vscode.ExtensionContext) {
    const connection = new ConnectionManager();

    try {
        connection.start();
    } catch (error) {
        console.error(error);
    }

    context.subscriptions.push(connection);
}

// this method is called when your extension is deactivated
export function deactivate() {}
