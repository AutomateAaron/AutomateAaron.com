import { redirect } from "@sveltejs/kit";
import { blogsPerPage } from "$lib/config";
import fetchPosts from "$lib/assets/js/fetchBlogs";

export const load = async ({ fetch, params }) => {
  const page = parseInt(params.page) || 1;

  // Keeps from duplicationg the blog index route as page 1
  if (page <= 1) {
    throw redirect(301, "/blog");
  }

  let offset = page * blogsPerPage - blogsPerPage;

  const totalPostsRes = await fetch("/api/blogs/count");
  const total = await totalPostsRes.json();
  const { blogs } = await fetchPosts({ offset, page });

  return {
    blogs,
    page,
    totalPosts: total,
  };
};
