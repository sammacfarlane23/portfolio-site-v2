<script lang="ts">
	import { slide } from 'svelte/transition';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="sm:px-48 px-8 py-10 z-10 bg-navy w-full">
	<div class="flex justify-between items-center duration-300">
		<a href="/" class="text-ivory font-bold"> *LOGO HERE* </a>
		<!-- Hamburger button for mobile -->
		<button class="sm:hidden text-ivory p-2 h-8" on:click={toggleMenu} aria-label="Toggle menu">
			{#if isMenuOpen}
				<div class="w-6 h-0.5 bg-ivory transform rotate-45 absolute"></div>
				<div class="w-6 h-0.5 bg-ivory transform -rotate-45"></div>
			{:else}
				<div class="w-6 h-0.5 bg-ivory mb-1"></div>
				<div class="w-6 h-0.5 bg-ivory mb-1"></div>
				<div class="w-6 h-0.5 bg-ivory"></div>
			{/if}
		</button>
		<!-- Desktop menu -->
		<ul class="hidden sm:flex flex-row justify-around w-1/2 text-ivory text-lg">
			<li class="hover:text-grey">
				<a href="/#projects"> Projects </a>
			</li>
			<li class="hover:text-grey">
				<a href="/#experience"> Experience </a>
			</li>
			<li class="hover:text-grey">
				<a href="/blog"> Blog </a>
			</li>
			<li class="hover:text-grey">
				<a href="/contact"> Contact </a>
			</li>
		</ul>
	</div>
	<!-- Mobile menu -->
	{#if isMenuOpen}
		<ul
			class="sm:hidden flex flex-col text-ivory text-lg mt-4 space-y-4 text-center"
			transition:slide={{ duration: 300 }}
		>
			<li class="hover:text-grey">
				<a href="/#projects" on:click={toggleMenu}> Projects </a>
			</li>
			<li class="hover:text-grey">
				<a href="/#experience" on:click={toggleMenu}> Experience </a>
			</li>
			<li class="hover:text-grey">
				<a href="/blog" on:click={toggleMenu}> Blog </a>
			</li>
			<li class="hover:text-grey">
				<a href="/contact" on:click={toggleMenu}> Contact </a>
			</li>
		</ul>
	{/if}
</nav>
