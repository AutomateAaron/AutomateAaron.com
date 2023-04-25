import { fetchBlogs, fetchMemes } from '$lib/assets/js/utils';

export const load = async ({ url, fetch }) => {
	const blogs = await fetchBlogs({ limit: 3 });
	const memes = await fetchMemes({ limit: 10 });

	const test = '';

	return {
		blogs,
		memes
	};
};
