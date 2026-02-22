import { readdir, readFile } from "node:fs/promises";

type ScriptCategory = "plugins" | "libraries";

interface Config {
    name: string;
    description: string;
    author: string;
    downloadUrl: string;
    reloadRequired: string | boolean;
    desyncs: boolean;
}

const descriptionRegex = /description:\s*"([^"]+)"/;
const authorRegex = /author:\s*"([^"]+)"/;
const downloadUrlRegex = /downloadUrl:\s*"([^"]+)"/;
const reloadRequiredRegex = /reloadRequired:\s*(true|false|"[^"]+")/;
const needsPluginsRegex = /needsPlugins:\s*\[([^\]]+)\]/;

export async function readConfig(category: ScriptCategory, name: string): Promise<Config> {
    const content = await readFile(`./client-plugins/${category}/${name}/gimloader.config.ts`, "utf-8");
    
    const descriptionMatch = content.match(descriptionRegex);
    const authorMatch = content.match(authorRegex);
    const downloadUrlMatch = content.match(downloadUrlRegex);
    const reloadRequiredMatch = content.match(reloadRequiredRegex);
    const needsPluginsMatch = content.match(needsPluginsRegex);
    if(!descriptionMatch || !authorMatch || !downloadUrlMatch) throw new Error(`Invalid config for ${category} ${name}`);

    // Convert reloadRequired to a boolean or string
    let reloadRequired: string | boolean = false;
    if(reloadRequiredMatch) {
        const value = reloadRequiredMatch[1];
        if(value === "true") reloadRequired = true;
        else if(value === "false") reloadRequired = false;
        else reloadRequired = value.slice(1, -1);;
    }

    // Check whether the plugin is Desynchronize or requires it
    const desyncs = name === "Desynchronize" || needsPluginsMatch?.[1].includes("Desynchronize");

    return {
        name,
        description: descriptionMatch[1],
        author: authorMatch[1],
        downloadUrl: downloadUrlMatch[1],
        reloadRequired,
        desyncs
    };
}

export function readScripts(category: ScriptCategory) {
    return readdir(`./client-plugins/${category}`);
}