import path from 'path';
import { glob } from 'glob';
import fs from 'fs';
import type { IMeme } from '$lib/types';
import { blogsPerPage } from '$lib/config';

export async function fetchBlogs({ offset = 0, limit = blogsPerPage, category = '' } = {}) {
	let blogs = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/blog/*.md')).map(async ([path, resolver]) => {
			const blog = await resolver();
			const slug = path.split('/').pop()?.split('.')[0];

			return {
				slug: slug,
				metadata: blog.metadata,
				content: blog.default,
			};
		})
	);

	blogs = blogs.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

	if (category) {
		blogs = blogs.filter((blog) => blog.metadata.categories.includes(category));
	}

	if (offset) {
		blogs = blogs.slice(offset);
	}

	if (limit && limit < blogs.length && limit != -1) {
		blogs = blogs.slice(0, limit);
	}

	blogs = blogs.map((blog) => ({
		slug: blog.slug,
		metadata: blog.metadata,
	}));

	return blogs;
}

export async function fetchMemes({ offset = 0, limit = 0 } = {}) {
	let paths = await glob('./static/memes/*.png');

	paths = paths.sort((a, b) => fs.statSync(b).mtime.getTime() - fs.statSync(a).mtime.getTime());

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
		image: `/memes/${parsed.base}`,
		title: parsed.name,
	};

	return meme;
}
