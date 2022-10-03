<script lang="ts">
	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { BarChartSimple } from '@carbon/charts-svelte';
	import { ScaleTypes } from '$lib/types';

	export let waitingLength: number,
		doneLength: number,
		inProgressLength: number,
		requiredLength: number;
</script>

<BarChartSimple
	theme="g100"
	data={[
		{ group: 'REQUIRED', value: requiredLength },
		{ group: 'WAITING', value: waitingLength },
		{ group: 'IN PROGRESS', value: inProgressLength },
		{ group: 'DONE', value: doneLength }
	]}
	options={{
		height: '400px',
		axes: {
			left: { mapsTo: 'value' },
			bottom: { mapsTo: 'group', scaleType: ScaleTypes.LABELS }
		}
	}}
/>
