import { fetchMeme } from "$lib/assets/js/utils";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const meme = await fetchMeme(params.meme);

  if (meme) {
    return {
      meme: meme,
    };
  } else {
    throw error(404, "Meme Not Found");
  }
};
