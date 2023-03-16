<script lang="ts">
	import AboutImage from '$lib/assets/images/about/about.jpg';
	import AboutMaskImage from '$lib/assets/images/about/about-mask-svg.svg';
	import Figure from '../svg/Figure.svelte';
	import BreathingBlob from '../svg/BreathingBlob.svelte';
</script>

<section id="about" class="py-12 lg:py-16 xl:py-24 overflow-hidden">
	<div class="container">
		<!-- heading -->
		<div>
			<span class="text-xl leading-normal text-center mb-4 inline-block w-full"> About About </span>
			<h2 class="h2 text-center">About About About</h2>
			<p class="mb-16 text-center">About About About About About</p>
		</div>

		<!-- content -->
		<div class="lg:flex justify-between items-center relative">
			<!-- image -->
			<div class="lg:w-2/5 relative">
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
				class="bg-gray-800 dark:bg-gray-700 text-gray-100 dark:text-gray-100 mt-8 rounded-3xl p-6 lg:w-3/5 lg:p-12 lg:-translate-x-12 relative "
			>
				<h3 class="h3">Mission Statement</h3>
				<p class="mb-6 text-gray-200 dark:text-gray-100">
					As a the leader in <a target="_blank" href="/">Google Cloud memes</a>, I know a thing or
					two about both communicating Google Cloud concepts and building applications on the
					platform. As a self proclaimed fan boy also, I keep up-to-date with Google’s newest
					offerings so you don’t have to. My goal is to streamline your GCP usage so you can fosus
					on what matters: growing your business.
				</p>

				<div class="space-x-7 pb-4">
					<a
						href="/contact"
						class="py-4 px-8 bg-primary-700 border-lg border-2 border-primary-700 text-base text-gray-100 rounded-lg text-center duration-300 ease-in-out hover:scale-110 inline-block hover:shadow-lg"
						>Contact me</a
					>
					<a
						href="/"
						class="py-4 px-8 border-lg border-2 border-gray-100 dark:border-gray-100 text-base text-gray-100 dark:text-gray-100 rounded-lg text-center duration-300 ease-in-out hover:scale-110 inline-block hover:shadow-lg"
						>Let's Chat</a
					>
				</div>
			</div>

			<div class="hidden lg:block absolute -top-[20%] -right-[12%] -z-50">
				<BreathingBlob gradientId="aaa" class="h-80 w-80 text-gray-200 rotate-45" />
			</div>
		</div>
	</div>
</section>
