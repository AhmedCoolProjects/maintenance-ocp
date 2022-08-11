<script lang="ts">
	export let sectionTitle: string, iconPath: string;
</script>

<section class="card bg-base-200 shadow-xl w-full p-3">
	<div class="flex flex-row items-center space-x-2">
		<img src={iconPath} alt={sectionTitle} class="w-7" />
		<h1 class="text-sm underline underline-offset-2 font-bold">
			{sectionTitle}
		</h1>
	</div>
	<slot />
</section>
