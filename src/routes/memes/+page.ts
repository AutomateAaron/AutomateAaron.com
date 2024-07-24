import { fetchMemes } from '$lib/utils/clientUtils.js';

export const load = async () => {
	const memes = await fetchMemes();

	return {
		memes
	};
};
