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
		{
			label: 'Canvas Reply',
			value: 1,
			title: 'Front-end Developer',
			date: 'Feb 2023 - Present',
			bullets: [
				`Developed cutting-edge features with TypeScript, Next.js, SCSS, and Sitecore CMS for a large e-commerce website, generating thousands of pounds in revenue and improving the experience of thousands of users`,
				`Architected and led the development of an AI prototype project, solidifying an innovation team in the company`,
				`Automated the code review process by creating GitHub actions and adding linting rules, resulting in streamlining the development workflow and ensuring consistent adherence to coding standards`,
				`Mentored junior developers, providing guidance and support that contributed to their professional growth and goal attainment`,
				`Improved unit test coverage by writing comprehensive unit tests using React Testing Library, enhancing code reliability and quality, and reducing the number of bugs in production`
			]
		},
		{
			label: 'Chetwood Financial',
			value: 2,
			title: 'Front-end Engineer',
			date: 'Nov 2020 - Feb 2023',
			bullets: [
				`Wrote robust, maintainable React code to convert wireframes into front-end screens`,
				`Drove accessibility improvements to reach 100% lighthouse scores`,
				`Integrated front-end journeys with REST APIs using Axios and Superagent`,
				`Built mock APIs using express.js and static websites using Gatsby and GraphQL`,
				`Collaborated with UX designers to provide creative input and technical feasibility to meet project objectives`,
				`Designed E2E testing solutions for customer journeys with Playwright and Marotte`
			]
		}
	];
</script>

<section class="text-center px-20 h-screen text-ivory">
	<div class="flex flex-col sm:flex-row-reverse items-center justify-between h-[80vh] text-justify">
		<img class="rounded-full w-[300px] max-w-none" src={portfolioPicture} alt="Samuel MacFarlane" />
		<div class="max-w-[450px]">
			<h1 class="text-2xl text-grey">Samuel MacFarlane</h1>
			<h2 class="text-7xl font-bold mb-4">
				<span class="text-robin-egg-blue">Front</span>end<br />Engineer
			</h2>
			<!-- @TODO: Make this a bit less AI-y -->
			<p>
				I love bringing ideas to life with React and TypeScript, creating seamless and engaging
				digital experiences. Passionate about intuitive design and innovative solutions, I’m
				dedicated to crafting user-friendly web applications.
			</p>
		</div>
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
				<div class="w-8 h-8 text-robin-egg-blue">
					<FaChevronDown />
				</div>
			</a>
		</button>
	{/if}
</section>

<section class="w-100 text-ivory sm:h-screen h-full">
	<h2 class="text-4xl mt-6 mb-14 font-bold" id="projects">
		Personal Projects<span class="text-robin-egg-blue">.</span>
	</h2>

	<div class="flex flex-col items-center sm:flex-row justify-between w-full">
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

<section class="w-100 text-ivory h-screen sm:h-full">
	<h2 class="text-4xl mt-6 mb-14 font-bold" id="experience">
		Experience<span class="text-robin-egg-blue">.</span>
	</h2>

	<Tabs {items} />
</section>
