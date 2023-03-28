const fetchMemes = async () => {
  const memes = await Promise.all(

    // TODO replace glob for non-import glob
    Object.entries(import.meta.glob("/src/lib/memes/*.jpg")).map(
      async ([path, resolver]) => {
        const image = path;
        const title = path
        const slug = path.split("/").pop().slice(0, -4);
        return { slug, image, title };
      }
    )
  );
  console.log('test')

  console.log(memes)
  return {
    memes: memes,
  };
};

export default fetchMemes;
