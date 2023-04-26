<script lang="ts">
	let clazz = '';

	export let blogs: {
		slug: string | undefined;
		metadata: any;
		content: any;
	}[];
	console.log(blogs);
	export { clazz as class };
</script>

<ul class="grid gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] lg:gap-8 {clazz}">
	{#each blogs as blog}
		<a href="/blog/{blog.slug}" class="group">
			<div class="mx-auto w-4/5 overflow-hidden rounded-xl lg:m-0">
				<img
					src={blog.metadata.image}
					alt={blog.metadata.imageAlt}
					class="aspect-4/3 w-full scale-110 object-cover duration-300 ease-in-out group-focus-within:scale-100 group-hover:scale-100"
				/>
			</div>

			<div
				class="relative z-10 -mt-16 box-border w-full rounded-xl bg-base-100 p-8 shadow duration-300 ease-in-out group-focus-within:shadow-lg group-hover:shadow-lg lg:float-right lg:w-4/5"
			>
				<span class="pre-line-top-title text-base text-primary">{blog.metadata.date}</span>
				<h4 class="h5 mb-0 mt-5 group-focus-within:text-primary group-hover:text-primary">
					{blog.metadata.title}
				</h4>
			</div>
		</a>
	{/each}
</ul>
