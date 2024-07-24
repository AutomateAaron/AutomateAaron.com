import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import { shortLinks } from '$lib/config';

export const load: Load = async ({ params }) => {
	for (const shortLink of shortLinks) {
		if (shortLink.slug === params.shortLink) {
			const shortLinkImages = import.meta.glob('../../../lib/assets/images/shortlinks/*.png', {
				query: { as: 'run', blur: '6' },
				eager: true
			});

			return {
				image:
					shortLinkImages[`../../../lib/assets/images/shortlinks/${params.shortLink}.png`]
						?.default || null,
				shortLink
			};
		}
	}

	error(404, 'Shortlink Not Found');
};
