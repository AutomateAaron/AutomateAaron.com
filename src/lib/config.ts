import type { IShortLink, ISocialMediaLink } from '$lib/types';

import Github from '~icons/fa6-brands/github';
import Linkedin from '~icons/fa6-brands/linkedin-in';
import Twitter from '~icons/fa6-brands/twitter';
import Reddit from '~icons/fa6-brands/reddit-alien';
import Lemmy from '~icons/fluent-emoji-high-contrast/mouse-face';
import Mastodon from '~icons/fa6-brands/mastodon';
import Facebook from '~icons/fa6-brands/facebook-f';
import Instagram from '~icons/fa6-brands/instagram';
import Youtube from '~icons/fa6-brands/youtube';
import Medium from '~icons/fa6-brands/medium';
import Tiktok from '~icons/fa6-brands/tiktok';

export const siteTitle = 'Aaron Brock ☂️';
export const siteDescription = 'How to make The Cloud simpler.';
export const siteURL = 'AutomateAaron.com';
export const siteAuthor = '@AutomateAaron';

export const email = 'Aaron@AutomateAaron.com';

// Controls how many blogs are shown per page on the main blog index pages
export const blogsPerPage = 10;

export const navItems = [
	{
		title: 'Home',
		route: '/#home'
	},
	{
		title: 'About',
		route: '/#about'
	},
	{
		title: 'Reviews',
		route: '/#reviews'
	},
	{
		title: 'Services',
		route: '/#services'
	},
	{
		title: 'Resume',
		route: '/#resume'
	},
	{
		title: 'Memes',
		route: '/#memes'
	}
];

export const siteMap = [
	{
		title: 'Home',
		route: '/'
	},
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'Contact',
		route: '/contact'
	},
	{
		title: 'Short Links',
		route: '/link'
	}
];

export const socialMediaLinks: ISocialMediaLink[] = [
	{
		url: 'https://github.com/AutomateAaron',
		icon: Github
	},
	{
		url: 'https://linkedin.com/in/AutomateAaron',
		icon: Linkedin
	},
	{
		url: 'https://twitter.com/AutomateAaron',
		icon: Twitter
	},
	{
		url: 'https://www.reddit.com/user/AaronNBrock',
		icon: Reddit
	},
	{
		url: 'https://lemmy.world/u/AutomateAaron',
		icon: Lemmy
	},
	{
		url: 'https://mastodon.social/@AutomateAaron',
		icon: Mastodon
	},
	{
		url: 'https://facebook.com/AutomateAaron',
		icon: Facebook
	},
	{
		url: 'https://instagram.com/AutomateAaron',
		icon: Instagram
	},
	{
		url: 'https://www.youtube.com/@AutomateAaron',
		icon: Youtube
	},
	{
		url: 'https://medium.com/@AutomateAaron',
		icon: Medium
	},
	{
		url: 'https://www.tiktok.com/@AutomateAaron',
		icon: Tiktok
	}
];

export const shortLinks: IShortLink[] = [
	{
		slug: 'docker-slidedeck',
		url: 'https://docs.google.com/presentation/d/1wywdYRcQy4L_zoU6RKTUgoxs9l7VVerjKESQAzwzIqY/edit?usp=sharing'
	},
	{
		slug: 'terraform-slidedeck',
		url: 'https://docs.google.com/presentation/d/1ptP4sr_cC5qeZEuUA6fwJYF9eaLM2O9qaRtFE8bKwsg/edit?usp=sharing'
	},
	{
		slug: 'git-slidedeck',
		url: 'https://docs.google.com/presentation/d/1Q_zAEgMn9pkFs1pKL_BJ5Ru4jb61sDPX6CjRFVd7yr0/edit?usp=sharing'
	},
	{
		slug: 'git-cheatsheet',
		url: 'https://education.github.com/git-cheat-sheet-education.pdf'
	},
	{
		slug: 'hello-docker-github',
		url: 'https://github.com/AaronNBrock/hello-docker/'
	}
];
