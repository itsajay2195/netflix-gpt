import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
    });
  };
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      //unsubsribe when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-l from-black z-10 w-screen ">
      <img className="w-20" src={LOGO} alt="Logo" />

      {userInfo && (
        <div className="flex p-2 ">
          <img
            alt="uericon"
            className="w-12 h-12"
            src={
              userInfo?.photoURL ||
              "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            }
          />
          <button onClick={handleSignout} className="font-bold text-white">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
