<script lang="ts">
	import HeroImage from '$lib/assets/images/hero/hero.jpg';
	import HeroMaskSvg from '$lib/assets/images/hero/hero-mask-svg.svg';
	import PopupThumb from '$lib/assets/images/hero/popup-thumb.jpg';
	import Figure from '../svg/Figure.svelte';
	import HeroBg from '$lib/components/svg/landing-sections/hero/HeroBg.svelte';

	import Close from '../svg/Close.svelte';
	import BreathingBlob from '../svg/BreathingBlob.svelte';

	let showModal = false;
</script>

<section id="home" class="pt-36 pb-8 lg:py-40 xl:py-44 relative">
	<div
		class="container space-y-16 lg:flex justify-between items-center lg:space-x-20 lg:space-y-0 relative"
	>
		<!-- text -->
		<div class="text-center lg:text-left w-full relative lg:pr-20">
			<div class="relative">
				<span class="text-xl leading-normal text-gray-800 mb-4 pre-line-top-title"
					>Hello there,</span
				>

				<h1 class="h1 mt-4">
					Let’s make <br /> <span class="text-primary-700">Google Cloud</span> <br /> simple
				</h1>

				<p class="text-lg md:text-2xl mb-8 leading-normal">
					Effortlessly navigate your way to success on Google Cloud with expert guidance.
				</p>

				<a
					href="/contact"
					class="btn primary-btn hover:scale-105 hover:shadow-[0 8px 20px rgb(56 87 241 / 30%)] inline-block"
					>Contact me</a
				>
			</div>

			<div class="hidden lg:block absolute -z-10 -top-[45%] -left-[35%]">
				<BreathingBlob gradientId="hero" class="h-96 w-96 text-gray-100" />
			</div>
		</div>

		<!-- image -->
		<div class="w-full relative">
			<div class="relative">
				<img
					src={HeroImage}
					alt=""
					class=""
					style="-webkit-mask:url({HeroMaskSvg});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
				/>

				<!-- video -->
				<button
					class="h-40 w-64 border-2 border-gray-100 rounded-3xl overflow-hidden absolute top-full left-1/2 transform -translate-x-1/2 z-10 -mt-28 lg:left-0 lg:-mt-60"
					on:click={() => (showModal = true)}
				>
					<img src={PopupThumb} alt="" class="h-full w-full object-cover object-center" />

					<div
						class="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 flex justify-center items-center group"
					>
						<div
							class="h-16 w-16 rounded-full flex justify-center items-center bg-gray-100 text-primary-700 transform group-hover:text-gray-100 group-hover:bg-primary-700 group-hover:scale-110 transition-all duration-300 ease-in-out"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 21 24"
								class="h-6 w-6 ml-1"
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
				class="absolute top-0 left-1/2 -mt-14 transform -z-10 -translate-x-1/2 animate-move-left"
			>
				<Figure class="h-36 w-36" />
			</div>
		</div>
	</div>

	<!-- gray bg -->
	<HeroBg class="w-[65%] absolute top-0 left-0 -z-50 text-gray-200" />

	<!-- figure -->
	<div class="absolute bottom-5 -left-32 -z-10 transform hidden lg:block animate-move-top">
		<Figure class="h-52 w-52" />
	</div>
</section>

{#if showModal}
	<div
		class="h-screen w-screen fixed top-0 left-0 z-50 bg-black bg-opacity-70 p-2 flex justify-center items-center"
	>
		<div class="aspect-video max-w-4xl w-full relative">
			<iframe
				src="https://www.youtube.com/embed/dQw4w9WgXcQ"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				class="w-full h-full object-contain object-center"
			/>

			<button class="text-white absolute -top-12 right-0" on:click={() => (showModal = false)}>
				<Close classNames="h-8 w-8" />
			</button>
		</div>
	</div>
{/if}
