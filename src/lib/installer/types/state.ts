import type { HotkeyTrigger } from "./hotkeys.js";

export interface PluginInfo {
    script: string;
    name: string;
    enabled: boolean;
}

export interface LibraryInfo {
    script: string;
    name: string;
}

export type ScriptInfo = PluginInfo | LibraryInfo;

export type PluginStorage = Record<string, Record<string, any>>

export type ConfigurableHotkeysState = Record<string, HotkeyTrigger | null>;

export interface Settings {
    pollerEnabled: boolean;
    autoUpdate: boolean;
    autoDownloadMissingLibs: boolean;
    menuView: 'grid' | 'list';
    showPluginButtons: boolean;
    showCustomServer: boolean;
    joiningCustomServer: boolean;
}

export interface CustomServer {
    name: string;
    address: string;
    port: number;
    id: string;
}

export interface CustomServerConfig {
    enabled: boolean;
    selected: number | null;
    servers: CustomServer[];
}

export interface SavedState {
    plugins: PluginInfo[];
    libraries: LibraryInfo[];
    pluginStorage: PluginStorage;
    settings: Settings;
    hotkeys: ConfigurableHotkeysState;
    customServer: CustomServerConfig;
}

export interface State extends SavedState {
    availableUpdates: string[];
}