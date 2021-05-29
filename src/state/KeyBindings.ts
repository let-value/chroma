import { makeAutoObservable, runInAction } from "mobx";
import { Disposable, ExtensionContext, workspace } from "vscode";
import getKeyBindings from "../keyBindings/getKeyBindings";
import KeyBinding from "../keyBindings/KeyBinding";
import getKeysLookup, { KeyLookup } from "../utils/getCommands";

export default class KeyBindings implements Disposable {
    private subscriptions: Disposable[] = [];
    keyBindings: KeyBinding[] = [];
    lookUps: KeyLookup[] = [];

    constructor(private context: ExtensionContext) {
        makeAutoObservable(this);

        this.subscriptions.push(
            workspace.onDidChangeConfiguration(
                this.handleConfiguration.bind(this)
            )
        );
    }

    async getKeys() {
        const keyBindings = await getKeyBindings(this.context);
        const lookUps = getKeysLookup(this.keyBindings);

        runInAction(() => {
            this.keyBindings = keyBindings;
            this.lookUps = lookUps;
        });
    }

    async handleConfiguration() {
        await this.getKeys();
    }

    dispose() {
        for (const subsription of this.subscriptions) {
            subsription.dispose();
        }
    }
}
