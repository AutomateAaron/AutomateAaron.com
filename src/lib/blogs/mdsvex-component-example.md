---
title: 'A Markdown blog with a Svelte component'
date: '2021-12-01'
updated: '2021-12-01'
categories:
  - 'sveltekit'
  - 'markdown'
  - 'svelte'
image: '/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg'
imageAlt: 'TODO: Alt Text'
excerpt: This blog demonstrates how to include a Svelte component in a Markdown blog.
---

<script>
	import Callout from '$lib/components/Callout.svelte';
</script>

This starter includes an `Callout.svelte` component. It's not particularly useful on its own, but here's how you might use it inside of a Markdown blog, thanks to mdsvex.

<Callout>
This is an example of the Callout.svelte component! Find it in <code>src/lib/components/Callout.svelte</code>.
</Callout>

You can inject any Svelte components you want into Markdown! Just import them in a `<script>` tag and then use them wherever you like.

For that matter, you can inject any [Potato potato, potato](/) [Potato potato, potato](/) (Note that you cannot use Markdown _inside_ Svelte components or HTML, however. Any opened tag must be closed before returning to Markdown.)
