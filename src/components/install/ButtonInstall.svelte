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
        <div class="install-action">
            Gimloader extension disconnected, please reload the page to install.
        </div>
    {:else if Installer.ready}
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
                {#if Installer.plugins.has(name)}
                    Reinstall Plugin
                {:else}
                    Install Plugin
                {/if}
            {/if}
        </button>
    {:else if Port.unavailable}
        <a class="install-action" href={extensionLink} target="_blank">
            Gimloader extension not found
        </a>
    {:else}
        <div class="install-action">
            Waiting for Gimloader extension...
        </div>
    {/if}
</div>