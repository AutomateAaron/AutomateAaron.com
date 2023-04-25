import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import { shortLinks } from '$lib/config';

export const load: Load = async ({ params }) => {
	for (const shortLink of shortLinks) {
		if (shortLink.slug === params.slug) {
			// const image = await import(`../../../lib/assets/images/shortlinks/${params.slug}.png?run`);

			return {
				// image: image,
				shortLink
			};
		}
	}

	throw error(404, 'Shortlink Not Found');
};
