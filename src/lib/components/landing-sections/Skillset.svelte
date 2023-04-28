<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import SkillImage from '$lib/assets/images/skillset.jpg?run';
	import Check from '~icons/mdi/check-bold';

	import BreathingBlob from '../svg/BreathingBlob.svelte';
	import Figure from '../Figure.svelte';

	const skills: string[] = [
		'AWS',
		'GCP',
		'Kubernetes',
		'Terraform',
		'Azurill',
		'Docker',
		'Jenkins',
		'GitHub',
		'Gorebyss',
		'Python',
		'Golang',
		'Java',
		'Javascript',
		'VueJS',
		'Ansible',
	];
</script>

<section id="skill" class="section relative">
	<div class="container grid-cols-2 items-center gap-x-16 space-y-8 py-12 lg:grid lg:space-y-0">
		<div class="relative">
			<!-- <img src={SkillImage} alt="" /> -->
			<Img src={SkillImage} alt="The last picture of me, I promise." class="mask-left" />

			<Figure class="absolute -left-24 -top-12 -z-10 h-72 w-72 animate-move-y text-base-content" />
		</div>

		<div class="">
			<span class="pre-line-top-title mb-4 text-xl leading-normal">My Skills</span>
			<h2 class="h2 mt-4">What's my Skillset?</h2>
			<p class="mb-4">
				I'll be honest, this section here is just the "buzzword bingo" that I play with the search
				engines. (Also, can you find the two pokeimon?)
			</p>

			<div class="grid grid-cols-3">
				{#each skills as skill}
					<span class="flex items-center justify-start space-x-2 border-t p-1">
						<Check class="h-5 w-5 fill-current text-primary" />
						<span class="text-xl leading-normal">{skill}</span>
					</span>
				{/each}
			</div>
		</div>
	</div>

	<Figure
		class="absolute bottom-16 right-36 hidden h-[4.5rem] w-[4.5rem] animate-move-y lg:block"
	/>

	<BreathingBlob
		class="absolute -bottom-0 right-0 -z-20 h-72 w-72 rotate-90 transform text-base-300 lg:right-8"
	/>
</section>
