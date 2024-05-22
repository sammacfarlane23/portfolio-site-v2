<script>
	import portfolioPicture from '$lib/assets/portfolio_picture.jpg';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import spotifyImage from '$lib/assets/spotify_app.png';
	import meditationImage from '$lib/assets/meditation_journal.png';
	import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
	import { fade } from 'svelte/transition';

	let isExploreClicked = false;
</script>

<section class="px-20 text-center h-screen text-ivory">
	<div class="flex items-center h-[80vh] justify-around text-justify">
		<div>
			<h1 class="text-2xl text-grey">Samuel MacFarlane</h1>
			<h2 class="text-7xl font-bold mb-4">
				<span class="text-tomato">Front</span>end<br />Engineer
			</h2>
			<p>Introduction to me here...</p>
		</div>
		<img class="rounded-full h-[300px]" src={portfolioPicture} alt="Samuel MacFarlane" />
	</div>
	{#if !isExploreClicked}
		<button
			class="bg-navy text-ivory px-4 py-2 rounded-lg mt-4 animate-bounce"
			on:click={() => {
				isExploreClicked = true;
			}}
			out:fade
		>
			<a href="#projects" class="text-xl flex flex-col justify-center items-center"
				>Explore
				<div class="w-8 h-8 text-tomato">
					<FaChevronDown />
				</div>
			</a>
		</button>
	{/if}
</section>

<section class="w-100 text-ivory h-screen">
	<h2 class="text-4xl mt-6 mb-14 font-bold" id="projects">
		Personal Projects<span class="text-tomato">.</span>
	</h2>
	<!-- <h3 class="mb-8">These are the personal projects I'm most proud of</h3> -->

	<div class="flex justify-between w-full">
		<ProjectCard
			title="Spotify Assistant"
			description="Merge your playlists and view your top tracks and artists in one place. Built with React, and the Spotify API."
			githubLink="https://github.com/sammacfarlane23/react-spotify-app"
			demoLink="https://my-top-spotify.netlify.app/"
			imageSrc={spotifyImage}
		/>
		<ProjectCard
			title="Meditation Timer and Journal"
			description="I am building this app to combine the two simple functionalities of a meditation timer plus a journal to write about the experience."
			githubLink="https://github.com/sammacfarlane23/react-native-meditation-app"
			imageSrc={meditationImage}
		/>

		<ProjectCard
			title="Portfolio website & blog"
			description="This is my portfolio website, built with SvelteKit and Tailwind CSS. It's a work in progress, but I'm proud of it so far!"
			githubLink="https://github.com/sammacfarlane23/react-native-meditation-app"
			imageSrc="https://placehold.co/320"
		/>
	</div>
</section>

<section class="w-100 text-ivory h-screen">
	<h2 class="text-4xl mt-6 mb-14 font-bold">Experience<span class="text-tomato">.</span></h2>
</section>
