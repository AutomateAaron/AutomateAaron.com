<!-- This file renders each individual blog blog for reading. Be sure to update the svelte:head below -->
<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
  import ProfilePicture from "$lib/assets/images/profile-picture.jpg?run";
  import Img from "@zerodevx/svelte-img";

  import CheckIcon from "~icons/ic/outline-check";
  import ErrorIcon from "~icons/ic/outline-error";
  import CloseIcon from "~icons/ic/baseline-close";
  import type { ActionResult } from "@sveltejs/kit";
  import { subscribed } from "../../../lib/stores.js";
  import { netlifyEnhance } from "$lib/assets/js/netlifyForm.js";
  import MailingList from "$lib/components/MailingList.svelte";

  export let data;

  const { title, excerpt, date, updated, image, imageAlt, categories } =
    data.meta;

  const { BlogContent } = data;

  let interacted = false;
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

<article class="section relative overflow-hidden pb-0">
  <div class="container relative mb-8">
    <h1 class="mb-2 text-center">{title}</h1>
    <Breadcrumbs class="mx-auto mb-2 max-w-max" />

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
  <div
    class="relative {interacted
      ? ''
      : 'max-h-screen'} mb-16 overflow-hidden duration-300"
  >
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
                    <span class="badge-secondary badge">#{category}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </aside>
        {/if}
      </div>
    </div>
    {#if !interacted}
      <div
        class="pointer-events-none absolute bottom-0 z-20 h-1/4 max-h-full w-full bg-gradient-to-t from-base-200 to-transparent"
      />
    {/if}
  </div>
  <Figure
    class="absolute -right-14 top-96 hidden h-36 w-36 animate-move-top lg:block"
  />
  <FigureSmall
    class="absolute bottom-96 left-0 {interacted
      ? '-z-10'
      : 'z-20'}  -ml-12 -mt-12 hidden h-32 w-32 animate-move-top lg:block"
  />
</article>

<section class="section relative !pt-0 ">
  <div
    class="container flex flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:items-start"
  >
    {#if interacted}
      <div class="relative">
        <div
          class="group relative flex max-w-xl items-center justify-center duration-300 ease-in-out hover:scale-[1.03]"
        >
          <div class="relative -mr-24 w-full">
            <Img src={ProfilePicture} alt="about-img" class="mask-left" />
          </div>
          <div
            class="flex-col rounded-xl bg-base-100 p-8 pl-24 shadow duration-300 ease-in-out group-hover:shadow-lg"
          >
            <h4 class="mb-0">Aaron N. Brock</h4>
            <div class="divider my-2" />
            <p class="text-sm">
              I'm a Cloud Engineer with a background in DevOps Engineering,
              Software Development, Cloud Gaming, and self-driving buses. Now, I
              empower innovative startups & small businesses like yours to
              leverage the cloud!
            </p>
            <a
              href="/contact"
              class="btn-primary btn-sm btn [.group:not(:hover)_&]:btn-outline hover:text-primary-content"
            >
              Contact Me
            </a>
          </div>
        </div>
        <FigureSmall
          class="absolute -left-4 -top-12 -z-10 h-20 w-20 animate-move-left"
        />
      </div>
    {/if}
    <MailingList bind:interacted />
  </div>
</section>
