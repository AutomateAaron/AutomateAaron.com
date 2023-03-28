import fetchMemes from "$lib/assets/js/fetchMemes";
import { json } from "@sveltejs/kit";

export const prerender = true;

export const GET = async () => {
  const { memes } = await fetchMemes();
  return json(memes);
};
