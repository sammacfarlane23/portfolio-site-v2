<script>
	import portfolioPicture from '$lib/assets/portfolio_picture.jpg';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import spotifyImage from '$lib/assets/spotify_app.png';
	import meditationImage from '$lib/assets/meditation_journal.png';
	import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
	import { fade } from 'svelte/transition';
	import Tabs from '$lib/components/Tabs.svelte';

	let isExploreClicked = false;

	let items = [
		{ label: 'Canvas Reply', value: 1, title: 'Front-end Developer', date: 'Feb 2023 - Present' },
		{ label: 'Chetwood Financial', value: 2, title: 'Front-end Engineer', date: 'Nov 2020 - Feb 2023' },
	];
</script>

<section class="text-center px-20 h-screen text-ivory">
	<div class="flex items-center justify-between h-[80vh] text-justify">
		<div class="max-w-[450px]">
			<h1 class="text-2xl text-grey">Samuel MacFarlane</h1>
			<h2 class="text-7xl font-bold mb-4">
				<span class="text-tomato">Front</span>end<br />Engineer
			</h2>
			<!-- @TODO: Make this a bit less AI-y -->
			<p>
				I love bringing ideas to life with React and TypeScript, creating seamless and engaging
				digital experiences. Passionate about intuitive design and innovative solutions, I’m
				dedicated to crafting user-friendly web applications.
			</p>
		</div>
		<img class="rounded-full h-[300px]" src={portfolioPicture} alt="Samuel MacFarlane" />
	</div>
	{#if !isExploreClicked}
		<button
			class="bg-navy text-ivory px-4 py-2 -mt-48 rounded-lg animate-bounce"
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
	<h2 class="text-4xl mt-6 mb-14 font-bold" id="experience">
		Experience<span class="text-tomato">.</span>
	</h2>

  <Tabs {items} />
</section>
