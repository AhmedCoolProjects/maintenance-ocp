<script lang="ts">
	import ComboChart from '@carbon/charts-svelte/src/ComboChart.svelte';

	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { ChartTheme, ScaleTypes } from '$lib/types';

	export let chartTitle: string;
</script>

<ComboChart
	data={[
		{
			group: 'School A',
			date: 'Monday',
			value: 10000
		},
		{
			group: 'School A',
			date: 'Tuesday',
			value: 65000
		},
		{
			group: 'School A',
			date: 'Wednesday',
			value: 30000
		},
		{
			group: 'School A',
			date: 'Thursday',
			value: 49213
		},
		{
			group: 'School A',
			date: 'Friday',
			value: 49213
		},
		{
			group: 'Temperature',
			date: 'Monday',
			temp: 70
		},
		{
			group: 'Temperature',
			date: 'Tuesday',
			temp: 75
		},
		{
			group: 'Temperature',
			date: 'Wednesday',
			temp: 31
		},
		{
			group: 'Temperature',
			date: 'Thursday',
			temp: 31
		},
		{
			group: 'Temperature',
			date: 'Friday',
			temp: 43
		}
	]}
	options={{
		title: chartTitle,
		theme: ChartTheme.G100,
		axes: {
			left: {
				mapsTo: 'value',
				scaleType: ScaleTypes.LINEAR,
				title: 'USA Summer School Attendance'
			},
			right: {
				mapsTo: 'temp',
				scaleType: ScaleTypes.LINEAR,
				title: 'Temperature (°F)'
				// correspondingDatasets: ['Temperature']
			},
			bottom: {
				title: 'Day of the Week',
				mapsTo: 'date',
				scaleType: ScaleTypes.LABELS
			}
		},
		comboChartTypes: [
			{
				type: 'simple-bar',
				correspondingDatasets: ['School A']
			},
			{
				type: 'line',
				options: {
					points: {
						radius: 5
					}
				},
				correspondingDatasets: ['Temperature']
			}
		],
		height: '400px'
	}}
/>
