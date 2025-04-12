<script lang="ts">
    import Installer from "src/lib/installer/installer.svelte";

    Installer.init();

    let { name, url }: { name: string, url: string } = $props();
    let installing: Promise<void> | null = $state(null);

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

{#if Installer.ready}
    <div class="wrap pt-[65px]">
        <button class="w-full" onclick={install}>
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
    </div>
{/if}

<style>
    button {
        color: white;
        font-size: 24px;
        border: 1px solid hsl(224, 10%, 23%);
        border-radius: 8px;
        box-shadow: var(--sl-shadow-md);
    }

    :global(.sl-flex .meta) {
        display: none;
    }
</style>