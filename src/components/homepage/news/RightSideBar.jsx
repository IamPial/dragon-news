import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <h2 className="text-[#403F3F] font-semibold text-xl mb-4">Login With</h2>
      <div className="flex flex-col gap-3 ">
        <button className="btn border-blue-400 text-blue-500">
          {" "}
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn">
          {" "}
          <FaGithub />
          Login with Github
        </button>
      </div>

      <div>
        <h2 className="text-[#403F3F] font-semibold text-xl mt-8 mb-4">
          Find Us On
        </h2>
        <ul className="flex flex-col gap-1 border border-gray-200 rounded-md">
          <li className="flex items-center p-4 border-b border-b-gray-200  font-medium text-[#706F6F]">
            <FaFacebookF className="text-[#3B599C] mr-5 w-10 h-10 rounded-full bg-gray-200  p-2" />
            Facebook
          </li>
          <li className="flex items-center p-4 border-b border-b-gray-200 font-medium text-[#706F6F]">
            <FaTwitter className="text-[#58A7DE] mr-5 w-10 h-10 rounded-full bg-gray-200  p-2" />{" "}
            Twitter
          </li>
          <li className="flex items-center p-4  font-medium text-[#706F6F]   ">
            <FaInstagram className=" mr-5 w-10 h-10 rounded-full bg-gray-200  p-2 text-pink-500" />{" "}
            Instagram
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
