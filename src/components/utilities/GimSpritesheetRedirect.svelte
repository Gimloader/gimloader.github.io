<script lang="ts">
	import { onMount } from "svelte";

	let error: string | null = $state(null);
	const params = new URLSearchParams(location.search);
	const id = params.get("id");

	// Will need to manually update this now and then, unfortunately
	const currentVersion = 120;

	onMount(() => {
		if(!id) {
			error = "No ID provided!";
			return;
		}

		location.href = `https://gimkit.com/assets/map/characters/spine/${id}-${currentVersion}.png`;
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