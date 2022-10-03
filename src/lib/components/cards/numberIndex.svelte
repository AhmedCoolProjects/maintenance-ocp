<script lang="ts">
	export let operationType: string, operationsLength: number;
</script>

<div class="card px-1 bg-base-200 w-full shadow-xl flex flex-col items-center py-2 space-y-2">
	<h1 class="font-mono text-4xl px-3 text-primary bg-base-100 rounded-md">
		{operationsLength}
	</h1>
	<p class="text-center text-sm">
		Opérations de maintenance
		<span class="font-bold ">
			{operationType}
		</span>
	</p>
</div>
