<script lang="ts">
	export let height: string;
</script>

<div class="py-3 space-y-3">
	<input
		type="text"
		placeholder="search .."
		class="input input-bordered input-sm w-full max-w-xs"
	/>
	<ul class={`menu menu-compact w-full ${height} overflow-y-auto scrollbar-styled`}>
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 3, 5, 4, 8, 7, 9, 851, 51, 5, 1, 2, 5, 5, 2, 8] as k}
			<li><a>Item 1 is bejfks fjs fs fishfsh djfkdj fdkjfd f djkfd fjsifs sljfis fjkdjk</a></li>
		{/each}
	</ul>
</div>
