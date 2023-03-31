import { error } from "@sveltejs/kit";


export const load = async ({ params }) => {
  try {
    const blog = await import(`../../../lib/blogs/${params.blog}.md`);

    return {
      BlogContent: blog.default,
      meta: { ...blog.metadata, slug: params.blog },
    };
  } catch (err) {
    throw error(404, err);
  }
};
