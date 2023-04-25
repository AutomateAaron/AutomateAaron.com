<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import AboutImage from '$lib/assets/images/about.jpg?run';

	import BreathingBlob from '../svg/BreathingBlob.svelte';
</script>

<section id="about" class="section overflow-hidden">
	<div class="container">
		<!-- heading -->
		<div>
			<span class="mb-4 inline-block w-full text-center text-xl leading-normal"> About About </span>
			<h2 class="h2 text-center">About About About</h2>
			<p class="mb-16 text-center">About About About About About</p>
		</div>

		<!-- content -->
		<div class="relative items-center justify-center md:flex">
			<!-- image -->
			<div class="relative md:w-1/2 lg:w-2/5">
				<Img src={AboutImage} alt="about-img" class="mask-left" />

				<!-- <div class="absolute -left-[16%] -top-[7%] transform animate-move-top">
          <Figure classNames="h-36 w-36" />
        </div> -->
			</div>

			<!-- text -->
			<div
				class="relative z-10 mx-4 -mt-48 rounded-xl bg-accent p-6 text-accent-content md:mx-0 md:-ml-12 md:-mt-0 md:w-1/2 md:p-8 lg:p-12"
			>
				<h3 class="h3">Who am I?</h3>
				<p class="mb-6">
					As a the leader in <a
						target="_blank"
						rel="noreferrer"
						href="https://www.reddit.com/r/googlecloud/top/?t=all"
					>
						Google Cloud memes
					</a>, I know a thing or two about both communicating Google Cloud concepts and building
					applications on the platform. My goal is to streamline your GCP usage so your business can
					focus on what matters: your business.
				</p>

				<div class="-m-2">
					<a href="/contact" class="m-2 inline-block">
						<button class="btn-primary btn">Lets chat!</button>
					</a>
					<a href="/#resume" class="m-2 inline-block">
						<button class="btn-outline btn text-accent-content"> View Resume </button>
					</a>
				</div>
			</div>

			<div class="absolute -right-[12%] -top-[20%] -z-50 hidden md:block">
				<BreathingBlob gradientId="aaa" class="h-80 w-80 rotate-45 text-base-300" />
			</div>
		</div>
	</div>
</section>
