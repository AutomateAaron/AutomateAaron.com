import { fetchMemes } from '$lib/assets/js/clientUtils.js';

export const load = async () => {
	const memes = await fetchMemes();

	return {
		memes,
	};
};
