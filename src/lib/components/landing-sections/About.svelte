<script lang="ts">
  import AboutImage from "$lib/assets/images/about/about.jpg";
  import AboutMaskImage from "$lib/assets/images/about/about-mask-svg.svg";
  import Figure from "../svg/Figure.svelte";
  import BreathingBlob from "../svg/BreathingBlob.svelte";
</script>

<section id="about" class="overflow-hidden py-12 md:py-16 xl:py-24">
  <div class="container">
    <!-- heading -->
    <div>
      <span class="mb-4 inline-block w-full text-center text-xl leading-normal">
        About About
      </span>
      <h2 class="h2 text-center">About About About</h2>
      <p class="mb-16 text-center">About About About About About</p>
    </div>

    <!-- content -->
    <div class="relative items-center justify-center md:flex">
      <!-- image -->
      <div class="relative md:w-1/2 lg:w-2/5">
        <img
          src={AboutImage}
          alt="about-img"
          style="-webkit-mask:url({AboutMaskImage});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
        />

        <!-- <div class="absolute -left-[16%] -top-[7%] transform animate-move-top">
          <Figure classNames="h-36 w-36" />
        </div> -->
      </div>

      <!-- text -->
      <div
        class="relative z-10 mx-4 -mt-48 rounded-xl p-6 text-gray-100 bg-gray-800 dark:text-gray-100 dark:bg-gray-700 md:mx-0 md:-ml-12 md:-mt-0 md:w-3/5 md:p-12"
      >
        <h3 class="h3">Who am I?</h3>
        <p class="mb-6 text-gray-200 dark:text-gray-100">
          As a the leader in <a target="_blank" href="/">Google Cloud memes</a>,
          I know a thing or two about both communicating Google Cloud concepts
          and building applications on the platform. And, as a self proclaimed
          fan boy, I keep up-to-date with Google’s newest offerings so you don’t
          have to. My goal is to streamline your GCP usage so your business can
          focus on what matters: your business.
        </p>

        <div class="-m-2">
          <a href="/contact" class="btn btn-primary m-2 inline-block"
            >Contact Me</a
          >
          <a href="/contact" class="btn btn-light btn-outline m-2 inline-block"
            >Lets chat!</a
          >
        </div>
      </div>

      <div class="absolute -right-[12%] -top-[20%] -z-50 hidden md:block">
        <BreathingBlob
          gradientId="aaa"
          class="h-80 w-80 rotate-45 text-gray-200"
        />
      </div>
    </div>
  </div>
</section>
