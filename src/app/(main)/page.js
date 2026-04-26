const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 my-18">
      <div className=" col-span-3 rounded-md">
        <h2 className="text-[#403F3F] font-semibold text-xl">All Category</h2>
        <ul className="flex flex-col gap-2 mt-5 ">
          {categories.news_category.map((category) => {
            return (
              <li
                key={category.category_id}
                className="bg-[#E7E7E7] px-18 py-4 rounded-md font-semibold text-[#403F3F] text-center"
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-indigo-100 col-span-6 rounded-md">
        <h2>Dragon News Home</h2>
      </div>
      <div className="bg-violet-100 col-span-3 rounded-md">
        <h2>Login With</h2>
      </div>
    </div>
  );
}
