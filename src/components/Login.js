import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/Valdiate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { DEFAULT_USER_AVTAR } from "../utils/constants";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBtnClick = () => {
    //validate the fields data

    let result = checkValidData(email.current.value, password.current.value);

    if (result) {
      setErrorMessage(result);
    } else if (!result && isSignUp) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: DEFAULT_USER_AVTAR,
          }).then(() => {
            const currentUser = auth.currentUser;
            dispatch(
              addUser({
                uid: currentUser?.uid,
                email: currentUser?.email,
                displayName: currentUser?.displayName,
                photoURL: currentUser?.photoURL,
              })
            );
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .then(() => {
          const currentUser = auth.currentUser;
          dispatch(
            addUser({
              uid: currentUser?.uid,
              email: currentUser?.email,
              displayName: currentUser?.displayName,
              photoURL: currentUser?.photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
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
