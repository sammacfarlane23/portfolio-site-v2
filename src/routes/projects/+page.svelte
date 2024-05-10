<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<section class='flex flex-col items-center w-100'>
  <h2 class="text-6xl my-6 font-bold">Projects</h2>
  <h3 class="mb-8">These are the personal projects I'm most proud of</h3>

  <ProjectCard
    title="Sam's Spotify App"
    description="I built this app when I could not find an easy way to merge mutliple playlists on Spotify into one. This app lets you do just that, as well as showing you your top artists and tracks over your chosen period."
    link=""
    imageSrc="https://user-images.githubusercontent.com/50931982/204152779-6d46bd3b-7299-469a-9d1a-a68d4cd2426f.png"
   />
</section>

<!-- <style>
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  h2 {
    font-size: 4rem;
    margin: 1rem 0;
  }
</style> -->
