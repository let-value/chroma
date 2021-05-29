import { Disposable } from "vscode";
import {
    AppCategory,
    AppInfo,
    AuthorInfo,
    AvailableDevices,
    ChromaApp,
    ChromaInstance
} from "./chroma-js/src";

export default class Connection implements Disposable {
    chroma = new ChromaApp(
        new AppInfo(
            "Chroma",
            "Visual Studio Code Plugin for Razer Chroma",
            new AuthorInfo("let.value@gmail.com", "Alexander Chehovskii"),
            [AvailableDevices.Keyboard],
            AppCategory.Application
        )
    );

    instance: ChromaInstance | null = null;

    async start() {
        this.instance = await this.chroma.Instance(true);
    }

    dispose() {
        this.instance?.destroy();
    }
}
