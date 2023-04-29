import { fetchBlogsMeta } from '$lib/assets/js/clientUtils';
import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	const blogMetas = await fetchBlogsMeta();

	return {
		blogMetas,
	};
};
