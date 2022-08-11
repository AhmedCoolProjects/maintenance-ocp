<script>
	import { TimeCard, NumberIndex, CardSection } from '$lib/components';
</script>

<svelte:head>
	<title>Maintenance | Dashboard</title>
</svelte:head>

<header class="grid gap-3 grid-cols-12">
	<div
		class="md:col-span-2 col-span-12 card bg-base-200 shadow-xl py-2 items-center flex flex-col justify-center"
	>
		<img src="/svgs/ocp.svg" class="w-1/2 object-contain" alt="LOGO" />
	</div>
	<div class="md:col-span-8 col-span-12 grid gap-2 grid-cols-12">
		<div class="col-span-12 md:col-span-3">
			<NumberIndex operationType="total" />
		</div>
		<div class="col-span-12 md:col-span-3">
			<NumberIndex operationType="à venir" />
		</div>
		<div class="col-span-12 md:col-span-3">
			<NumberIndex operationType="mensuelle" />
		</div>
		<div class="col-span-12 md:col-span-3">
			<NumberIndex operationType="du jour" />
		</div>
	</div>
	<div class="col-span-12 md:col-span-2">
		<TimeCard />
	</div>
</header>
<main class="grid gap-3 grid-cols-12 my-4">
	<div class="col-span-2">
		<CardSection sectionTitle="Opérations de maintenance" iconPath="/pngs/maintenance.png" />
	</div>
	<div class="col-span-8 -mt-9 grid grid-cols-12 gap-3">
		<div class="col-span-8">
			<CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png" />
		</div>
		<div class="col-span-4">
			<CardSection sectionTitle="Status d'accomplissement" iconPath="/pngs/pie.png" />
		</div>
	</div>
	<div class="col-span-2">
		<CardSection sectionTitle="En cas d'anomalies" iconPath="/pngs/operation-maintenance.png" />
	</div>
</main>
