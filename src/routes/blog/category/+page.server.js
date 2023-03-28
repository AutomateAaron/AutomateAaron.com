export const load = async ({ url, fetch }) => {
  const blogs = await (await fetch(`${url.origin}/api/blogs.json`)).json();

  let uniqueCategories = {};

  blogs.forEach((blog) => {
    blog.categories.forEach((category) => {
      // eslint-disable-next-line no-prototype-builtins
      if (uniqueCategories.hasOwnProperty(category)) {
        uniqueCategories[category].count += 1;
      } else {
        uniqueCategories[category] = {
          title: category,
          count: 1,
        };
      }
    });
  });

  const sortedUniqueCategories = Object.values(uniqueCategories).sort(
    (a, b) => a.title > b.title
  );

  return {
    uniqueCategories: sortedUniqueCategories,
  };
};
