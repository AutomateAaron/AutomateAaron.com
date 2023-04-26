import { fetchBlogs } from '$lib/assets/js/utils';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	const blogs = fetchBlogs();

	return {
		blogs: blogs,
	};
};
