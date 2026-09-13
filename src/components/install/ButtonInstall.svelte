<script lang="ts">
    import Port from "@gimloader/ipc/port";
    import { StateManager } from "@gimloader/ipc";

    let ready = $state(false);
    StateManager.events.on("init", () => ready = true);

    let disconnected = $state(false);
    Port.disconnected.bind(() => disconnected, (val) => disconnected = val);
    
    let unavailable = $state(false);
    Port.unavailable.bind(() => unavailable, (val) => unavailable = val);

    Port.init();

    let { name, url }: { name: string, url: string } = $props();
    let installing: Promise<void> | null = $state(null);
    const extensionLink = navigator.userAgent.includes("Firefox")
        ? "https://addons.mozilla.org/en-US/firefox/addon/gimloader/"
        : "https://chromewebstore.google.com/detail/gimloader/ngbhofnofkggjbpkpnogcdfdgjkpmgka";

    async function install() {
        if(!ready || installing) return;

        installing = new Promise<void>(async (res, rej) => {
            try {
                const resp = await fetch(url);
                const script = await resp.text();

                await StateManager.allScripts.editOrCreate(script, null);

                res();
            } catch {
                rej();
            }
        });
    }
</script>

<div class="wrap pt-[65px]">
    {#if disconnected}
        <div class="install-action">
            Gimloader extension disconnected, please reload the page to install.
        </div>
    {:else if ready}
        <button class="install-action" onclick={install}>
            {#if installing}
                {#await installing}
                    Installing...
                {:then}
                    Installed!
                {:catch}
                    Error installing
                {/await}
            {:else}
                {#if StateManager.plugin.scripts.value.some((s) => s.name === name)}
                    Reinstall Plugin
                {:else}
                    Install Plugin
                {/if}
            {/if}
        </button>
    {:else if unavailable}
        <a class="install-action" href={extensionLink} target="_blank">
            Gimloader extension not found
        </a>
    {:else}
        <div class="install-action">
            Waiting for Gimloader extension...
        </div>
    {/if}
</div>