<script lang="ts">
    export let data: { navItems: { name: string, url: string }[] };
    import "../app.css";
</script>

<nav class='p-4 bg-white z-10 w-full'>
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

<div class="bg-navy text-white py-8 px-32">
    <slot />
</div>

<style>
    :global(html) {
        box-sizing: border-box;
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;
    }
    :global(body) {
        font-family: Cabin, sans-serif;
        margin: 0;
    }
</style>
