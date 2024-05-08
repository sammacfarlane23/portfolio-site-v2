<script lang="ts">
    export let data: { navItems: { name: string, url: string }[] };
</script>

<nav>
    <ul>
        {#each data.navItems as { url, name }}
			<li>
				<a href={url}>
					{name}
				</a>
			</li>
		{/each}
    </ul>
</nav>

<div class="layout">
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

    nav {
        position: fixed;
        top: 0;
        padding: 1rem;
        width: 100%;
        z-index: 1000;
        background-color: white;
    }

    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        display: inline;
    }

    a {
        color: #1c2e4a;
        text-decoration: none;
    }

    .layout {
        position: relative;
        background-color: #1c2e4a;
        color: white;
        top: 51px;
        padding: 24px;
        min-height: 100vh;
    }
</style>
