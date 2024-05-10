<script>
  export let title;
  export let description;
  export let link;
  export let imageSrc;
</script>

<section class="bg-eggshell text-navy p-8 w-4/5 flex justify-around rounded-md">
  <img src={imageSrc} alt={title} class="w-[150px] -mb-8" />
  <div class='max-w-80'>
    <h2 class="text-4xl font-bold mb-4">{title}</h2>
    <p class="mb-4">{description}</p>
    <button class="bg-navy text-white p-3 rounded-md w-20 mr-2">
      <a href={link} target="_blank">GitHub</a>
    </button>
    <button class="bg-navy text-white p-3 rounded-md w-20">
      <a href={link} target="_blank">Live</a>
    </button>
  </div>
</section>
