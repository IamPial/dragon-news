import { format } from "date-fns";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="text-center py-8 space-y-2">
      <Image
        className="mx-auto"
        src={logo}
        width={500}
        height={200}
        alt="Logo"
      />
      <p className="text-gray-400 text-lg font-normal">
        Journalism Without Fear or Favour
      </p>
      <p className="font-medium text-xl text-gray-700">
        {" "}
        {format(new Date(), "EEEE,")}{" "}
        <span className="text-gray-500">
          {format(new Date(), " MMMM dd, yyyy")}
        </span>{" "}
      </p>
    </div>
  );
};

export default Header;
