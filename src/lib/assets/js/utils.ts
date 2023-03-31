import { blogsPerPage } from "$lib/config";
import type { IMeme } from "$lib/types/generalTypes";

import path from "path";
import glob from "glob";
import fs from "fs";

export async function fetchBlogs({
  offset = 0,
  limit = blogsPerPage,
  category = "",
} = {}) {
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
    blogs = blogs.filter((blog) => blog.categories.includes(category));
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

  return blogs;
}

export async function fetchMemes({ offset = 0, limit = 0 } = {}) {
  let paths = glob.sync("./static/memes/*.png");
  paths = paths.sort(
    (a, b) => fs.statSync(b).mtime.getTime() - fs.statSync(a).mtime.getTime()
  );

  if (offset) {
    paths = paths.slice(offset);
  }

  if (limit && limit < paths.length && limit != -1) {
    paths = paths.slice(0, limit);
  }

  const memes = paths.map(getMemeFromPath);

  return memes;
}

export async function fetchMeme(slug: string) {
  const memes = await fetchMemes();
  for (const i in memes) {
    const meme = memes[i];
    if (meme.slug == slug) {
      return meme;
    }
  }
  return null;
}

export function getMemeFromPath(pathStr: string) {
  const parsed = path.parse(pathStr);

  const meme: IMeme = {
    slug: parsed.name,
    image: "/memes/" + parsed.base,
    title: parsed.name,
  };

  return meme;
}
