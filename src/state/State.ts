import { makeAutoObservable, observable } from "mobx";
import { Disposable, ExtensionContext, workspace } from "vscode";
import ThemeState from "./color/colors";
import ExtensionSettings from "./ExtensionSettings";
import KeyBindings from "./KeyBindings";
import KeyboardState from "./KeyboardState";

export default class State implements Disposable {
    keyboard = new KeyboardState();
    theme = new ThemeState();
    bindings: KeyBindings;
    configuration: ExtensionSettings = {} as ExtensionSettings;
    isDebug: boolean = false;
    private subscriptions: Disposable[] = [];
    constructor(context: ExtensionContext) {
        this.bindings = new KeyBindings(context);
        this.handleConfiguration();

        makeAutoObservable(this, { configuration: observable });

        this.subscriptions.push(
            workspace.onDidChangeConfiguration(
                this.handleConfiguration.bind(this)
            ),
            this.keyboard,
            this.theme
        );
    }

    async start() {
        this.keyboard.start();
        //this.theme.start();
    }

    getConfiguration() {
        this.configuration = (workspace.getConfiguration(
            "chroma"
        ) as unknown) as ExtensionSettings;
    }

    handleConfiguration() {
        this.getConfiguration();
    }

    dispose() {
        for (const subsription of this.subscriptions) {
            subsription.dispose();
        }
    }
}
