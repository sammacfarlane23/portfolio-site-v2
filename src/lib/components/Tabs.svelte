<script lang="ts">
	import MdCheck from 'svelte-icons/md/MdCheck.svelte';

	export let items: {
		title: string;
		date: string;
		value: number;
		label: string;
		bullets: string[];
	}[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="flex flex-col sm:flex-row">
	<div class="flex w-full sm:w-auto">
		<div class="mr-8">
			<div class="w-1 h-{items.length * 16} bg-ivory">
				{#each items as item}
					<div class="w-1 h-16" class:bg-robin-egg-blue={activeTabValue === item.value}></div>
				{/each}
			</div>
		</div>
		<ul class="sm:mr-32">
			{#each items as item}
				<li class:text-robin-egg-blue={activeTabValue === item.value} class="text-2xl font-bold py-4">
					<button on:click={handleClick(item.value)}>{item.label}</button>
				</li>
			{/each}
		</ul>
	</div>
	{#each items as item}
		{#if activeTabValue == item.value}
			<div class="p-4 rounded-md">
				<h2 class="font-bold text-2xl">{item.title}</h2>

				<h3 class="text-lg text-grey mb-6">{item.date}</h3>

				<ul class="list-none w-full">
					{#each item.bullets as bullet}
						<li class="text-sm flex mb-4 gap-x-4">
							<div class="w-6 shrink-0 text-robin-egg-blue"><MdCheck /></div>
							<span class="max-w-[450px]">{bullet}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	{/each}
</div>
