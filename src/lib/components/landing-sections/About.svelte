<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import AboutImage from '$lib/assets/images/about.jpg?width=480;720&run';

	import BreathingBlob from '../svg/BreathingBlob.svelte';
	import Figure from '../Figure.svelte';
</script>

<section id="about" class="section overflow-hidden">
	<div class="container">
		<!-- heading -->
		<div
			class="prose prose-lg lg:prose-xl xl:prose-2xl max-w-lg mx-auto text-center prose-condensed mb-8"
		>
			<span>About About</span>
			<h2>About About About</h2>
			<p>About About About About About</p>
		</div>

		<!-- content -->
		<div class="relative items-center justify-center md:flex">
			<!-- image -->
			<div class="relative md:w-1/2 lg:w-2/5">
				<Img src={AboutImage} alt="Me... thinking." class="mask-left" />

				<Figure class="absolute top-0 -z-10 -ml-12 -mt-12 h-36 w-36 animate-move-x" />
			</div>

			<!-- text -->
			<div
				class="relative z-10 mx-4 -mt-48 rounded-xl bg-accent p-6 text-accent-content md:mx-0 md:-ml-12 md:-mt-0 md:w-1/2 md:p-8 lg:p-12 prose lg:prose-lg xl:prose-xl prose-headings:text-accent-content max-w-none"
			>
				<h3>Who am I?</h3>
				<p>
					I'm a professional Google Cloud Engineer, with extensive experience enabling startups and
					small businesses. Through designing cloud native architectures, conducting workshops, and
					more I've helped hundreds of organizations to maximize their Cloud investment. And, I'd
					love to help yours too!
				</p>

				<div class="flex flex-wrap gap-2">
					<a href="/contact" class="btn-primary btn">Schedule Consultation</a>
					<a href="/#resume" class="btn-outline btn text-accent-content"> View Resume </a>
				</div>
			</div>

			<BreathingBlob
				class="absolute -right-12 -top-12 hidden h-80 w-80 rotate-90 text-base-300 md:block"
			/>
		</div>
	</div>
</section>
