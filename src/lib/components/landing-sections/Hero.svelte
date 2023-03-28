<script lang="ts">
  import HeroImage from "$lib/assets/images/hero/hero.jpg";
  import HeroMaskSvg from "$lib/assets/images/hero/hero-mask-svg.svg";
  import PopupThumb from "$lib/assets/images/hero/popup-thumb.jpg";
  import Figure from "../svg/Figure.svelte";
  import HeroBg from "$lib/components/svg/landing-sections/hero/HeroBg.svelte";

  import Close from "../svg/Close.svelte";
  import BreathingBlob from "../svg/BreathingBlob.svelte";

  let showModal = false;
</script>

<section id="home" class="relative pb-8 pt-36 lg:py-40 xl:py-44">
  <div
    class="container relative items-center justify-between space-y-16 lg:flex lg:space-x-20 lg:space-y-0"
  >
    <!-- text -->
    <div class="relative w-full text-center lg:pr-20 lg:text-left">
      <div class="relative">
        <span
          class="pre-line-top-title mb-4 text-xl leading-normal text-gray-800"
          >Hello there,</span
        >

        <h1 class="h1 mt-4">
          Let’s make <br /> <span class="text-primary-700">Google Cloud</span>
          <br /> simple
        </h1>

        <p
          class="m-auto mb-8 max-w-sm text-lg leading-normal md:max-w-lg md:text-2xl"
        >
          Effortlessly navigate your way to success on Google Cloud with expert
          guidance.
        </p>

        <a
          href="/contact"
          class="btn primary-btn hover:shadow-[0 8px 20px rgb(56 87 241 / 30%)] inline-block hover:scale-105"
          >Contact me</a
        >
      </div>

      <div
        class="absolute -top-32 left-1/2 -z-10 -ml-56 text-center lg:-left-[35%] lg:-top-[45%] lg:ml-auto"
      >
        <BreathingBlob
          gradientId="hero"
          class="h-56 w-56 text-gray-100 lg:h-96 lg:w-96"
        />
      </div>
    </div>

    <!-- image -->
    <div class="relative w-full">
      <div class="relative">
        <img
          src={HeroImage}
          alt=""
          class=""
          style="-webkit-mask:url({HeroMaskSvg});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
        />

        <!-- video -->
        <button
          class="absolute left-1/2 top-full z-10 -mt-28 h-40 w-64 -translate-x-1/2 transform overflow-hidden rounded-xl border-2 border-gray-100 lg:left-0 lg:-mt-60"
          on:click={() => (showModal = true)}
        >
          <img
            src={PopupThumb}
            alt=""
            class="h-full w-full object-cover object-center"
          />

          <div
            class="group absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-opacity-50 bg-gray-800 dark:bg-opacity-50 dark:bg-gray-800"
          >
            <div
              class="flex h-16 w-16 transform items-center justify-center rounded-full transition-all duration-300 ease-in-out bg-gray-100 text-primary-700 group-hover:scale-110 group-hover:text-gray-100 group-hover:bg-primary-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 24"
                class="ml-1 h-6 w-6"
                fill="currentColor"
              >
                <path
                  d="M17.961 10.264a2 2 0 010 3.473L2.992 22.29A2 2 0 010 20.554V3.446A2 2 0 012.992 1.71z"
                  data-name="Polygon 4"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>

      <div
        class="absolute left-1/2 top-0 -z-10 -mt-14 -translate-x-1/2 transform"
      >
        <Figure class="h-36 w-36 animate-move-left" />
      </div>
    </div>
  </div>

  <!-- gray bg -->
  <HeroBg class="absolute left-0 top-0 -z-50 w-[65%] text-gray-200" />

  <!-- figure -->
  <div
    class="absolute -left-32 bottom-5 -z-10 hidden transform animate-move-top lg:block"
  >
    <Figure class="h-52 w-52" />
  </div>
</section>

{#if showModal}
  <div
    class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-opacity-70 p-2 bg-black"
  >
    <div class="relative aspect-video w-full max-w-4xl">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="h-full w-full object-contain object-center"
      />

      <button
        class="absolute -top-12 right-0 text-white"
        on:click={() => (showModal = false)}
      >
        <Close classNames="h-8 w-8" />
      </button>
    </div>
  </div>
{/if}
