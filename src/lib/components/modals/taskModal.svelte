<script lang="ts">
	import { updateTaskStatus } from '$lib/functions/post';

	export let modalId: string, modalTaskData: any;

	const today = new Date();
	const day = today.getDate();
</script>

<input type="checkbox" id={modalId} class="modal-toggle" />
<label for={modalId} class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<h3 class="text-lg font-bold">
			{modalTaskData.Lign +
				' -> ' +
				modalTaskData.ActivityCode +
				' -> ' +
				modalTaskData.Asset +
				' -> ' +
				modalTaskData.Plan}
			<div class="badge badge-secondary">
				{modalTaskData.Status}
			</div>

			{#if modalTaskData.Frq - day > 0}
				<div class="badge badge-accent">
					{modalTaskData.Frq - day} j restés
				</div>
			{/if}
		</h3>

		<div class="grid grid-cols-3 my-2">
			<div class="w-full p-2 text-center shadow-lg rounded-lg space-y-2">
				<h2 class="text-base">Fréquence</h2>
				<p class="font-semibold">
					{#if modalTaskData.Frq == 1}
						Par jour
					{:else if modalTaskData.Frq == 15}
						Par 15 jours
					{:else if modalTaskData.Frq == 30}
						Par mois
					{/if}
				</p>
			</div>
			<div class="w-full p-2 text-center shadow-lg rounded-lg space-y-2">
				<h2 class="text-base">Nbr d'Employés</h2>
				<p class="font-semibold">
					{modalTaskData.EmployesNbr}
				</p>
			</div>
			<div class="w-full p-2 text-center shadow-lg rounded-lg space-y-2">
				<h2 class="text-base">Durée (heures)</h2>
				<p class="font-semibold">
					{modalTaskData.TimeNeeded}
				</p>
			</div>
		</div>
		<p class="p-4">
			{modalTaskData.Description}
		</p>
		<div class="flex flex-row justify-end items-center space-x-3">
			<button
				disabled={modalTaskData.Status == 'IN_PROGRESS' || modalTaskData.Status == 'DONE'}
				on:click={() => {
					updateTaskStatus(modalTaskData._id, 'IN_PROGRESS');
				}}
				class="btn btn-primary"
			>
				Mis En Cours
			</button>
			<button
				disabled={modalTaskData.Status == 'DONE'}
				on:click={() => {
					updateTaskStatus(modalTaskData._id, 'DONE');
				}}
				class="btn btn-accent"
			>
				Mis Comme Fini
			</button>
		</div>
	</label>
</label>
