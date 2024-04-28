import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/Valdiate";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleBtnClick = () => {
    //validate the fields data

    let result = checkValidData(email.current.value, password.current.value);
    if (result) {
      setErrorMessage(result);
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <div className="flex flex-col items-center justify-center h-screen  ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" absolute w-3/12  p-12 bg-black  my-36 mx-auto left-0 text-white right-0 bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            Sign {isSignUp ? "Up" : "In"}
          </h1>
          {isSignUp ? (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-md"
            />
          ) : null}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <p className="text-red-500 font-bold text-md py-4 px-2">
            {errorMessage}
          </p>
          <button
            className="p-4 my-6 bg-red-700 w-full"
            onClick={handleBtnClick}
          >
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
