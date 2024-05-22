<script>
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
	import GoLinkExternal from 'svelte-icons/go/GoLinkExternal.svelte';
	export let title;
	export let description;
	export let githubLink;
	export let demoLink = '';
	export let imageSrc;
</script>

<section class="text-ivory w-80 flex flex-col justify-around rounded-lg">
	<img src={imageSrc} alt={title} class="w-80 h-80 -mb-8 rounded-md" />
	<div class="max-w-80 py-4 mt-8">
		<h2 class="text-xl font-bold mb-2 text-ivory">{title}</h2>
		<p class="mb-4 text-grey">{description}</p>
		<button class="w-8 h-8 mr-2 hover:text-tomato">
			<a href={githubLink} target="_blank">
				<DiGithubBadge />
			</a>
		</button>
		{#if demoLink}
			<button class="w-8 h-8 hover:text-tomato">
				<a href={demoLink} target="_blank">
					<GoLinkExternal />
				</a>
			</button>
		{/if}
	</div>
</section>
