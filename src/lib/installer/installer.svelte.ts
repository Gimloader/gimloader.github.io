import { SvelteSet } from "svelte/reactivity";
import Port from "./port.svelte";
import type { Settings, State } from "./types/state";
import { parseScriptHeaders } from "./parseHeader";

export default new class Installer {
    plugins = new SvelteSet<string>();
    libraries = new SvelteSet<string>();
    ready = $state(false);

    init() {
        Port.on("pluginCreate", ({ name }) => this.plugins.add(name));
        Port.on("pluginDelete", ({ name }) => this.plugins.delete(name));
        Port.on("pluginDeleteAll", () => this.plugins.clear());

        const onState = (state: State) => {
            this.ready = true;
            this.plugins.clear();
            for(let plugin of state.plugins) this.plugins.add(plugin.name);
        }

        Port.init(onState, onState);
    }

    async install(code: string) {
        const headers = parseScriptHeaders(code);
        const name = headers.name;

        if(this.plugins.has(name)) {
            Port.postMessage("pluginEdit", {
                folder: "root",
                info: {
                    code,
                    name,
                    newName: name
                }
            });
        } else {
            Port.postMessage("pluginCreate", {
                folder: "root",
                info: {
                    code,
                    name,
                    enabled: true
                }
            });
        }
    }
}