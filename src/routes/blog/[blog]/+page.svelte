<!-- This file renders each individual blog blog for reading. Be sure to update the svelte:head below -->
<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
  import { page } from "$app/stores";
  import { enhance, type SubmitFunction } from "$app/forms";

  export let data;

  const { title, excerpt, date, updated, image, imageAlt, categories } =
    data.meta;

  const { BlogContent } = data;

  let message:
    | {
        type: "success" | "error";
        message: string;
      }
    | undefined;

  let error = undefined;
  let submitting = false;
  let readMore = false;

  const handleSubmit: SubmitFunction = function ({
    form,
    data,
    action,
    cancel,
    controller,
  }) {
    // `form` is the `<form>` element
    // `data` is its `FormData` object
    // `action` is the URL to which the form is posted
    // `cancel()` will prevent the submission
    // `submitter` is the `HTMLElement` that caused the form to be submitted

    return async ({ result, update }) => {
      submitting = false;

      // `result` is an `ActionResult` object
      // `update` is a function which triggers the logic that would be triggered if this callback wasn't set    };
      if (result.type === "success") {
        message = {
          type: "success",
          message: "Subscribed!",
        };
      } else {
        message = {
          type: "error",
          message: `error: ${result.status}`,
        };
      }
    };
  };
</script>

<svelte:head>
  <!-- Be sure to add your image files and un-comment the lines below -->
  <title>{title}</title>
  <meta data-key="description" name="description" content={excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta property="og:image" content={image} />
  <meta property="og:image:alt" content={imageAlt} />

  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={excerpt} />
  <meta name="twitter:image" content={image} />

  <!-- <meta property="og:image:width" content={coverWidth} /> -->
  <!-- <meta property="og:image:height" content={coverHeight} /> -->
</svelte:head>

<article class="section relative overflow-hidden">
  <div class="container relative mb-8">
    <h1 class="mb-2 text-center">{title}</h1>
    <Breadcrumbs path={$page.url.pathname} class="mx-auto mb-2 max-w-max" />

    <img
      class="mx-auto max-h-[50vh] rounded-xl object-contain"
      src={image}
      alt={imageAlt}
    />

    <FigureSmall
      class="absolute -left-12 top-0 -z-10 -mt-8 h-20 w-20 animate-move-top lg:-ml-12 lg:-mt-12 lg:h-32 lg:w-32"
    />
    <BreathingBlob
      gradientId="blog"
      class=" absolute -left-24 -top-24 -z-20 h-40 w-40 text-base-300 lg:-left-60 lg:-top-44 lg:h-80 lg:w-80"
    />
  </div>
  <div class="relative {readMore ? '' : 'max-h-screen'} mb-16 overflow-hidden">
    <div class="container">
      <div class="mx-auto max-w-2xl">
        <svelte:component this={BlogContent} />
        {#if categories}
          <aside class="mt-16 flex items-center text-base">
            <span>Categories:</span>
            <ul class="inline-block">
              {#each categories as category}
                <li class="float-left ml-4">
                  <a href="/blog/">
                    <span class="badge badge-secondary">#{category}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </aside>
        {/if}
      </div>
    </div>
    {#if !readMore}
      <div
        class="pointer-events-none absolute bottom-0 z-20 h-1/2 w-full bg-gradient-to-t from-base-200 to-transparent"
      />
    {/if}
  </div>

  <div class="container flex justify-center">
    <div class="rounded-xl bg-base-100 p-8 shadow duration-300 hover:shadow-xl">
      <h4 class="text-center md:text-left">
        {readMore ? "Is it later?" : "Want More?"}
      </h4>
      <form
        use:enhance={handleSubmit}
        enctype="application/x-www-form-urlencoded"
        name="email"
        method="POST"
        action="/contact/submitted"
        netlify-honeypot="bot-field"
        data-netlify="true"
        class="flex flex-col flex-wrap justify-center gap-4 md:flex-row "
      >
        <input type="hidden" name="form-name" value="contact" />

        <div class="input-group w-max">
          <input
            type="email"
            name="email"
            placeholder="brian@vghs.edu"
            class="input-bordered input"
            required
          />
          <button type="submit" class="btn-primary btn">Subscribe</button>
        </div>
        {#if !readMore}
          <button
            on:click={() => {
              readMore = true;
            }}
            class="btn-ghost btn">Maybe Later...</button
          >
        {/if}
      </form>
    </div>
  </div>

  <Figure
    class="absolute -right-14 top-96 hidden h-36 w-36 animate-move-top lg:block"
  />
  <FigureSmall
    class="absolute bottom-96 left-0 {readMore
      ? '-z-10'
      : 'z-20'}  -ml-12 -mt-12 hidden h-32 w-32 animate-move-top lg:block"
  />
</article>
