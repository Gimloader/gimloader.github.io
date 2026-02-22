import { readConfig, readScripts } from "$lib/scripts";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
    const plugins = await readScripts("plugins");

    const value = await Promise.all(plugins.map(async (plugin) => {
        const config = await readConfig("plugins", plugin);
        return {
            title: plugin,
            description: config.description,
            author: config.author,
            downloadUrl: config.downloadUrl,
            reloadRequired: config.reloadRequired,
            webpage: `https://gimloader.github.io/plugins/${plugin}`
        }
    }));

    return Response.json(value);
}