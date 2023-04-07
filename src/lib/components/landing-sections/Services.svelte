<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";

  import type { IService } from "$lib/types/generalTypes";
  import Teaching from "~icons/ic/outline-menu-book";
  import Tuning from "~icons/ic/outline-pie-chart";
  import Templates from "~icons/ic/outline-file-copy";

  import Web from "../svg/landing-sections/service/Web.svelte";
  import ServiceBg from "../svg/landing-sections/service/ServiceBg.svelte";
  import ServiceCard from "./ServiceCard.svelte";
  import FigureSmall from "../svg/FigureSmall.svelte";
  import BreathingBlob from "../svg/BreathingBlob.svelte";

  const services: IService[] = [
    {
      title: "Teaching",
      description:
        "Learn to use Google Cloud like a pro. From the basics to advanced strategies, I’ll give you the knowledge and skills you need to fully leverage the power of Google Cloud.",
      icon: Teaching,
    },
    {
      title: "Tuning",
      description:
        "Take control of your Google Cloud costs. From identifying and eliminating unnecessary expenses to implementing cost-saving strategies, I’ll help you get the most out of your investment.",
      icon: Tuning,
    },
    {
      title: "Templates",
      description:
        "Streamline your Google Cloud operations with templates. From deployments to scaling, templates provide you with a proven foundation to build upon, and allow you to focus on growing your business.",
      icon: Templates,
    },
  ];

  const options = {
    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: 30,
    autoplay: false,
    interval: 3000,
    padding: "2rem",
    arrows: false,
    pagination: true,
    height: "550px",
    breakpoints: {
      640: {
        perPage: 1,
        gap: 10,
      },
      768: {
        perPage: 2,
        gap: 30,
      },
    },
    classes: {
      // Add classes for arrows.
      arrows: "splide__arrows service-slide-arrows",
      arrow: "splide__arrow service-slide-arrow",
      prev: "splide__arrow--prev service-slide-prev",
      next: "splide__arrow--next service-slide-next",

      // Add classes for pagination.
      pagination: "splide__pagination service-slide-pagination", // container
      page: "splide__pagination__page service-slide-page", // each button
    },
  };
</script>

<section id="services" class="relative overflow-hidden py-12 lg:pb-72 lg:pt-24">
  <div>
    <div class="container">
      <div class="lg:w-1/2">
        <span class="pre-line-top-title leading mb-4 text-xl leading-normal"
          >Area of Work</span
        >
        <h2 class="h2 mt-4">Google Cloud</h2>
        <p class="mb-4 text-xl leading-normal">
          Using technology to empower development teams to deliver software
          better faster stronger.
        </p>
      </div>
    </div>

    <div class="mb-12 mt-12 lg:hidden">
      <Splide hasTrack={false} {options}>
        <SplideTrack>
          {#each services as service}
            <SplideSlide>
              <ServiceCard {service} />
            </SplideSlide>
          {/each}
        </SplideTrack>
      </Splide>
    </div>

    <div
      class="container mt-12 hidden items-start justify-between space-x-10 lg:flex"
    >
      {#each services as service}
        <ServiceCard {service} />
      {/each}
    </div>
  </div>

  <div class="absolute bottom-[4%] left-[6%] -z-10 hidden transform  lg:block">
    <FigureSmall class="h-24 w-24 animate-move-top" />
  </div>

  <div class="absolute -bottom-[4%] left-[-2%] -z-20 hidden transform lg:block">
    <BreathingBlob gradientId="ccc" class="h-96 w-96 rotate-45 text-base-300" />
  </div>

  <ServiceBg class="absolute right-0 top-0 z-[-2] w-3/5 text-base-300" />
</section>

<style lang="postcss">
  :global(.service-slide-pagination) {
    @apply -bottom-[2rem];
  }

  @media (min-width: 640px) {
    :global(.service-slide-pagination) {
      bottom: -2rem;
    }
  }

  :global(.service-slide-page) {
    background-color: #c2c8cc !important;
  }

  :global(.service-slide-pagination .is-active) {
    background-color: #400080 !important;
    transform: none;
  }
</style>
