import { fetchBlog } from '$lib/assets/js/clientUtils.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const blog = await fetchBlog(params.blog);
		return {
			blog: blog,
		};
	} catch (err) {
		if (err instanceof Error) {
			throw error(404, err);
		}
		throw err;
	}
};
