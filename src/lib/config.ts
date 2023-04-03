/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

import type { ISocialMediaLink } from "$lib/types/generalTypes";

import Facebook from "$lib/components/svg/social-media/Facebook.svelte";
import Github from "$lib/components/svg/social-media/Github.svelte";
import Linkedin from "$lib/components/svg/social-media/Linkedin.svelte";
import Medium from "$lib/components/svg/social-media/Medium.svelte";
import Twitter from "$lib/components/svg/social-media/Twitter.svelte";

export const siteTitle = "My Awesome Blog";
export const siteDescription = "Built with the SvelteKit Static Blog Starter";
export const siteURL = "example.com";
export const siteLink =
  "https://github.com/josh-collinsworth/sveltekit-blog-starter";
export const siteAuthor = "- find and change this text in src/lib/config.js";

// Controls how many blogs are shown per page on the main blog index pages
export const blogsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
  {
    title: "Home",
    route: "/#home",
  },
  {
    title: "About",
    route: "/#about",
  },
  {
    title: "Services",
    route: "/#services",
  },
  {
    title: "Blog",
    route: "/#blog",
  },
  {
    title: "Resume",
    route: "/#resume",
  },
  {
    title: "Memes",
    route: "/#memes",
  },
  {
    title: "Reviews",
    route: "/#reviews",
  },
];

export const siteMap = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Blog",
    route: "/blog",
  },
  {
    title: "Memes",
    route: "/memes",
  },
  {
    title: "Contact",
    route: "/contact",
  },
];

export const socialMediaLinks: ISocialMediaLink[] = [
  {
    url: "https://github.com/AaronNBrock",
    icon: Github,
  },
  {
    url: "https://www.linkedin.com/in/AaronNBrock/",
    icon: Linkedin,
  },
  {
    url: "https://www.facebook.com/AaronNBrock/",
    icon: Facebook,
  },
  {
    url: "https://twitter.com/AaronNBrock",
    icon: Twitter,
  },
  {
    url: "https://medium.com/@AaronNBrock",
    icon: Medium,
  },
];
