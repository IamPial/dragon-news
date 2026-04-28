export const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export const newsByGetCategoriesId = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
};

export const getNewsDetailsById = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${category_id}`,
  );
  const data = await res.json();
  return data.data[0];
};
