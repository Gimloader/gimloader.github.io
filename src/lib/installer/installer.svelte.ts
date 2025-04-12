import { SvelteSet } from "svelte/reactivity";
import Port from "./port.svelte";
import type { Settings, State } from "./types/state";
import { parsePluginHeader } from "./parseHeader";

export default new class Installer {
    plugins = new SvelteSet<string>();
    ready = $state(false);
    settings: Settings;

    init() {
        Port.on("pluginCreate", ({ name }) => this.plugins.add(name));
        Port.on("pluginDelete", ({ name }) => this.plugins.delete(name));
        Port.on("pluginsDeleteAll", () => this.plugins.clear());
        Port.on("settingUpdate", ({ key, value }) => this.settings[key] = value);

        const onState = (state: State) => {
            this.ready = true;
            this.plugins.clear();
            this.settings = state.settings;
            for(let plugin of state.plugins) this.plugins.add(plugin.name);
        }

        Port.init(onState, onState);
    }

    async install(script: string) {
        let headers = parsePluginHeader(script);
        let name = headers.name;

        if(this.settings.autoDownloadMissingLibs) {
            await Port.sendAndRecieve("downloadLibraries", { libraries: headers.needsLib });
        }

        if(this.plugins.has(name)) {
            Port.send("pluginEdit", { name, newName: name, script });
        } else {
            Port.send("pluginCreate", { name, script });
        }     
    }
}