import type { HotkeyTrigger } from "./hotkeys.js";
import type { ConfigurableHotkeysState, CustomServerConfig, SavedState, State } from "./state.js";

// These go both ways
export interface StateMessages {
    hotkeyUpdate: { id: string, trigger: HotkeyTrigger };
    hotkeysUpdate: { hotkeys: ConfigurableHotkeysState };

    libraryEdit: { name: string, newName: string, script: string };
    libraryDelete: { name: string };
    librariesDeleteAll: void;
    libraryCreate: { name: string, script: string };
    librariesArrange: { order: string[] };

    pluginEdit: { name: string, newName: string, script: string };
    pluginDelete: { name: string };
    pluginsDeleteAll: void;
    pluginCreate: { name: string, script: string };
    pluginsArrange: { order: string[] };
    pluginToggled: { name: string, enabled: boolean };
    pluginsSetAll: { enabled: boolean };

    settingUpdate: { key: string, value: any };

    pluginValueUpdate: { id: string, key: string, value: string };
    pluginValueDelete: { id: string, key: string };
    pluginValuesDelete: { id: string };

    customServerUpdate: CustomServerConfig;
}

// These only go from the background to content
export interface Messages extends StateMessages {
    setState: SavedState;
    toast: { type: "success" | "error" | "normal", message: string };
    availableUpdates: string[];
    customServerUpdate: CustomServerConfig;
}

export interface OnceMessages {
    getState: void;
    setState: SavedState;
    downloadLibraries: { libraries: string[] };
    applyUpdates: { apply: boolean };
    updateAll: void;
    updateSingle: { type: "plugin" | "library", name: string };
}

export interface OnceResponses {
    getState: State;
    setState: void;
    downloadLibraries: { allDownloaded: boolean, error?: string };
    applyUpdates: void;
    updateAll: string[];
    updateSingle: { updated: boolean, failed?: boolean, version?: string };
}