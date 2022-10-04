<script lang="ts">
	import { Footer } from '$lib/components';
	import { getLogs, getTaskById } from '$lib/functions/get';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import moment from 'moment';
	import '../app.css';

	let logsList: Writable<any[]> = writable([]);
	let task: Writable<any> = writable({});

	onMount(async () => {
		await getLogs(logsList);
	});

	async function getTask(taskId: string) {
		await getTaskById(task, taskId);
	}
</script>

<div class="drawer drawer-end">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div class="p-4">
			<slot />
		</div>
		<Footer />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-4" class="drawer-overlay" />
		<ul class="menu p-4  w-1/2 bg-base-100 text-base-content">
			{#each $logsList.slice(0, 10) as log}
				<div
					tabindex="0"
					class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
					on:click={() => getTask(log.taskId)}
				>
					<div class="collapse-title flex flex-row items-center justify-between w-full">
						{log.message}
						<div class="flex flex-row items-center space-x-3">
							<span>
								{moment(log.date).fromNow()}
							</span>
							<div class="badge badge-secondary">
								{log.status}
							</div>
						</div>
					</div>
					<div class="collapse-content">
						{#if $task?._id !== undefined}
							<h3 class="text-lg font-semibold">
								{$task.Lign +
									' -> ' +
									$task.ActivityCode +
									' -> ' +
									$task.Asset +
									' -> ' +
									$task.Plan}
								<div class="badge badge-secondary">
									{$task.Status}
								</div>
							</h3>

							<div class="grid grid-cols-3 my-2">
								<div class="w-full p-2 text-center shadow-lg rounded-lg space-y-2">
									<h2 class="text-base">Fréquence</h2>
									<p class="font-semibold">
										{#if $task.Frq == 1}
											Par jour
										{:else if $task.Frq == 15}
											Par 15 jours
										{:else if $task.Frq == 30}
											Par mois
										{/if}
									</p>
								</div>
								<div class="w-full p-2 text-center shadow-lg rounded-lg space-y-2">
									<h2 class="text-base">Nbr d'Employés</h2>
									<p class="font-semibold">
										{$task.EmployesNbr}
									</p>
								</div>
								<div class="w-full p-2 text-center shadow-lg rounded-lg space-y-2">
									<h2 class="text-base">Durée (heures)</h2>
									<p class="font-semibold">
										{$task.TimeNeeded}
									</p>
								</div>
							</div>
							<p class="p-4">
								{$task.Description}
							</p>
						{/if}
					</div>
				</div>
			{/each}
		</ul>
	</div>
</div>
