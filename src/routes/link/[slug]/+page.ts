import { shortLinks } from "$lib/config";
import { error } from "@sveltejs/kit";
import type { Load } from "@sveltejs/kit"



export const load: Load = async ({ params }) => {

  for (const shortLink of shortLinks) {
    if (shortLink.slug === params.slug) {

      // const image = await import(`../../../lib/assets/images/shortlinks/${params.slug}.png?run`);

      return {
        // image: image,
        shortLink: shortLink,
      }
    }
  }

  throw error(404, "Meme Not Found");
};