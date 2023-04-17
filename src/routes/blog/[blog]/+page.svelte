<!-- This file renders each individual blog blog for reading. Be sure to update the svelte:head below -->
<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
  import { page } from "$app/stores";
  import { enhance, type SubmitFunction } from "$app/forms";
  import ContactImage from "$lib/assets/images/contact/contact.jpg";
  import AboutMaskImage from "$lib/assets/images/about/about-mask-svg.svg";

  import CheckIcon from "~icons/ic/outline-check";
  import ErrorIcon from "~icons/ic/outline-error";
  import type { ActionResult } from "@sveltejs/kit";
  import { subscribed } from "$lib/stores.js";

  export let data;

  const { title, excerpt, date, updated, image, imageAlt, categories } =
    data.meta;

  const { BlogContent } = data;

  let formResult: ActionResult | undefined;
  let readMore = false;

  subscribed.subscribe((value) => {
    if (value) {
      formResult = {
        type: "success",
        status: 200,
      };
      readMore = true;
    }
  });

  const handleSubmit: SubmitFunction = async function ({
    form,
    data,
    action,
    cancel,
    controller,
  }) {
    readMore = true;
    cancel();
    try {
      const response = await fetch(action, {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-sveltekit-action": "true",
        },
        cache: "no-store",
        body: data,
        signal: controller.signal,
      });

      if (response.ok) {
        form.reset();
        subscribed.set(true);
        formResult = {
          type: "success",
          status: response.status,
        };
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          let data = await response.json();
          formResult = {
            type: data.type || "error",
            status: response.status,
            error: data.error || new Error(data),
          };
        } else {
          let text = await response.text();
          formResult = {
            type: "error",
            status: response.status,
            error: new Error(text),
          };
        }
      }
    } catch (error) {
      console.log("catching error");
      formResult = { type: "error", error };
    }
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

<article class="section relative overflow-hidden pb-0">
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
  <div
    class="relative {readMore
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
  <Figure
    class="absolute -right-14 top-96 hidden h-36 w-36 animate-move-top lg:block"
  />
  <FigureSmall
    class="absolute bottom-96 left-0 {readMore
      ? '-z-10'
      : 'z-20'}  -ml-12 -mt-12 hidden h-32 w-32 animate-move-top lg:block"
  />
</article>

<section class="section relative !pt-0 ">
  <div
    class="container flex flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:items-start"
  >
    {#if readMore}
      <div class="relative">
        <div
          class="group relative flex max-w-xl items-center justify-center duration-300 ease-in-out hover:scale-105"
        >
          <div class="relative -mr-24 w-full">
            <img
              src={ContactImage}
              alt="about-img"
              style="-webkit-mask:url({AboutMaskImage});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
            />
          </div>
          <div
            class="flex-col rounded-xl bg-base-100 p-8 pl-24 shadow duration-300 ease-in-out group-hover:shadow-xl"
          >
            <h4 class="mb-0">Aaron N. Brock</h4>
            <div class="divider my-2" />
            <p class="text-sm">
              I'm a Cloud Engineer with a background in DevOps Engineering,
              Cloud Gaming, and self-driving buses. Now, I empower
              transformations at innovative startups.
            </p>
            <a
              href="/contact"
              class="btn-primary btn-sm btn [.group:not(:hover)_&]:btn-outline hover:!scale-125 hover:text-primary-content group-hover:scale-110"
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
    <div
      class="group rounded-xl bg-base-100 p-8 shadow duration-300 ease-in-out focus-within:scale-105 focus-within:shadow-xl hover:scale-105 hover:shadow-xl"
    >
      <h5 class="text-center md:text-left">
        {#if formResult}
          Mailing List
        {:else}
          {readMore ? "Is it Later?" : "Want more?"}
        {/if}
      </h5>

      {#if !formResult}
        <form
          use:enhance={handleSubmit}
          enctype="application/x-www-form-urlencoded"
          name="email"
          method="POST"
          action="/contact/submitted"
          netlify-honeypot="bot-field"
          data-netlify="true"
          class="flex flex-wrap gap-4 duration-300 ease-in-out group-focus-within:scale-105 group-hover:scale-105"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div
            class="input-group w-max duration-300 ease-in-out group-focus-within:shadow-lg group-hover:shadow-lg"
          >
            <input
              type="email"
              name="email"
              placeholder="brian@vghs.edu"
              class="input-bordered input-primary input input-sm max-w-sm"
              required
            />
            <button type="submit" class="btn-primary btn-sm btn">
              Subscribe
            </button>
          </div>
          {#if !readMore}
            <button
              on:click={() => {
                readMore = true;
              }}
              class="btn-ghost btn-sm btn duration-300 ease-in-out group-focus-within:shadow group-hover:shadow"
              >Maybe Later...</button
            >
          {/if}
        </form>
      {:else}
        <div
          class="duration-300 ease-in-out group-focus-within:scale-105 group-hover:scale-105"
        >
          {#if formResult.type === "success"}
            <div class="alert alert-success shadow-lg">
              <div>
                <CheckIcon />
                <span>Subscribed! Thank you.</span>
              </div>
            </div>
          {:else if formResult.type === "error"}
            <div class="alert alert-error shadow-lg">
              <div>
                <ErrorIcon />
                <span
                  >Error {formResult.status}: {formResult.error.message}</span
                >
              </div>
            </div>
          {:else}
            <div class="alert alert-warning shadow-lg">
              <div>
                <ErrorIcon />
                <span
                  >Form responded with "{formResult.type}", not sure why...</span
                >
              </div>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</section>
