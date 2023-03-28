export const load = async ({ url, fetch }) => {
  const memesRes = await fetch(`${url.origin}/api/memes.json`);
  const memes = await memesRes.json();

  return { memes };
};
