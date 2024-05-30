<script lang="ts">
	import '../app.css';

	export const prerender = true;
	export const trailingSlash = 'always';
</script>

<nav class="sm:px-48 py-10 z-10 bg-navy w-full flex justify-between">
	<a href="/" class="text-ivory"> *LOGO HERE* </a>
	<ul class="flex justify-around w-1/2 text-ivory">
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
</nav>

<div class="bg-navy text-white py-8 px-8 sm:px-32">
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
