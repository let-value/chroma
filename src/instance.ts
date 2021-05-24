import * as vscode from "vscode";

import { ChromaApp, ChromaInstance } from "./chroma-js";
import { AppCategory } from "./chroma-js/src/AppInfo";
import { AvailableDevices } from "./chroma-js/src/Devices";

export default class ConnectionManager implements vscode.Disposable {
    chroma = new ChromaApp(
        "Chroma",
        "Visual Studio Code Plugin for Razer Chroma",
        "Alexander Chehovskii",
        "let.value@gmail.com",
        [AvailableDevices.Keyboard],
        AppCategory.Application
    );

    instance?: ChromaInstance;

    async start() {
        this.instance = await this.chroma.Instance(true);
    }

    dispose() {
        this.instance?.destroy();
    }
}
