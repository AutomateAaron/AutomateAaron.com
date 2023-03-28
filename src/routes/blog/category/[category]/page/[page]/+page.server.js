import { redirect } from "@sveltejs/kit";
import { blogsPerPage } from "$lib/config";
import fetchPosts from "$lib/assets/js/fetchBlogs";

export const load = async ({ url, params, fetch }) => {
  const page = parseInt(params.page) || 1;
  const { category } = params;

  // Prevents duplication of page 1 as the index page
  if (page <= 1) {
    throw redirect(301, `/blog/category/${category}`);
  }

  let offset = page * blogsPerPage - blogsPerPage;

  const totalPostsRes = await fetch(`${url.origin}/api/blogs/count`);
  const total = await totalPostsRes.json();
  const { blogs } = await fetchPosts({ offset, page });

  return {
    blogs,
    page,
    category,
    totalPosts: total,
  };
};
