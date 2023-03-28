import { blogsPerPage } from "$lib/config";
import { fetchBlogs } from "$lib/assets/js/utils";
import { json } from "@sveltejs/kit";

export const prerender = true;

export const GET = async ({ params }) => {
  const page = params.page || 1;

  const options = {
    offset: (page - 1) * blogsPerPage,
    limit: blogsPerPage,
  };

  const { blogs } = await fetchBlogs(options);

  return json(blogs);
};
