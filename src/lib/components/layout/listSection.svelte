<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { TaskModal } from '../modals';

	export let height: string,
		operationsData: any[],
		modalTaskData: Writable<any>,
		modalId: Writable<string>;

	let searchTermLign = '';
	let searchTermActivityCode = '';
	let searchTermAsset = '';
	let searchTermPlan = '';

	$: filteredList = operationsData?.filter((item) => {
		return (
			item.Lign.toLowerCase().includes(searchTermLign.toLowerCase()) &&
			item.ActivityCode.toLowerCase().includes(searchTermActivityCode.toLowerCase()) &&
			item.Asset.toLowerCase().includes(searchTermAsset.toLowerCase()) &&
			item.Plan.toLowerCase().includes(searchTermPlan.toLowerCase())
		);
	});
</script>

<div class="py-3 space-y-3">
	<div class="grid grid-cols-2 gap-2 w-full">
		<input
			type="text"
			placeholder="Lign"
			class="input input-bordered input-sm w-full"
			bind:value={searchTermLign}
		/>
		<input
			type="text"
			placeholder="Activity Code"
			class="input input-bordered input-sm w-full"
			bind:value={searchTermActivityCode}
		/><input
			type="text"
			placeholder="Asset"
			class="input input-bordered input-sm w-full"
			bind:value={searchTermAsset}
		/><input
			type="text"
			placeholder="Plan"
			class="input input-bordered input-sm w-full"
			bind:value={searchTermPlan}
		/>
	</div>
	<ul class={`menu menu-compact w-full ${height} overflow-y-auto scrollbar-styled`}>
		{#each filteredList as k}
			<li>
				<label
					on:click={() => {
						modalTaskData.set(k);
						modalId.set('modal-id-' + k._id);
					}}
					for={'modal-id-' + k._id}
				>
					{'-> ' + k.Lign}<br />
					{'-> ' + k.ActivityCode}<br />
					{'-> ' + k.Asset}<br />
					{'-> ' + k.Plan}
				</label>
			</li>
		{/each}
	</ul>
</div>
