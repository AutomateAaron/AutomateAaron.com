import { fetchMemes } from '$lib/assets/js/utils';

export const load = async ({ url, fetch }) => {
  const memes = await fetchMemes()

  return {
    memes: memes
  };
};
