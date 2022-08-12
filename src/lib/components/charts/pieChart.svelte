<script lang="ts">
	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import BarChartSimple from '@carbon/charts-svelte/src/BarChartSimple.svelte';
	import { ScaleTypes } from '$lib/types';

	export let chartTitle: string;
</script>

<BarChartSimple
	theme="g100"
	data={[
		{ group: 'Qty', value: 65000 },
		{ group: 'More', value: 29123 },
		{ group: 'Sold', value: 35213 },
		{ group: 'Restocking', value: 51213 },
		{ group: 'Misc', value: 16932 }
	]}
	options={{
		title: chartTitle,
		height: '400px',
		axes: {
			left: { mapsTo: 'value' },
			bottom: { mapsTo: 'group', scaleType: ScaleTypes.LABELS }
		}
	}}
/>
