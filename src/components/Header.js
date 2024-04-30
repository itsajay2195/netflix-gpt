import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/");
      dispatch(removeUser());
    });
  };
  const userInfo = useSelector((state) => state.user);
  console.log("userInfo is", userInfo);

  return (
    <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen ">
      <img
        className="w-20"
        src="https://variety.com/wp-content/uploads/2019/03/netflix-logo-n-icon.png?w=1000&h=563&crop=1"
        alt="Logo"
      />

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
