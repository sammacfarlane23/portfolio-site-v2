<script lang="ts">
    export let data: { navItems: { name: string, url: string }[] };
    import "../app.css";
</script>

<nav class='fixed top-0 p-4 bg-white z-10 w-full'>
    <ul class='flex justify-around'>
        {#each data.navItems as { url, name }}
			<li class='inline'>
				<a href={url} class='text-navy'>
					{name}
				</a>
			</li>
		{/each}
    </ul>
</nav>

<div class="relative bg-navy text-white top-[51px] p-8 h-[95vh]">
    <slot />
</div>

<style>
    :global(html) {
        box-sizing: border-box;
    }
    :global(body) {
        font-family: Cabin, sans-serif;
        margin: 0;
    }
</style>
