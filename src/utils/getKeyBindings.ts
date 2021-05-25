import { window, commands } from "vscode";

export default async function getKeyBindings() {
    await commands.executeCommand<Location[]>(
        "workbench.action.openDefaultKeybindingsFile"
    );

    const activeEditor = window.activeTextEditor;
    if (!activeEditor) {
        return "";
    }

    const definitions = activeEditor.document.getText();
    await commands.executeCommand<Location[]>(
        "workbench.action.closeActiveEditor"
    );
    return definitions;
}
