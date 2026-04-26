import Link from "next/link";
import userAvatar from "@/assets/user.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 justify-between items-center gap-4 container mx-auto my-5 ">
      <div></div>
      <ul className="flex items-center justify-center gap-5 text-gray-600 ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About</Link>
        </li>
        <li>
          <Link href={"/career"}>Career</Link>
        </li>
      </ul>
      <div className="flex items-center justify-end gap-2 ">
        <Image src={userAvatar} alt={"avatar"} width={40} height={40} />
        <button className="bg-[#403F3F] btn text-white px-10 font-semibold text-xl rounded-none">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
