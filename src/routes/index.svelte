<script>
	import {
		TimeCard,
		NumberIndex,
		CardSection,
		PieChart,
		DonutChart,
		AreaChartLocal,
		ComboChartLocal,
		GaugeChartLocal,
		ListSection,
		LineChartLocal
	} from '$lib/components';
</script>

<svelte:head>
	<title>Maintenance | Dashboard</title>
</svelte:head>

<header class="grid gap-3 grid-cols-12">
	<div
		class="md:col-span-2 col-span-12 card bg-base-200 shadow-xl py-2 items-center flex flex-col justify-center"
	>
		<img src="/svgs/ocp.svg" class="w-[90px] object-contain" alt="LOGO" />
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
<main class="grid gap-3 grid-cols-12 mt-4">
	<div class="col-span-2">
		<CardSection sectionTitle="Opérations de maintenance" iconPath="/pngs/maintenance.png">
			<ListSection height="h-[293px]" />
		</CardSection>
	</div>
	<div class="col-span-8 -mt-7 grid grid-cols-12 gap-3">
		<div class="col-span-8 space-y-4">
			<CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
				<PieChart chartTitle="this is the title" />
			</CardSection>
			<!-- <CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
				<AreaChartLocal chartTitle="Area (time series)" />
			</CardSection> -->
			<!-- <CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
				<ComboChartLocal chartTitle="Combo (Line + Simple bar) - custom configs" />
			</CardSection> -->
		</div>
		<div class="col-span-4 space-y-4">
			<div class="h-[134px] w-full bg-base-200 rounded-box shadow-xl" />
			<CardSection sectionTitle="Status d'accomplissement" iconPath="/pngs/pie.png">
				<GaugeChartLocal chartTitle="Gauge circular -- warning status" />
			</CardSection>
			<!-- <CardSection sectionTitle="Status d'accomplissement" iconPath="/pngs/pie.png">
				<DonutChart chartTitle="Donut" />
			</CardSection> -->
		</div>
	</div>
	<div class="col-span-2">
		<CardSection sectionTitle="En cas d'anomalies" iconPath="/pngs/operation-maintenance.png">
			<ListSection height="h-[303px]" />
		</CardSection>
	</div>
</main>
<main class="grid gap-3 grid-cols-11  my-4">
	<!-- under -->
	<div class="col-span-3 space-y-4">
		<CardSection sectionTitle="Status d'accomplissement" iconPath="/pngs/pie.png">
			<DonutChart chartTitle="Donut" />
		</CardSection>
	</div>
	<div class="col-span-4 space-y-4">
		<CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
			<!-- <AreaChartLocal chartTitle="Area (time series)" /> -->
			<LineChartLocal chartTitle="Area (time series)" />
		</CardSection>

		<!-- <CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
			<ComboChartLocal chartTitle="Combo (Line + Simple bar) - custom configs" />
		</CardSection> -->
	</div>
	<div class="col-span-4 space-y-4">
		<CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
			<AreaChartLocal chartTitle="Area (time series)" />
			<!-- <LineChartLocal chartTitle="Area (time series)" /> -->
		</CardSection>

		<!-- <CardSection sectionTitle="Actions par machines" iconPath="/pngs/filter-report.png">
			<ComboChartLocal chartTitle="Combo (Line + Simple bar) - custom configs" />
		</CardSection> -->
	</div>
	<!-- <div class="col-span-3 space-y-4 mt-3">
		<CardSection sectionTitle="Status d'accomplissement" iconPath="/pngs/pie.png">
			<DonutChart chartTitle="Donut" />
		</CardSection>
	</div> -->
</main>
