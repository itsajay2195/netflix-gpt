import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LANG, LANGUAGE_CONSTANTS, LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addSelectedLanguage } from "../utils/LanguageSlice";
import { addUser, removeUser } from "../utils/userSlice";

const SelectMenu = ({ items, selectRef, onChange }) => {
  const handleSelectChange = (event) => {
    const selectedItem = items.find(
      (item) => item.label === event.target.value
    );
    onChange(selectedItem);
  };

  return (
    <select
      ref={selectRef}
      className="  bg-black text-white  rounded-lg px-2 mr-0 border-b"
      onChange={handleSelectChange}
    >
      {items.map((item, index) => {
        return (
          <option
            // selected={item?.value === value ? true : false}
            onClick={(e) => console.log("val is", item)}
            value={item?.label}
          >
            {item?.value}
          </option>
        );
      })}
    </select>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
    });
  };
  const userInfo = useSelector((state) => state.user);
  const selectRef = useRef(null);
  const selectedLang = useSelector(
    (state) => state?.language?.selectedLanguage
  );

  const isGptSearchView = useSelector((state) => state?.gpt?.showGptSearchView);
  const onLangchange = (lang) => {
    dispatch(addSelectedLanguage(lang));
  };

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

  const handleGptSearchclick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-l from-black z-10 w-screen ">
      <img className="w-20" src={LOGO} alt="Logo" />

      <div className="flex p-2">
        <SelectMenu
          selectRef={selectRef}
          items={LANGUAGE_CONSTANTS}
          onChange={onLangchange}
        />

        {userInfo && (
          <div className="flex">
            <button
              onClick={handleGptSearchclick}
              className="bg-white text-black p-2  text-md  mx-4 rounded-lg hover:bg-opacity-80"
            >
              {isGptSearchView ? "Home" : "GPT Search"}
            </button>
            <img
              alt="uericon"
              className="w-12 h-12"
              src={
                userInfo?.photoURL ||
                "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
              }
            />
            <button onClick={handleSignout} className="font-bold text-white">
              {LANG[selectedLang?.label?.trim()].signOut}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
