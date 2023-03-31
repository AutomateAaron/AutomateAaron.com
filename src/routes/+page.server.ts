import { fetchBlogs, fetchMemes } from '$lib/assets/js/utils';

export const load = async ({ url, fetch }) => {

  let blogs = await fetchBlogs({ limit: 3 })
  let memes = await fetchMemes({ limit: 8 })

  return {
    blogs: blogs,
    memes: memes,
  }
};
