<script lang="ts">
	import {
		TimeCard,
		NumberIndex,
		CardSection,
		PieChart,
		DonutChart,
		GaugeChartLocal,
		ListSection,
		LineChartLocal,
		OptionsCard,
		TaskModal
	} from '$lib/components';
	import {
		getDailyTasks,
		getAllTasks,
		getMonthlyTasks,
		getTwoWeeksTasks,
		getRequiredTasks,
		getInProgressTasks,
		getDoneTasks,
		getSuggestedTasks,
		getWaitingTasks
	} from '$lib/functions/get';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	let dailyTasksList: Writable<any[]> = writable([]);
	let twoWeeksTasksList: Writable<any[]> = writable([]);
	let monthlyTasksList: Writable<any[]> = writable([]);
	let allTasksList: Writable<any[]> = writable([]);
	let suggestedTasksList: Writable<any[]> = writable([]);

	// Per Status
	let requiredTasksList: Writable<any[]> = writable([]);
	let inProgressTasksList: Writable<any[]> = writable([]);
	let doneTasksList: Writable<any[]> = writable([]);
	let waitingTasksList: Writable<any[]> = writable([]);

	let modalId: Writable<string> = writable('');
	let modalTaskData: Writable<any> = writable({});

	onMount(async () => {
		await getDailyTasks(dailyTasksList);
		await getTwoWeeksTasks(twoWeeksTasksList);
		await getMonthlyTasks(monthlyTasksList);
		await getAllTasks(allTasksList);
		await getRequiredTasks(requiredTasksList);
		await getInProgressTasks(inProgressTasksList);
		await getDoneTasks(doneTasksList);
		await getSuggestedTasks(suggestedTasksList);
		await getWaitingTasks(waitingTasksList);
	});
</script>

<svelte:head>
	<title>Maintenance | Dashboard</title>
</svelte:head>
<!-- HEADER START -->
<header class="grid gap-3 grid-cols-12">
	<div
		class="md:col-span-2 col-span-12 card bg-base-200 shadow-xl py-2 items-center flex flex-col justify-center"
	>
		<img src="/svgs/ocp.svg" class="w-[90px] object-contain" alt="LOGO" />
	</div>
	<div class="md:col-span-8 col-span-12 grid gap-2 grid-cols-12">
		<div class="col-span-12 md:col-span-3">
			<NumberIndex operationType="total" operationsLength={$allTasksList.length} />
		</div>
		<div class="col-span-12 md:col-span-3">
			<NumberIndex operationType="par jour" operationsLength={$dailyTasksList.length} />
		</div>
		<div class="col-span-12 md:col-span-3">
			<NumberIndex operationType="par 15 jours" operationsLength={$twoWeeksTasksList.length} />
		</div>
		<div class="col-span-12 md:col-span-3">
			<NumberIndex operationType="mensuelles" operationsLength={$monthlyTasksList.length} />
		</div>
	</div>
	<div class="col-span-12 md:col-span-2">
		<TimeCard />
	</div>
</header>
<!-- HEADER END -->
<!-- MAIN 1 START -->
<main class="grid gap-3 grid-cols-12 mt-4">
	<div class="col-span-2 space-y-4">
		<CardSection
			sectionTitle="Tâches Suggérées ({$suggestedTasksList.length})"
			iconPath="/pngs/suggestion.png"
		>
			<ListSection
				{modalTaskData}
				{modalId}
				operationsData={$suggestedTasksList}
				height="h-[293px]"
			/>
		</CardSection>
		<CardSection
			sectionTitle="Tâches Complétées ({$doneTasksList.length})"
			iconPath="/pngs/done.png"
		>
			<ListSection {modalTaskData} {modalId} operationsData={$doneTasksList} height="h-[293px]" />
		</CardSection>
	</div>
	<div class="col-span-8 -mt-7 grid grid-cols-12 gap-3">
		<div class="col-span-8 space-y-4">
			<CardSection sectionTitle="Les Taches par Periodes" iconPath="/pngs/filter-report.png">
				<PieChart
					perDay={$dailyTasksList.length}
					perTwoWeeks={$twoWeeksTasksList.length}
					perMonth={$monthlyTasksList.length}
				/>
			</CardSection>
		</div>
		<div class="col-span-4 space-y-4">
			<OptionsCard
				lenSuggestions={$suggestedTasksList.length}
				lenDone={$doneTasksList.length}
				lenRequired={$requiredTasksList.length}
				lenInProgress={$inProgressTasksList.length}
			/>
			<CardSection sectionTitle="Status d'Accomplissement des Requises" iconPath="/pngs/pie.png">
				{#if $requiredTasksList.length > 0 && $doneTasksList.length > 0}
					<GaugeChartLocal
						value={($doneTasksList.length /
							($requiredTasksList.length + $doneTasksList.length + $inProgressTasksList.length)) *
							100}
					/>
				{:else}
					<GaugeChartLocal value={0} />
				{/if}
			</CardSection>
			<!-- <CardSection sectionTitle="Status d'accomplissement" iconPath="/pngs/pie.png">
				<DonutChart chartTitle="Donut" />
			</CardSection> -->
		</div>
		<!-- under -->
		<div class="col-span-5 space-y-4">
			<CardSection sectionTitle="Les Status Currents" iconPath="/pngs/pie.png">
				<DonutChart
					waitingLength={$waitingTasksList.length}
					requiredLength={$requiredTasksList.length}
					inProgressLength={$inProgressTasksList.length}
					doneLength={$doneTasksList.length}
				/>
			</CardSection>
		</div>
		<div class="col-span-7 space-y-4">
			<CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
				<!-- <AreaChartLocal chartTitle="Area (time series)" /> -->
				<LineChartLocal chartTitle="Area (time series)" />
			</CardSection>

			<!-- <CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
				<ComboChartLocal chartTitle="Combo (Line + Simple bar) - custom configs" />
			</CardSection> -->
		</div>
	</div>
	<div class="col-span-2 space-y-4">
		<CardSection
			sectionTitle="Tâches Requises ({$requiredTasksList.length})"
			iconPath="/pngs/danger.png"
		>
			{#if $requiredTasksList.length > 0}
				<ListSection
					{modalTaskData}
					{modalId}
					operationsData={$requiredTasksList}
					height="h-[303px]"
				/>
			{:else}
				<ListSection {modalTaskData} {modalId} operationsData={[]} height="h-[303px]" />
			{/if}
		</CardSection>
		<CardSection
			sectionTitle="Tâches En Cours ({$inProgressTasksList.length})"
			iconPath="/pngs/progress.png"
		>
			{#if $inProgressTasksList.length > 0}
				<ListSection
					{modalTaskData}
					{modalId}
					operationsData={$inProgressTasksList}
					height="h-[303px]"
				/>
			{:else}
				<ListSection {modalTaskData} {modalId} operationsData={[]} height="h-[303px]" />
			{/if}
		</CardSection>
	</div>
</main>
<!-- MAIN 1 END -->

<!-- TASK MODAL START -->

<TaskModal modalTaskData={$modalTaskData} modalId={$modalId} />

<!-- TASK MODAL END -->

<!-- <CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
			<AreaChartLocal chartTitle="Area (time series)" />
			<LineChartLocal chartTitle="Area (time series)" /> 
		</CardSection> -->

<!-- <CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
			<ComboChartLocal chartTitle="Combo (Line + Simple bar) - custom configs" />
		</CardSection> -->

<!-- <div class="col-span-3 space-y-4 mt-3">
		<CardSection sectionTitle="Status d'accomplissement" iconPath="/pngs/pie.png">
			<DonutChart chartTitle="Donut" />
		</CardSection>
	</div> -->
