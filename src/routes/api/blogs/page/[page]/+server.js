import { blogsPerPage } from "$lib/config";
import fetchPosts from "$lib/assets/js/fetchBlogs";
import { json } from "@sveltejs/kit";

export const prerender = true;

export const GET = async ({ params }) => {
  const { page } = params || 1;

  const options = {
    offset: (page - 1) * blogsPerPage,
    limit: blogsPerPage,
  };

  const { blogs } = await fetchPosts(options);

  return json(blogs);
};
