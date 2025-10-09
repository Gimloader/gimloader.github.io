<script lang="ts">
    import Installer from "src/lib/installer/installer.svelte";
    import Port from "src/lib/installer/port.svelte";

    Installer.init();

    let { name, url }: { name: string, url: string } = $props();
    let installing: Promise<void> | null = $state(null);
    const extensionLink = navigator.userAgent.includes("Firefox")
        ? "https://addons.mozilla.org/en-US/firefox/addon/gimloader/"
        : "https://chromewebstore.google.com/detail/gimloader/ngbhofnofkggjbpkpnogcdfdgjkpmgka";

    function install() {
        if(!Installer.ready || installing) return;

        installing = new Promise<void>(async (res, rej) => {
            try {
                let resp = await fetch(url);
                let script = await resp.text();

                await Installer.install(script);

                res();
            } catch {
                rej();
            }
        });
    }
</script>

<div class="wrap pt-[65px]">
    {#if Port.disconnected}
        <div class="action">
            Gimloader extension disconnected, please reload the page to install.
        </div>
    {:else if Installer.ready}
        <button class="action" onclick={install}>
            {#if installing}
                {#await installing}
                    Installing...
                {:then}
                    Installed!
                {:catch}
                    Error installing
                {/await}
            {:else}
                {#if Installer.plugins.has(name)}
                    Reinstall Plugin
                {:else}
                    Install Plugin
                {/if}
            {/if}
        </button>
    {:else if Port.unavailable}
        <a class="action" href={extensionLink} target="_blank">Gimloader extension not found</a>
    {/if}
</div>

<style>
    .action {
        color: white;
        font-size: 24px;
        border: 1px solid hsl(224, 10%, 23%);
        border-radius: 8px;
        box-shadow: var(--sl-shadow-md);
        width: 100%;
        text-align: center;
        display: block;
    }

    :global(.sl-flex .meta) {
        display: none;
    }
</style>