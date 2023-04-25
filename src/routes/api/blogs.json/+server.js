import { json } from '@sveltejs/kit';
import { blogsPerPage } from '$lib/config';
import { fetchBlogs } from '$lib/assets/js/utils';

export const prerender = true;

export const GET = async () => {
	// const options = {
	//   limit: blogsPerPage,
	// };

	const blogs = await fetchBlogs({ limit: blogsPerPage });
	return json(blogs);
};
