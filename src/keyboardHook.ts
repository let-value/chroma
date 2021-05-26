import { Disposable } from "vscode";
import iohook from "iohook";

export class KeyboardHook implements Disposable {
    constructor() {
        iohook.useRawcode(true);

        iohook.on("keydown", (data) => this.handleEvent(data, "pressed"));
        iohook.on("keyup", (data) => this.handleEvent(data, "released"));
    }

    start() {
        iohook.start();
    }

    dispose(): void {
        iohook.stop();
    }

    handleEvent(data: any, action: "pressed" | "released"): void {
        console.log(data, action);
    }
}
