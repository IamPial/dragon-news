import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="text-[#403F3F] font-semibold text-xl">All Category</h2>
      <ul className="flex flex-col gap-2 mt-5 ">
        {categories.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              className={` 
                ${activeId === category.category_id && "bg-[#E7E7E7] font-semibold text-[#403F3F]"}  px-18 py-4 rounded-md font-medium   text-[#9F9F9F] text-center`}
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
