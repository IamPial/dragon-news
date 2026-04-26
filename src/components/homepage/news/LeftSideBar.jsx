import React from "react";

const LeftSideBar = ({ categories }) => {
  return (
    <div>
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
  );
};

export default LeftSideBar;
