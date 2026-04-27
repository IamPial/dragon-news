import Image from "next/image";
import React from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { IoEyeSharp, IoShareSocialOutline } from "react-icons/io5";
import { format } from "date-fns";
import Link from "next/link";

const NewsCardPage = ({ news }) => {
  console.log(news);
  return (
    <div>
      <div className="card bg-base-100  border border-gray-200 my-4 ">
        <div className="card-body p-0 ">
          <div className="bg-[#f3f3f3] flex items-center justify-between gap-5 p-2 ">
            <div className="flex items-center gap-2">
              <Image
                src={news.author?.img}
                alt="author Image"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col ">
                <h2 className="card-title capitalize">{news.author?.name}</h2>
                <p>
                  {format(new Date(news.author?.published_date), "yyyy-MM-dd")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <FaRegBookmark className="w-6 h-6 text-[#706F6F]" />
              <IoShareSocialOutline className="w-6 h-6 text-[#706F6F]" />
            </div>
          </div>
          <h2 className="text-xl font-bold px-3 text-[#403F3F] py-4">
            {news?.title}
          </h2>
        </div>
        <figure>
          <Image src={news?.image_url} alt="News" width={600} height={300} />
        </figure>
        <p className="px-3 my-5 text-[#706F6F] line-clamp-3">{news?.details}</p>
        <Link href={`/news/${news?._id}`} className="p-2">
          <button className="btn text-[#FF8C47]">Read More</button>
        </Link>
        <div className="px-3">
          <div className="divider h-0.5 bg-gray-200 "></div>
        </div>
        <div className=" p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaStar className="text-[#ff8c47]" />
            <FaStar className="text-[#ff8c47]" />
            <FaStar className="text-[#ff8c47]" />
            <FaStar className="text-[#ff8c47]" />
            <FaStar className="text-[#ff8c47]" />
            <p className="text-gray-400">{news.rating?.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <IoEyeSharp className="text-gray-400" />
            <p className="text-gray-400">{news?.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardPage;
