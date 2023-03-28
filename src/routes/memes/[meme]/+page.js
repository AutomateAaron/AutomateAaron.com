import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  try {
    return {
      meme: `/src/lib/memes/${params.meme}.jpg`,
    };
  } catch (err) {
    throw error(404, err);
  }
};
