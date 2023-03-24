<script lang="ts">
  import AboutImage from "$lib/assets/images/about/about.jpg";
  import AboutMaskImage from "$lib/assets/images/about/about-mask-svg.svg";
  import Figure from "../svg/Figure.svelte";
  import BreathingBlob from "../svg/BreathingBlob.svelte";
</script>

<section id="about" class="overflow-hidden py-12 lg:py-16 xl:py-24">
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
    <div class="relative items-center justify-between lg:flex">
      <!-- image -->
      <div class="relative lg:w-2/5">
        <img
          src={AboutImage}
          alt="about-img"
          style="-webkit-mask:url({AboutMaskImage});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
        />

        <div class="absolute -top-[7%] -left-[16%] transform animate-move-top">
          <Figure classNames="h-36 w-36" />
        </div>
      </div>

      <!-- text -->
      <div
        class="relative mx-4 -mt-48 rounded-xl p-6 text-gray-100 bg-gray-800 dark:text-gray-100 dark:bg-gray-700 lg:mt-8 lg:w-3/5 lg:-translate-x-12 lg:p-12 "
      >
        <h3 class="h3">Mission Statement</h3>
        <p class="mb-6 text-gray-200 dark:text-gray-100">
          As a the leader in <a target="_blank" href="/">Google Cloud memes</a>,
          I know a thing or two about both communicating Google Cloud concepts
          and building applications on the platform. As a self proclaimed fan
          boy also, I keep up-to-date with Google’s newest offerings so you
          don’t have to. My goal is to streamline your GCP usage so you can
          fosus on what matters: growing your business.
        </p>

        <div class="-m-2">
          <a
            href="/contact"
            class="border-lg m-2 inline-block rounded-lg border-2 py-4 px-8 text-center text-base duration-300 ease-in-out text-gray-100 bg-primary-700 border-primary-700 hover:scale-110 hover:shadow-lg"
            >Contact me</a
          >
          <a
            href="/"
            class="border-lg m-2 inline-block rounded-lg border-2 py-4 px-8 text-center text-base duration-300 ease-in-out text-gray-100 border-gray-100 hover:scale-110 hover:shadow-lg dark:text-gray-100 dark:border-gray-100"
            >Let's Chat</a
          >
        </div>
      </div>

      <div class="absolute -top-[20%] -right-[12%] -z-50 hidden lg:block">
        <BreathingBlob
          gradientId="aaa"
          class="h-80 w-80 rotate-45 text-gray-200"
        />
      </div>
    </div>
  </div>
</section>
