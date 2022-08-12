<script lang="ts">
	export let height: string;

	import { operationsData } from '$lib/constants';

	let searchTerm = '';

	$: filteredList = operationsData.filter(
		(item) => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

<div class="py-3 space-y-3">
	<input
		type="text"
		placeholder="search .."
		class="input input-bordered input-sm w-full max-w-xs"
		bind:value={searchTerm}
	/>
	<ul class={`menu menu-compact w-full ${height} overflow-y-auto scrollbar-styled`}>
		{#each filteredList as k}
			<li>
				<a href="/">
					{k.title}
				</a>
			</li>
		{/each}
	</ul>
</div>
