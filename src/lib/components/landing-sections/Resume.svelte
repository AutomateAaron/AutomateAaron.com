<script lang="ts">
	import type { IResumeSectionItem } from '$lib/types/generalTypes';
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
			date: 'NOV 2018',
		},
		{
			title: 'Eagle Scout',
			description:
				'"Since 1912, the Eagle Scout rank has represented a milestone of accomplishment—perhaps without equal—that is recognized across the country and even the world." ~ Scouting.org',
			date: 'NOV 2018',
		},
	];

	const experience: IResumeSectionItem[] = [
		{
			title: 'Cloud Engineer',
			date: 'NOV 2020 - PRESENT',
			company: 'SADA',
			bullets: [
				'Lead technical relationships with 200+ clients which directly lead to deals closing.',
				'Built relationships with Google reps, leading to an increased lead generation.',
				"Co-Presented with Googlers both internally & externally, establishing SADA's brand.",
				'Architected application for social media startup with over 2 million active users.',
				'Automated parts of the internal sales pipeline, saving valuable cycles.',
				'Successfully supported the migration from AWS to GCP for multiple customers.',
				'Developed multiple professional services offerings based on observations of market needs',
			],
		},
		{
			title: 'DevOps Consultant',
			company: 'Contino',
			date: 'SEP 2019 - NOV 2020',
			bullets: [
				'Developed automated tests to guarantee proper terraform deployment.',
				'Created automation to enforce git tagging rules follow Semantic Versioning.',
				'Created a POC terraform provider which wraps GCP storage objects.',
				'Migrated AWS Service Control Policies from a manual workflow to an automated policy-as-code workflow at a global financial ratings and intelligence firm.',
				'Lead pair programming sessions upskilling clients on Cloud best practices.',
			],
		},
		{
			title: 'DevOps Contractor',
			company: 'Functionize',
			date: 'SEP 2019 - JAN 2020',
			bullets: [
				'Designed a solution for running Selenium against Windows browsers in GKE.',
				'Configured secure remote access to Jenkins using Google Cloud’s Identity-Aware Proxy.',
				'Containerized legacy node.js application, allowing it to be migrated to Kubernetes.',
			],
		},
		{
			title: 'Data Engineering Intern',
			company: 'Soterea',
			date: 'JUN 2019 - AUG 2019',
			bullets: [
				'Developed and deployed a dataset management tool, completely removing the need for manual data transfers to and from labelers.',
				'Deployed an ELK Stack to collect and visualize metrics across the company.',
				'Facilitated company adoption and upskilling of Git and Docker.',
			],
		},
		{
			title: 'DevOps Engineer',
			company: 'iconectiv',
			date: 'DEC 2017 - MAY 2019',
			bullets: [
				'Setup Kubernetes to support CI workflow reducing build wait times.',
				'Simplified & stabilized build and deployment by dockerizing jobs, allowing for more developer flexibility and greater test repeatability.',
				'Developed automated testing tools to support API & Data integrity tests drastically reducing test development time and increasing test coverage.',
				'Reduced GUI testing time by creating a Selenoid grid cluster which allowed for parallel test execution, reducing test time by a factor of 10. ',
				'Provided training for Git & Tensorflow which facilitated tool adoption.',
				'Created a Dockerized version of MongoDB’s Ops Manager.',
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
				'Automated VPN connections to AWS to ensure secure connections.',
				'Created scripts to set up AWS instances to enable on-demand gaming.',
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
</script>

<section id="resume" class="section relative">
	<div class="z-00 absolute bottom-0 left-0 right-0 top-0 -skew-y-2 transform bg-accent" />

	<input class="tab-input tab1-input" type="radio" name="tabs" id="tab1" checked />
	<input class="tab-input tab2-input" type="radio" name="tabs" id="tab2" />

	<div class="tab-holder container relative items-start justify-between gap-x-6 lg:flex">
		<div class="!top-48 my-8 text-accent-content lg:!sticky">
			<span class="pre-line-top-title mb-4 text-xl leading-normal before:bg-accent-content">
				Resume
			</span>
			<h2 class="h2 mt-4">Experience</h2>
			<p class="mb-4">
				What? You don’t want to just take my word for it that I know what I’m talking about? I guess
				some healthy scepticism is a good thing. You can also view the <a
					href="https://docs.google.com/document/d/1vvDZQ8Nv_ri-R9qq2x2SKSxa0-2YTJV9Gu3Vx_UPhW4/edit?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					Google Docs<ArrowOutward class="inline h-[1em] w-[1em]" />
				</a>
				version.
			</p>
			<div class="tabs tabs-boxed inline-block bg-accent-content duration-300 hover:scale-[1.03]">
				<label class="tab-label tab1-label tab tab-lg" for="tab1"> Experience </label>
				<label class="tab-label tab2-label tab tab-lg" for="tab2"> Achievements </label>
			</div>
		</div>

		<div class="">
			<div class="tab-content tab1-content w-full lg:w-[40rem]">
				{#each experience as item}
					<ResumeCard {item} />
				{/each}
			</div>
			<div class="tab-content tab2-content w-full lg:w-[40rem]">
				{#each achievements as item}
					<ResumeCard {item} />
				{/each}
			</div>
		</div>
	</div>
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
