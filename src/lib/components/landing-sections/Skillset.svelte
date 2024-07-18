<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import SkillImage from '$lib/assets/images/skillset.jpg?as=run&width=480;720';
	import Check from '~icons/mdi/check-bold';

	import BreathingBlob from '../svg/BreathingBlob.svelte';
	import Figure from '../Figure.svelte';

	const skills: string[] = [
		// Cloud Technologies
		'GCP',
		'AWS',
		'Kubernetes',
		'Terraform',
		'Docker',
		'BigQuery',

		'Azurill-poke', // poke

		// DevOps
		'DevOps',
		'Jenkins',
		'GitHub',
		'Agile',
		'Ansible',

		'Gorebyss-poke', // poke

		// Languages
		'Python',
		'GoLang',
		'Java',
		'Javascript',

		'Raichu-poke', // poke

		// Frontend Framewoks
		'VueJS',
		'Svelte',
		'NextJS',
		'Firebase',
		'Supabase',

		'Lopunny-poke', // poke
	];
</script>

<section id="skill" class="section relative">
	<div class="container grid-cols-2 items-center gap-x-16 space-y-8 py-12 lg:grid lg:space-y-0">
		<div class="relative">
			<!-- <img src={SkillImage} alt="" /> -->
			<Img src={SkillImage} alt="The last picture of me, I promise." class="mask-left" />

			<Figure class="absolute -left-24 -top-12 -z-10 h-72 w-72 animate-move-y text-base-content" />
		</div>

		<div class="prose-condensed prose prose-lg mb-8 lg:prose-xl xl:prose-2xl">
			<span class="pre-line-top-title">Our Skills</span>
			<h2>What's Our Skillset?</h2>
			<p>
				Let's be honest, this section here is just the "buzzword bingo" for search engines. (Also,
				can you find the four Pokémon?)
			</p>

			<div class="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))]">
				{#each skills as skill}
					<div
						class="flex items-center justify-start gap-2 border-t p-1 {skill.split('-').length >
							1 && 'pokemon'}"
					>
						<Check class="h-5 w-5 text-primary" />
						<span class="text-xl leading-normal">{skill.split('-')[0]}</span>
					</div>
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

<style lang="postcss">
	.pokemon {
		transition: 0s background-color;
		transition-delay: 10s;
		@apply duration-300;
	}

	.pokemon:hover {
		transition-delay: 500ms;
		@apply bg-green-200 duration-300;
	}
</style>
