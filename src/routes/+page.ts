import { fetchBlogs, fetchMemes } from "$lib/assets/js/utils";

export const load = async ({ url, fetch }) => {
  // const blogRes = await fetch(`${url.origin}/api/blogs.json`);
  // const blogs = await blogRes.json();

  // const totalRes = await fetch(`${url.origin}/api/blogs/count`);
  // const total = await totalRes.json();

  // return { blogs, total };
  const blogs = await fetchBlogs({
    limit: 3,
  });

  const memes = await fetchMemes();

  return {
    blogs: blogs,
    memes: memes,
  };
};
