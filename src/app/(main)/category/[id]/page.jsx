import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCardPage from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, newsByGetCategoriesId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await newsByGetCategoriesId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 my-18">
      <div className=" col-span-3 rounded-md">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className=" col-span-6 rounded-md">
        <h2 className="text-[#403F3F] font-semibold text-xl">
          Dragon News Home
        </h2>
        <div>
          {news.length === 0 ? (
            <h2 className="text-5xl text-center my-20 font-bold text-gray-500">
              News aren&apos;t available
            </h2>
          ) : (
            news.map((n) => {
              return <NewsCardPage key={n._id} news={n} />;
            })
          )}
        </div>
      </div>
      <div className=" col-span-3 rounded-md">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
