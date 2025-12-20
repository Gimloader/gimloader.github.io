import { SvelteSet } from "svelte/reactivity";
import Port from "./port.svelte";
import type { Settings, State } from "./types/state";
import { parseScriptHeaders } from "./parseHeader";

export default new class Installer {
    plugins = new SvelteSet<string>();
    ready = $state(false);
    settings: Settings;

    init() {
        Port.on("pluginCreate", ({ name }) => this.plugins.add(name));
        Port.on("pluginDelete", ({ name }) => this.plugins.delete(name));
        Port.on("pluginDeleteAll", () => this.plugins.clear());
        Port.on("settingUpdate", ({ key, value }) => this.settings[key] = value);

        const onState = (state: State) => {
            this.ready = true;
            this.plugins.clear();
            this.settings = state.settings;
            for(let plugin of state.plugins) this.plugins.add(plugin.name);
        }

        Port.init(onState, onState);
    }

    async install(code: string) {
        let headers = parseScriptHeaders(code);
        let name = headers.name;

        await Port.sendAndRecieve("editOrCreate", { code, name });
    }
}