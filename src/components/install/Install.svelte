<script lang="ts">
    import type { ScriptHeaders } from 'src/lib/installer/types/headers';
    import Installer from 'src/lib/installer/installer.svelte';
    import { parseScriptHeaders } from 'src/lib/installer/parseHeader';
    import Port from 'src/lib/installer/port.svelte';
    import Highlight from 'svelte-highlight';
    import javascript from 'svelte-highlight/languages/javascript';
    import onedark from 'svelte-highlight/styles/onedark';

    Installer.init();

    const searchParams = new URLSearchParams(window.location.search);
    const installUrl = searchParams.get('installUrl');

    function fetchScript() {
        return new Promise<{ script: string, headers: ScriptHeaders }>(async (res, rej) => {
            try {
                let resp = await fetch(installUrl);
                let script = await resp.text();
                let headers = parseScriptHeaders(script);

                res({ script, headers });
            } catch(e) {
                rej(e);
            }
        });
    }

    let installing: Promise<void> | null = $state(null);
    let installComplete = $state(false);
    let installError = $state("");

    function install(script: string) {
        installing = Installer.install(script)
            .then(() => installComplete = true)
            .catch((e) => installError = e.message);
    }
</script>

<svelte:head>
    {@html onedark}
</svelte:head>

<div class="flex justify-center max-h-screen">
    <div class="p-5 max-h-full" style="max-width: min(90%, max(900px, 50%))">
        <div class="bg-primary-foreground drop-shadow-lg rounded-lg p-5 h-full">
            {#if installComplete}
                <h1 class="w-full text-center font-bold text-5xl">
                    Installed Successfully
                </h1>
                <p>You may now close this page.</p>
            {:else if installError}
                <h1 class="w-full text-center font-bold text-5xl">
                    An error occured
                </h1>
                <pre>{installError}</pre>
            {:else}
                {#if installUrl}
                    {#if Port.unavailable}
                        <h1 class="text-5xl font-bold w-full text-center">
                            Gimloader Not Found
                        </h1>
                        <p>
                            Follow the instructions
                            <a href="/usage/installation"
                            class="underline text-blue-600" rel="noopener noreferrer">
                                here
                            </a>
                            to install it.
                        </p>
                    {:else}
                        {#await fetchScript()}
                            <p>Loading script...</p>
                        {:then { script, headers }}
                            {#if !Installer.ready}
                                <p>Waiting for Gimloader...</p>
                            {:else}
                                <div class="flex flex-col h-full">
                                    <h1 class="w-full text-center font-bold text-5xl">
                                        {headers.name}
                                        {#if headers.version}
                                            <span class="text-xl font-normal">v{headers.version}</span>
                                        {/if}
                                    </h1>
                                    <h2 class="text-3xl w-full text-center">
                                        By {headers.author}
                                    </h2>
                                    <p class="w-full text-center">
                                        {headers.description}
                                    </p>
                                    <div class="overflow-y-auto mt-3 rounded-md">
                                        <Highlight language={javascript} code={script} />
                                    </div>
                                    <button onclick={() => install(script)}
                                    class="bg-green-700 rounded-full mt-3 p-1">
                                        {#if installing}
                                            {#await installing}
                                                Installing...
                                            {/await}
                                        {:else}
                                            {Installer.plugins.has(headers.name) ? "Reinstall" : "Install"}
                                        {/if}
                                    </button>
                                </div>
                            {/if}
                        {:catch error}
                            <h1 class="text-5xl font-bold w-full text-center">
                                Error Loading Script
                            </h1>
                            <p class="pt-3 text-xl">
                                {error.message}
                            </p>
                        {/await}
                    {/if}
                {:else}
                    <h1 class="text-5xl font-bold w-full text-center">
                        Invalid Install Link
                    </h1>
                    <p class="pt-3 text-xl">
                        This page is for installing Gimloader plugins from a link.
                        If you don't have a link to a plugin, there is nothing to do here.
                        <a class="underline cursor-pointer" href="/">Go home?</a>
                    </p>
                {/if}
            {/if}
        </div>
    </div>
</div>