import type { ComponentType } from 'svelte';

// export interface IImage {
//   src: string;
//   alt: string;
// }

export interface IBlogMeta {
	url: string;
	date: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
}

export interface INavItem {
	name: string;
	href: string;
}

export interface IMeme {
	slug: string;
	image: string;
	title: string;
}

export interface IBlog {
	slug: string;
	image: string;
	imageAlt: string;
	title: string;
	date: string;
}

export interface IPortfolio {
	slug: string;
	category: string;
	title: string;
	image: string;
	imageAlt: string;
}

export interface IResumeSectionItem {
	date?: Date | string;
	toDate?: Date | string;
	title: string;
	company?: string;
	description?: string;
	bullets?: string[];
}

export interface IResumeSection {
	title: string;
	items: IResumeSectionItem[];
}

export interface IService {
	title: string;
	description: string;
	icon: ComponentType;
}

export interface ITestimonial {
	name: string;
	comment: string;
	time: string;
	star: number;
}

export interface ISocialMediaLink {
	url: string;
	icon: ComponentType;
}

export interface IContactOption {
	icon: ComponentType;
	title: string;
	description: string;
}

export interface IShortLink {
	slug: string;
	url: string;
}
