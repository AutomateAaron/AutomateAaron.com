import { fetchBlogsMeta, fetchMemes } from '$lib/utils/clientUtils.js';

export const load = async () => {
	const blogMetas = await fetchBlogsMeta({ limit: 3 });
	const memes = await fetchMemes();

	return {
		blogMetas,
		memes: memes
	};
};
