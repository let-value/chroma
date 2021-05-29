import { WorkspaceConfiguration } from "vscode";

export interface KeyColorSettings {
    key: string;
    default: string;
    highlighted: string;
}

export interface SettingsScheme {
    solarized: boolean;
    theme: boolean;
    colors: {
        base: string;
        group: {
            modifier: string;
            editing: string;
            system: string;
        };
        keys: KeyColorSettings[];
    };
}

export default interface ExtensionSettings
    extends WorkspaceConfiguration,
        SettingsScheme {
    get<T>(section: Paths<SettingsScheme>): T | undefined;
}
