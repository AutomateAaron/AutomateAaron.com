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
		}
	};
}

export function loadImageSmall(path: string) {
	// Strip non alphanumaric from the beginning of the string:
	const replaceExp = /^[^a-zA-Z0-9]+/;

	path = path.replace(replaceExp, '');

	let images = import.meta.glob('/src/lib/assets/images/**/**/*.{jpg,jpeg,png}', {
		query: {
			as: 'run',
			width: '480;640'
		},
		eager: true
	});

	images = Object.fromEntries(
		Object.entries(images).map(([k, v]) => [k.replace(replaceExp, ''), v])
	);

	const imageModule = images[path];

	if (imageModule) {
		return imageModule.default;
	}
	error(404, `image "${path}" not found`);
}

export function loadImage(path: string) {
	// Strip non alphanumaric from the beginning of the string:
	const replaceExp = /^[^a-zA-Z0-9]+/;

	path = path.replace(replaceExp, '');

	let images = import.meta.glob('/src/lib/assets/images/**/**/*.{jpg,jpeg,png}', {
		query: {
			as: 'run'
		},
		eager: true
	});

	images = Object.fromEntries(
		Object.entries(images).map(([k, v]) => [k.replace(replaceExp, ''), v])
	);

	const imageModule = images[path];

	if (imageModule) {
		return imageModule.default;
	}

	error(404, `image "${path}" not found`);
}

export async function fetchBlogsMeta({ offset = 0, limit = 0, category = '' } = {}) {
	const getSlug = /([^/\\&?]+)(?:\/\+page)?\.md$/g;

	let blogMetas = await Promise.all(
		// Todo filter out markdown files like /src/routes/blog/blog-slug/something-not-page.md
		Object.entries(import.meta.glob('/src/routes/blog/**/*.md')).map(async ([path, resolver]) => {
			const slug = path.matchAll(getSlug).next().value[1];

			// Todo: Only Load Meta instead of Everything
			const blog = await resolver();

			return {
				slug: slug,
				url: `/blog/${slug}`,
				...blog.metadata
			};
		})
	);

	blogMetas = blogMetas.sort((a, b) => new Date(b.date) - new Date(a.date));

	if (category) {
		blogMetas = blogMetas.filter((blog) => blog.metadata.categories.includes(category));
	}

	if (offset) {
		blogMetas = blogMetas.slice(offset);
	}

	if (limit && limit < blogMetas.length && limit != -1) {
		blogMetas = blogMetas.slice(0, limit);
	}
	return blogMetas;
}

export async function fetchMemes({ offset = 0, limit = 0 } = {}) {
	let memes = await Promise.all(
		Object.entries(
			import.meta.glob('../images/memes/*.{jpg,jpeg,png}', {
				query: {
					as: 'run'
				},
				eager: true
			})
		).map(([path, meme]) => {
			const slug = path.split('/').pop()?.split('.')[0];
			return {
				slug: slug,
				default: meme.default
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
