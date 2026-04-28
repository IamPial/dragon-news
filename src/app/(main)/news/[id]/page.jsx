import Image from "next/image";
import Link from "next/link";
import { getNewsDetailsById } from "@/lib/data";
import { BsArrowLeft } from "react-icons/bs";
import RightSideBar from "@/components/homepage/news/RightSideBar";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  return {
    title: news?.title,
    description: news?.description,
  };
}

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-5">
      <div className="col-span-9">
        <h2 className="text-[#403F3F] font-semibold text-xl">Dragon News</h2>
        <div className="card max-w-4xl bg-base-100  border border-gray-200 my-4 ">
          <div className="card-body">
            <figure>
              <Image
                src={news?.image_url}
                alt="News"
                sizes="100vw"
                height={300}
                width={0}
                className="w-full h-auto"
              />
            </figure>
            <h2 className="text-xl font-bold  text-[#403F3F] py-2">
              {news?.title}
            </h2>
            <p className="mb-2 text-[#706F6F] ">{news?.details}</p>
            <Link href={`/category/${news?.category_id}`}>
              <button className="btn bg-[#D72050] text-white">
                <BsArrowLeft /> All news in this category
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
