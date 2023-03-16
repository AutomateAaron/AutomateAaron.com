<script lang="ts">
  import type { IPortfolio } from "$lib/types/generalTypes";
  import Portfolio1 from "$lib/assets/images/portfolio/portfolio1.png";
  import Portfolio2 from "$lib/assets/images/portfolio/portfolio2.png";
  import Portfolio3 from "$lib/assets/images/portfolio/portfolio3.png";
  import Portfolio4 from "$lib/assets/images/portfolio/portfolio4.png";
  import PortfolioCard from "./PortfolioCard.svelte";

  const portfolio: IPortfolio[] = [
    {
      slug: "",
      category: "Development, UX Design",
      title: "Case Study One",
      image: {
        src: Portfolio1,
        alt: "",
      },
    },
    {
      slug: "",
      category: "Web Design, Branding",
      title: "Case Study One",
      image: {
        src: Portfolio2,
        alt: "",
      },
    },
    {
      slug: "",
      category: "UX Design, UX Research",
      title: "Recipe App Ux Study",
      image: {
        src: Portfolio3,
        alt: "",
      },
    },
    {
      slug: "",
      category: "UX Case Study for Agriculture App",
      title: "UX Design",
      image: {
        src: Portfolio4,
        alt: "",
      },
    },
  ];
</script>

<section id="portfolio" class="services py-12 lg:py-16 xl:pt-24 xl:pb-32">
  <div class="container">
    <div>
      <span
        class="mb-4 inline-block w-full text-center text-xl leading-normal text-gray-800"
        >My Portfolio</span
      >
      <h2 class="h2 text-center">Check Some of My Recent Work</h2>
    </div>

    <div class="mt-12 grid-cols-2 md:grid">
      {#each portfolio as item, i}
        <PortfolioCard {item} index={i} />
      {/each}
    </div>
  </div>
</section>
