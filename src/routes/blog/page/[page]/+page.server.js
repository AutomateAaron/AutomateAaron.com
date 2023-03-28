import { blogsPerPage } from "$lib/config";
import fetchPosts from "$lib/assets/js/fetchBlogs";
import { redirect } from "@sveltejs/kit";

export const load = async ({ url, params, fetch }) => {
  const page = parseInt(params.page) || 1;

  // Keeps from duplicationg the blog index route as page 1
  if (page <= 1) {
    throw redirect(301, "/blog");
  }

  let offset = page * blogsPerPage - blogsPerPage;

  const totalPostsRes = await fetch(`${url.origin}/api/blogs/count`);
  const total = await totalPostsRes.json();
  const { blogs } = await fetchPosts({ offset, page });

  return {
    blogs,
    page,
    totalPosts: total,
  };
};
