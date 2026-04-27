import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

const newsByGetCategoriesId = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categories = await getCategories();
  const news = await newsByGetCategoriesId("08");
  console.log(news);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 my-18">
      <div className=" col-span-3 rounded-md">
        <LeftSideBar categories={categories} activeId={null} />
      </div>
      <div className=" col-span-6 rounded-md">
        <h2>Dragon News Home</h2>
        <div>
          {news.length === 0 ? (
            <h2 className="text-5xl text-center my-20 font-bold text-gray-500">
              No Data Found
            </h2>
          ) : (
            news.map((n) => {
              return (
                <div key={n._id}>
                  <h2 className="font-semibold ">Title: {n.title}</h2>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className=" col-span-3 rounded-md">
        <RightSideBar />
      </div>
    </div>
  );
}
