import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <div className="flex flex-col items-center justify-center h-screen  ">
        <form className=" absolute w-3/12  p-12 bg-black  my-36 mx-auto left-0 text-white right-0 bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            Sign {isSignUp ? "Up" : "In"}
          </h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />

          {isSignUp ? (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-md"
            />
          ) : null}
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <button className="p-4 my-6 bg-red-700 w-full">
            Sign {isSignUp ? "Up" : "In"}
          </button>
          <p
            onClick={() => setIsSignUp((prev) => !prev)}
            className="py-4 cursor-pointer"
          >
            {isSignUp
              ? "Already registered? Sig up Now."
              : "New to Netflix? Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
