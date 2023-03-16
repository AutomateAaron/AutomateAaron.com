<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
  import Figure from "$lib/components/svg/Figure.svelte";

  export let data;

  const {
    title,
    excerpt,
    date,
    updated,
    coverImage,
    coverWidth,
    coverHeight,
    categories,
  } = data.meta;
  const { PostContent } = data;
</script>

<svelte:head>
  <!-- Be sure to add your image files and un-comment the lines below -->
  <title>{title}</title>
  <meta data-key="description" name="description" content={excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta name="twitter:description" content={excerpt} />
  <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
  <meta property="og:image:width" content={coverWidth} />
  <meta property="og:image:height" content={coverHeight} />
  <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<!-- <article class="post">
  <!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -- >
  <img
    class="cover-image"
    src={coverImage}
    alt=""
    style="aspect-ratio: {coverWidth} / {coverHeight};"
    width={coverWidth}
    height={coverHeight}
  />

  <h1>{title}</h1>

  <div class="meta">
    <b>Published:</b>
    {date}
    <br />
    <b>Updated:</b>
    {updated}
  </div>

  <svelte:component this={PostContent} />

  {#if categories}
    <aside class="post-footer">
      <h2>Posted in:</h2>
      <ul>
        {#each categories as category}
          <li>
            <a href="/blog/category/{category}/">
              {category}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</article> -->

<article class="my-40">
  <div class="absolute animate-move-left">
    <Figure class="h-36 w-36" />
  </div>
  <div class="container px-40">
    <svelte:component this={PostContent} />
  </div>
</article>

<!-- <section class="section singleBlog">
  <div class="absolute animate-move-left">
    <Figure class="h-36 w-36" />
  </div>

  <div class="animate-shape">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 600 600"
    >
      <defs>
        <linearGradient
          id="d"
          x1="0.929"
          y1="0.111"
          x2="0.263"
          y2="0.935"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#f1f6f9" />
          <stop offset="1" stop-color="#f1f6f9" stop-opacity="0" />
        </linearGradient>
      </defs>
      <g data-name="blob-shape (3)">
        <path
          class="blob"
          fill="url(#d)"
          d="M455.4 151.1c43.1 36.7 73.4 92.8 60.8 136.3-12.7 43.5-68.1 74.4-111.3 119.4-43.1 45-74 104.1-109.8 109-35.9 5-76.7-44.2-111.8-89.2-35.2-45-64.7-85.8-70.8-132.6-6-46.8 11.6-99.6 46.7-136.3 35.2-36.6 88-57.2 142.4-58.8 54.5-1.7 110.6 15.6 153.8 52.2z"
        />
      </g>
    </svg>
  </div>
  <div
    class="absolute top-0 left-1/2 -z-10 -mt-14 -translate-x-1/2 transform animate-move-left"
  >
    <Figure class="h-36 w-36" />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="singleBlog__feature">
          <img src="test" alt="feature-image" />
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <svelte:component this={PostContent} />
    </div>
  </div>
</section> -->
