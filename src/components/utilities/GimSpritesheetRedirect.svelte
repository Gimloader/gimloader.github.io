<script lang="ts">
	import { onMount } from "svelte";

	let error: string | null = $state(null);
	let params = new URLSearchParams(location.search);
	let id = params.get("id");
	
	// This is not intended to be secure, end users need this key anyways
	// Just to make automated scraping of the key less likely.
	const encodedKey = `nkxgahd32g4f3c7f;3gd8dh5g4929gc7f:d9dc4455522:c7:7c:e`;
	const apiKey = String.fromCharCode(...Array.from(encodedKey).map((char) => char.charCodeAt(0) - 2));

	onMount(async () => {
		if(!id) {
			error = "No ID provided!";
			return;
		}

		try {
			const dest = `https://www.gimkit.com/assets/map/characters/spine/${id}.atlas`;
			const res = await fetch(`https://proxy.cors.sh/${dest}`, {
				headers: {
					"x-cors-api-key": apiKey
				}
			});
			if(res.headers.get("content-type")?.startsWith("text/html")) {
				error = "There is no gim with that id!";
				return;
			}
			const atlas = await res.text();
			const url = atlas.split("\n", 1)[0];
			location.href = `https://www.gimkit.com/assets/map/characters/spine/${url}`;
		} catch {
			error = "An error occured!"
		}
	});
</script>

<div class="w-full flex items-center justify-center">
	<div class="rounded-xl bg-slate-800 text-3xl px-10 py-3 mt-2">
		{#if error}
			<div>{error}</div>
		{:else}
			<div>Loading...</div>
		{/if}
	</div>
</div>