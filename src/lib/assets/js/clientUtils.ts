import { error } from '@sveltejs/kit';

export function teleport(node: HTMLElement, name = 'teleport') {
	const teleportContainer = document.getElementById(name);

	if (teleportContainer === null) {
		throw Error(`No element with id "${name}" to teleport to!`);
	}

	teleportContainer.appendChild(node);
	teleportContainer.focus(); // optional

	return {
		destroy() {
			node.remove();
		},
	};
}

export async function loadImage(path: string) {
	// Strip non alphanumaric from the beginning of the string:
	const replaceExp = /^[^a-zA-Z0-9]+/;

	path = path.replace(replaceExp, '');

	let images = import.meta.glob('../images/**/*.{jpg,jpeg,png}', {
		query: { run: '' },
		eager: true,
	});

	images = Object.fromEntries(
		Object.entries(images).map(([k, v]) => [k.replace(replaceExp, ''), v])
	);

	const image = images[path];

	if (image === undefined) {
		throw error(404, `image "${path}" not found`);
	}

	return image;
}

export async function fetchBlogs({
	offset = 0,
	limit = 0,
	category = '',
	loadBlogImage = true,
} = {}) {
	let blogs = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/blog/*.md')).map(async ([path, resolver]) => {
			const slug = path.split('/').pop()?.split('.')[0];

			const blog = await resolver();

			return {
				slug: slug,
				metadata: blog.metadata,
				default: blog.default,
				image: loadBlogImage ? (await loadImage(blog.metadata.image)).default : null,
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
	return blogs;
}

export async function fetchBlog(slug: string, { loadBlogImage = true } = {}) {
	const blog = await import(`../../../routes/blog/${slug}.md`);

	return {
		slug: slug,
		metadata: blog.metadata,
		default: blog.default,
		image: loadBlogImage ? (await loadImage(blog.metadata.image)).default : null,
	};
}

export async function fetchMemes({ offset = 0, limit = 0 } = {}) {
	let memes = await Promise.all(
		Object.entries(
			import.meta.glob('../images/memes/*.{jpg,jpeg,png}', {
				query: { run: '' },
				eager: true,
			})
		).map(async ([path, meme]) => {
			const slug = path.split('/').pop()?.split('.')[0];

			// console.log(resolver)
			// const meme = await resolver();

			// console.log(meme)

			return {
				slug: slug,
				default: meme.default,
			};
		})
	);

	if (offset) {
		memes = memes.slice(offset);
	}

	if (limit && limit < memes.length && limit != -1) {
		memes = memes.slice(0, limit);
	}
	return memes;
}
