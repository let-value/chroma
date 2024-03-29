import { makeAutoObservable, runInAction } from "mobx";
import {
    ColorTheme,
    ColorThemeKind,
    Disposable,
    ViewColumn,
    WebviewPanel,
    window,
    workspace
} from "vscode";
import { debounce } from "lodash-es";

import { VSTheme } from "./VSTheme";

import view from "html-loader!./view.html";

export default class ThemeState implements Disposable {
    private subscriptions: Disposable[] = [];
    kind?: ColorThemeKind;
    private panel?: WebviewPanel;
    private name = "Chroma";
    colors?: VSTheme = undefined;
    constructor() {
        this.handleActiveColorTheme(window.activeColorTheme);

        const debouncedHandler = debounce(
            this.handleActiveColorTheme.bind(this),
            10 * 1000,
            {
                leading: false,
                maxWait: Number.MAX_VALUE
            }
        );

        this.subscriptions.push(
            window.onDidChangeActiveColorTheme(debouncedHandler)
        );

        makeAutoObservable(this);
    }

    private handleActiveColorTheme(colorTheme: ColorTheme) {
        this.kind = colorTheme.kind;
        this.updateColors();
    }

    private updateColors() {
        if (this.panel) {
            this.panel.dispose();
        }

        this.panel = window.createWebviewPanel(
            this.name,
            this.name,
            ViewColumn.Active,
            {
                enableScripts: true
            }
        );

        this.panel.webview.html = view;

        let subsription = this.panel.webview.onDidReceiveMessage(
            (colors: VSTheme) => {
                runInAction(() => {
                    this.colors = colors;
                });
                subsription.dispose();
                this.panel!.dispose();
            }
        );
    }

    dispose() {
        this.subscriptions.forEach((x) => x.dispose());
    }
}
