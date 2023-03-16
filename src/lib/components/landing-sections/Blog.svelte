<script lang="ts">
	import type { IBlog } from '$lib/types/generalTypes';
	import Blog1 from '$lib/assets/images/blog/person-reaching-out-to-robot.jpg';
	import Blog2 from '$lib/assets/images/allpost/turtles-all-the-way-down.jpeg';
	import Blog3 from '$lib/assets/images/allpost/allPost-6.jpg';
	import BlogBlob from '$lib/components/svg/landing-sections/blog/BlogBlob.svelte';

	const blogPosts: IBlog[] = [
		{
			slug: 'Optimal-dating-strategy',
			image: {
				src: Blog1,
				alt: ''
			},
			title: 'Optimal Dating Strategy',
			date: 'February 13, 2023'
		},
		{
			slug: 'docker-in-docker-in-docker-in...',
			image: {
				src: Blog2,
				alt: ''
			},
			title: 'Docker in Docker in Docker in...',
			date: 'September 13, 2020'
		},
		{
			slug: 'markdown-dormatting-demo',
			image: {
				src: Blog3,
				alt: ''
			},
			title: 'Markdown Formatting Demo',
			date: 'September 13, 2020'
		}
	];
</script>

<section id="blog" class="py-20 md:py-12 xl:py-24 relative">
	<div class="container z-10 relative">
		<div class="lg:flex justify-between items-end">
			<div>
				<span class="text-xl leading-normal mb-4 pre-line-top-title"> Blog </span>
				<h2 class="h2 mt-4">Recent Article</h2>
				<p class="mb-4">Just a place for my thoughts...</p>
			</div>

			<div class="hidden lg:block">
				<a
					href="blog"
					class="py-4 px-8 border-lg border-2 border-gray-800 text-base text-gray-800 rounded-lg text-center duration-300 ease-in-out hover:scale-110 inline-block hover:shadow-lg"
					>See All Posts</a
				>
			</div>
		</div>

		<div
			class="mt-12 lg:flex justify-between items-start space-y-36 lg:space-y-0 lg:space-x-8 pb-36 lg:pb-0"
		>
			{#each blogPosts as post}
				<div class="group w-full relative">
					<a href="/">
						<div>
							<div class="rounded-3xl overflow-hidden w-4/5 mx-auto lg:w-[90%] lg:ml-0">
								<img
									src={post.image.src}
									alt={post.image.alt}
									class="transform group-hover:scale-110 transition-all duration-300 ease-in-out w-full"
								/>
							</div>
						</div>

						<div
							class="bg-gray-100 rounded-3xl p-8 absolute -bottom-24 left-0 md:left-10 lg:right-0 "
							style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
						>
							<span class="text-primary-700 text-base pre-line-top-title">{post.date}</span>
							<h5 class="h5 mt-5 mb-0">{post.title}</h5>
						</div>
					</a>
				</div>
			{/each}
		</div>

		<div class="lg:hidden flex justify-center mt-8">
			<a
				href="blog"
				class="py-4 px-8 border-lg border-2 border-gray-800 text-base text-gray-800 rounded-lg text-center duration-300 ease-in-out hover:scale-110 inline-block hover:shadow-lg"
			>
				See All Posts
			</a>
		</div>
		<div class="absolute -top-[5%] -right-[10%] -z-20">
			<BlogBlob class="h-96 w-96 text-gray-200 animate-spin-slow" />
		</div>
	</div>
</section>
