import { json } from '@sveltejs/kit';
import { fetchMemes } from '$lib/assets/js/utils';

export const prerender = true;

export const GET = async () => {
	const memes = await fetchMemes();
	return json(memes);
};
