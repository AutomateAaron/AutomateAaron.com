import { fetchBlogs } from '$lib/assets/js/clientUtils';
import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	const blogs = await fetchBlogs();

	return {
		blogs: blogs,
	};
};
