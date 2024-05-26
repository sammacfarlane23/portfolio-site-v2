<script lang="ts">
	export let items: { title: string; date: string; value: number; label: string }[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="flex">
	<div class="mr-8">
		<div class="w-1 h-{items.length * 16} bg-ivory">
			{#each items as item}
				<div
					class="w-1 h-16"
					class:bg-tomato={activeTabValue === item.value}
				></div>
			{/each}
		</div>
	</div>
	<ul class="mr-32">
		{#each items as item}
			<li class:text-tomato={activeTabValue === item.value} class="text-2xl font-bold py-4">
				<button on:click={handleClick(item.value)}>{item.label}</button>
			</li>
		{/each}
	</ul>
	{#each items as item}
		{#if activeTabValue == item.value}
			<div class="w-1/2 mt-4">
				<!-- Title slot -->
				<h2 class="font-bold text-2xl">{item.title}</h2>

				<h3 class="text-lg text-grey">{item.date}</h3>
			</div>
		{/if}
	{/each}
</div>
