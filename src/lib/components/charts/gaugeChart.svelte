<script lang="ts">
	import { GaugeChart } from '@carbon/charts-svelte';

	export let value: number;

	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { Alignments, GaugeTypes, Statuses } from '$lib/types';

	const data = [
		{
			group: 'value',
			value: value
		}
	];
</script>

<GaugeChart
	{data}
	theme="g100"
	options={{
		resizable: true,
		height: '250px',
		// alignment: 'center',
		gauge: {
			status: Statuses.WARNING,
			type: GaugeTypes.FULL,
			alignment: Alignments.CENTER
		}
	}}
/>
