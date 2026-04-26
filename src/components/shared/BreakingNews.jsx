import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      id: 1,
      title:
        "The Dragon News: Government Announces New Digital Policy for 2026",
    },
    {
      id: 2,
      title:
        "The Dragon News: Heavy Rainfall Causes Flooding in Northern Regions",
    },
    {
      id: 3,
      title: "The Dragon News: Tech Startups in Bangladesh See Rapid Growth",
    },

    {
      id: 4,
      title: "The Dragon News: Fuel Prices Adjusted Amid Global Market Changes",
    },
    { id: 5, title: "The Dragon News: New Metro Rail Extension Plan Approved" },
    {
      id: 6,
      title:
        "The Dragon News: Education Ministry Introduces Updated Curriculum",
    },
  ];

  return (
    <div className="container mx-auto flex items-center justify-center bg-gray-200 py-4 px-2 rounded-lg">
      <div className="px-2">
        <button className="bg-[#D72050] text-xl font-medium btn text-white ">
          Latest
        </button>
      </div>
      <Marquee speed={100} pauseOnHover={true}>
        {news.map((n) => (
          <span key={n.id} className="ml-4">
            {n.title} !{" "}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
