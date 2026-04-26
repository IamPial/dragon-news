import LeftSideBar from "@/components/homepage/news/LeftSideBar";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 my-18">
      <div className=" col-span-3 rounded-md">
        <LeftSideBar categories={categories} />
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
