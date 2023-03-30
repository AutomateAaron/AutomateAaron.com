// import { fetchBlogs, fetchMemes } from "$lib/assets/js/utils";
// import { glob } from "glob";

// export const load = async ({ url, fetch }) => {
//   // const blogRes = await fetch(`${url.origin}/api/blogs.json`);
//   // const blogs = await blogRes.json();

//   // const totalRes = await fetch(`${url.origin}/api/blogs/count`);
//   // const total = await totalRes.json();

//   const memers = await glob("/static/images/*.jpg");

//   console.log(memers);

//   // return { blogs, total };
//   const blogs = await fetchBlogs({
//     limit: 3,
//   });

//   const memes = await fetchMemes();

//   return {
//     blogs: blogs,
//     memes: memes,
//   };
// };
