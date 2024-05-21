<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import spotifyImage from '$lib/assets/spotify_app.png';
</script>

<section class='flex flex-col items-center w-100 text-ivory'>
  <h2 class="text-6xl mt-6 mb-14 font-bold">Projects</h2>
  <!-- <h3 class="mb-8">These are the personal projects I'm most proud of</h3> -->

  <ProjectCard
    title="Sam's Spotify App"
    description="Merge your playlists and view your top tracks and artists in one place. Built with React, and the Spotify API."
    githubLink="https://github.com/sammacfarlane23/react-spotify-app"
    demoLink="https://my-top-spotify.netlify.app/"
    imageSrc={spotifyImage}
   />
</section>
