<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';

	export const prerender = true;
	export const trailingSlash = 'always';

	let isMenuOpen = false;
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<Header />

<div class="bg-navy text-white py-8 px-8 sm:px-32">
	<slot />
</div>

<footer class="bg-navy text-ivory py-8 px-8 sm:px-32 flex items-center w-full justify-center">
	<p class="text-center">© 2024 Sam Macfarlane</p>
	<button class="w-8 h-8 ml-2 hover:text-robin-egg-blue">
		<a href="https://github.com/sammacfarlane23" target="_blank">
			<DiGithubBadge />
		</a>
	</button>
	<button class="w-8 h-8 ml-2 hover:text-robin-egg-blue">
		<a href="https://www.linkedin.com/in/samuel-macfarlane-dev/" target="_blank">
			<FaLinkedin />
		</a>
	</button>
</footer>

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
