<script lang="ts">
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
	import GoLinkExternal from 'svelte-icons/go/GoLinkExternal.svelte';
	import { onMount } from 'svelte';

	export let title;
	export let description;
	export let githubLink;
	export let demoLink = '';
	export let imageSrc;

	let card: HTMLAnchorElement;
	let glow: HTMLDivElement;
	let bounds: DOMRect;

	const rotateToMouse = (e: MouseEvent) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2
		};
		const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

		card.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

	// @TODO: Fix glow
		glow.style.backgroundImage = `
		radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
	};

	const removeEffects = () => {
		card.style.transform = '';
		glow.style.backgroundImage = '';
	};

	onMount(() => {
		bounds = card.getBoundingClientRect();
		card.addEventListener('mousemove', rotateToMouse);
		card.addEventListener('mouseout', removeEffects);

		return () => {
			card.removeEventListener('mousemove', rotateToMouse);
			card.removeEventListener('mouseout', removeEffects);
		};
	});
</script>

<section class="text-ivory w-80 flex flex-col justify-around rounded-lg">
	<a
		href={demoLink ? demoLink : githubLink}
		target="_blank"
		style="background-image: url({imageSrc})"
		class="card w-80 h-80 rounded-md relative bg-cover shadow-lg transition duration-300 ease-out transform rotate-0 hover:duration-150"
		bind:this={card}
	>
		<div class="glow rounded-md absolute w-full h-full top-0 left-0" bind:this={glow} />
	</a>
	<div class="max-w-80 py-4 mt-8">
		<h2 class="text-xl font-bold mb-2 text-ivory">{title}</h2>
		<p class="mb-4 text-grey">{description}</p>
		<button class="w-8 h-8 mr-2 hover:text-robin-egg-blue">
			<a href={githubLink} target="_blank">
				<DiGithubBadge />
			</a>
		</button>
		{#if demoLink}
			<button class="w-8 h-8 hover:text-robin-egg-blue">
				<a href={demoLink} target="_blank">
					<GoLinkExternal />
				</a>
			</button>
		{/if}
	</div>
</section>

<style>
	.glow {
		background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
	}
	.card:hover {
		box-shadow: 0 5px 20px 20px #00000044;
	}
</style>
