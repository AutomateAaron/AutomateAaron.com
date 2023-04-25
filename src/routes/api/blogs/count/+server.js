import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = () => {
	const blogs = import.meta.glob(`$lib/blogs/*.md`);

	return json(Object.keys(blogs).length);
};
