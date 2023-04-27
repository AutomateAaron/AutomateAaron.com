import { fetchBlogs, fetchMemes } from '$lib/assets/js/clientUtils.js';

export const load = async () => {
	const blogs = await fetchBlogs({ limit: 3 });
	const memes = await fetchMemes({ limit: 10 });

	return {
		blogs,
		memes: memes,
	};
};
