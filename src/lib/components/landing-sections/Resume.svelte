<script lang="ts">
	import type { IResumeSectionItem } from '$lib/types';
	import Figure from '../Figure.svelte';
	import ResumeCard from './ResumeCard.svelte';
	import ArrowOutward from '~icons/ic/baseline-arrow-outward';

	const achievements: IResumeSectionItem[] = [
		{
			title: 'GCP Professional Cloud Architect',
			description:
				'"A Professional Cloud Architect enables organizations to leverage Google Cloud technologies. With a thorough understanding of cloud architecture and Google Cloud Platform, this individual can design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives." ~ Google Cloud',
			date: new Date(2022, 5, 1),
		},
		{
			title: 'GCP Associate Cloud Engineer',
			description:
				'"An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions. This individual is able to use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud." ~ Google Cloud',
			date: new Date(2018, 11, 1),
		},
		{
			title: 'Eagle Scout',
			description:
				'"Since 1912, the Eagle Scout rank has represented a milestone of accomplishment—perhaps without equal—that is recognized across the country and even the world." ~ Scouting.org',
			date: new Date(2018, 11, 1),
		},
	];

	const experience: IResumeSectionItem[] = [
		{
			title: 'Cloud Engineer',
			date: 'NOV 2020 - PRESENT',
			company: 'SADA',
			bullets: [
				'Led technical relationships with 20+ clients which directly lead to deals closing.',
				'Architected & assisted adoption of Google Cloud’s Gen AI Tooling in 4+ organizations.',
				'Built relationships with Google reps, leading to an increased lead generation.',
				"Co-Presented with Googlers both internally & externally, establishing SADA's brand.",
				'Architected a secure application for a social media startup with over 2 million active users.',
				'Automated parts of the internal sales pipeline, saving valuable cycles.',
				'Successfully supported the migration from AWS to GCP for multiple customers.',
				'Developed multiple professional services offerings based on observations of market needs.',
			],
		},
		{
			title: 'DevOps Consultant',
			company: 'Contino',
			date: 'SEP 2019 - NOV 2020',
			bullets: [
				'Created automation to enforce git tagging rules to follow Semantic Versioning.',
				'Deployed CI/CD platform enforcing FedRAMP medium standards to all environments.',
				'Developed automated tests to guarantee proper terraform deployment.',
				'Created a POC terraform provider which wraps GCP storage objects.',
				'Migrated AWS Service Control Policies from a manual workflow to an automated policy-as-code workflow at a global financial ratings and intelligence firm.',
				'Lead pair programming sessions, upskilling clients on Cloud best practices.',
			],
		},
		{
			title: 'DevOps Contractor',
			company: 'Functionize',
			date: 'SEP 2019 - JAN 2020',
			bullets: [
				'Designed a solution for running Selenium tests against Windows browsers in GKE.',
				'Configured secure remote access to Jenkins using Google Cloud’s Identity-Aware Proxy.',
				'Containerized a legacy node.js application, allowing it to be migrated to Kubernetes.',
				'Created private Kubernetes deployment, integrating with k8s & GKE best practices.',
			],
		},
		{
			title: 'Data Engineering Intern',
			company: 'Soterea',
			date: 'JUN 2019 - AUG 2019',
			bullets: [
				'Developed & deployed a data management tool, replacing manual data transfers.',
				'Deployed an ELK Stack to collect and visualize metrics across the company.',
				'Facilitated company adoption and upskilling of Git and Docker.',
			],
		},
		{
			title: 'DevOps Engineer',
			company: 'iconectiv',
			date: 'DEC 2017 - MAY 2019',
			bullets: [
				'Setup Kubernetes to support CI workflow, reducing build wait times.',
				'Stabilized build and deployment by dockerizing jobs, allowing for greater test repeatability.',
				'Developed automated testing tools to support API & Data integrity tests, drastically reducing test development time and increasing test coverage.',
				'Reduced GUI testing time by deploying Selenoid grid cluster, reducing test time by 10x.',
				'Provided training for Git & TensorFlow, which facilitated tool adoption.',
				'Created a dockerized version of MongoDB’s Ops Manager.',
			],
		},
		{
			title: 'A.I. Team Member',
			company: 'Princeton PAVE Club',
			date: 'OCT 2016 - OCT 2019',
			bullets: [
				'Created a program to detect lane lines on a video stream using OpenCV.',
				'On-boarded & taught new members TensorFlow.',
				'Created a neural network to clone human driving in a simulator.',
				'Developed a Vehicle Detector using OpenCV & Keras.',
			],
		},
		{
			title: 'Co-Founder',
			company: 'Soda Hop Media',
			date: 'OCT 2016 - JAN 2017',
			bullets: [
				'Developed and demoed a prototype cloud gaming application.',
				'Automated AWS instance creation & VPN connections to ensure secure connections.',
				'Automated bidding on AWS spot instances, lowering server costs by over 70%.',
			],
		},
		{
			title: 'Contract Consultant',
			company: 'Minecraft Servers',
			date: 'OCT 2016 - JAN 2017',
			bullets: [
				'Created the reward system for the largest Minecraft Server in the world.',
				'Developed a plugin to translate Minecraft chat live via Google Translate.',
				'Led a team of developers to create a modular mini-game framework.',
				'Trained developers in how to use and develop for our mini-game framework.',
				'Automated our deployments via Gradle to speed up the development cycle.',
			],
		},
	];
	let self: HTMLElement;
	function scrollToTop() {
		if (window.scrollY < self.offsetTop) {
			return;
		}
		let viewBottom = window.scrollY + window.innerHeight;
		let elemBottom = self.offsetHeight + self.offsetTop;
		if (viewBottom > elemBottom) {
			window.scrollTo({
				top: self.offsetHeight + self.offsetTop - window.innerHeight - 20,
				behavior: 'instant',
			});
		}
		window.scrollTo({ top: self.offsetTop, behavior: 'smooth' });
	}
</script>

<section bind:this={self} id="resume" class="section relative">
	<div class="absolute bottom-0 left-0 right-0 top-0 -z-40 -skew-y-2 transform bg-accent" />

	<input
		on:change={scrollToTop}
		class="tab-input tab1-input hidden"
		type="radio"
		name="tabs"
		id="tab1"
		checked
	/>
	<input
		on:change={scrollToTop}
		class="tab-input tab2-input hidden"
		type="radio"
		name="tabs"
		id="tab2"
	/>

	<div class="tab-holder container relative items-start justify-between gap-x-6 lg:flex">
		<div
			class="prose-condensed prose prose-lg !top-32 min-w-[18rem] max-w-lg text-accent-content lg:prose-xl xl:prose-2xl prose-headings:text-accent-content prose-a:text-accent-content lg:!sticky"
		>
			<span class="pre-line-top-title before:bg-accent-content"> Resume </span>
			<h2 class="">Experience</h2>
			<p class="mb-4">
				What? You don’t want to just take my word for it that I know what I’m talking about? I guess
				some healthy scepticism is a good thing. You can also view the <a
					href="https://docs.google.com/document/d/16FDmclyQRMEkhyr37R1P_f7uE1IUwE6QW7eRM4VqTbg/edit?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					Google Docs<ArrowOutward class="inline h-[1em] w-[1em]" />
				</a>
				version.
			</p>
			<div class="tabs-boxed tabs tabs-lg bg-base-200 duration-300 hover:scale-[1.03]">
				<label class="tab-label tab1-label tab" for="tab1">Experience</label>
				<label class="tab-label tab2-label tab" for="tab2">Achievements</label>
			</div>
		</div>

		<div class="">
			<div class="tab1-content tab-content w-full lg:w-max">
				{#each experience as item}
					<ResumeCard {item} />
				{/each}
			</div>
			<div class="tab2-content tab-content w-full lg:w-max">
				{#each achievements as item}
					<ResumeCard {item} />
				{/each}
			</div>
		</div>
	</div>
	<Figure class="absolute right-0 top-24 -z-10 h-24 w-12 animate-move-y text-accent-content" />
</section>

<style type="postcss">
	/* tab input 
  .tab-input {
    @apply hidden;
  }*/

	/* label 
  .tab-input ~ .tab-holder .tab-label {
  }*/

	/* label checked */
	.tab1-input:checked ~ .tab-holder .tab-label.tab1-label,
	.tab2-input:checked ~ .tab-holder .tab-label.tab2-label {
		@apply bg-primary text-primary-content;
	}

	/* tab content */
	.tab-input ~ .tab-holder .tab-content {
		@apply hidden;
	}

	/* tab content checked */
	.tab1-input:checked ~ .tab-holder .tab-content.tab1-content,
	.tab2-input:checked ~ .tab-holder .tab-content.tab2-content {
		@apply block;
	}
</style>
