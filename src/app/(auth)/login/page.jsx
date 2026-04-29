"use client";
import Link from "next/link";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="pt-8 pb-12  flex justify-center  flex-col items-center container mx-auto">
      <h2 className="font-semibold text-[35px] my-3 text-[#403F3F]">
        Login your account
      </h2>
      <div className="divider h-0.5 bg-gray-50 p-0 m-0 w-md mb-4 mx-auto"></div>
      <form
        onSubmit={handleSubmit}
        className=" bg-base-200 shadow-xs rounded-lg min-h-[60vh]"
      >
        <div className="card bg-base-100 w-md ">
          <div className="card-body ">
            <fieldset className="fieldset space-y-3">
              <label className="label font-semibold text-xl text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="input bg-[#E7E7E7] border-none w-full"
                placeholder="Enter your email address"
              />
              <label className="label font-semibold text-xl text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input bg-[#E7E7E7] border-none w-full"
                placeholder="Enter your password"
              />
              <button className="btn bg-[#403F3F] text-xl text-white mt-3">
                Login
              </button>
              <button className="font-semibold text-[16px] text-[#706F6F]">
                Don&apos;t Have An Account ?{" "}
                <Link
                  href={"/register"}
                  className="link link-hover text-red-400"
                >
                  Register
                </Link>
              </button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
