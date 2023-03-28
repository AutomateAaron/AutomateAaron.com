import { blogsPerPage } from "$lib/config";

const fetchBlogs = async ({
  offset = 0,
  limit = blogsPerPage,
  category = "",
} = {}) => {
  let blogs = await Promise.all(
    Object.entries(import.meta.glob("/src/lib/blogs/*.md")).map(
      async ([path, resolver]) => {
        const { metadata } = await resolver();
        const slug = path.split("/").pop().slice(0, -3);
        return { ...metadata, slug };
      }
    )
  );

  blogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (category) {
    blogs = blogs.filter((blog) =>
      blog.categories.includes(category)
    );
  }

  if (offset) {
    blogs = blogs.slice(offset);
  }

  if (limit && limit < blogs.length && limit != -1) {
    blogs = blogs.slice(0, limit);
  }

  blogs = blogs.map((blog) => ({
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    image: blog.image,
    imageAlt: blog.imageAlt,
    date: blog.date,
    categories: blog.categories,
  }));

  return {
    blogs: blogs,
  };
};

export default fetchBlogs;
