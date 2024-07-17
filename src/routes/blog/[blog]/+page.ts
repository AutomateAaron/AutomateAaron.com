import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const blog = await import(`../../blog/${params.blog}.md`);
		return {
			blog: blog,
		};
	} catch (err) {
		if (err instanceof Error) {
			error(404, err.message);
		}
		throw err
	}
};
