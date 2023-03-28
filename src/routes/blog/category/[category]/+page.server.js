import fetchPosts from "$lib/assets/js/fetchBlogs";

export const load = async ({ params }) => {
  const category = params.category;
  const page = params.page || 1;
  const options = { category, limit: -1 };
  const { blogs } = await fetchPosts(options);

  return {
    blogs,
    category,
    page,
    total: blogs.length,
  };
};
