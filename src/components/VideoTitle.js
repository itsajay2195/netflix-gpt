import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-8 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex w-1/2">
        <div className="flex items-center">
          {" "}
          {/* Added flex and items-center */}
          <button className="bg-white text-black p-2 px-10 text-lg  rounded-lg hover:bg-opacity-80">
            <FontAwesomeIcon
              icon={faPlay}
              style={{ color: "black", marginRight: 10 }}
            />
            Play
          </button>
        </div>
        <div className="flex items-center">
          {" "}
          {/* Added flex and items-center */}
          <button className="bg-gray-500 text-white p-2 px-10 text-lg bg-opacity-50 rounded-lg flex mx-10 hover:bg-opacity-80">
            <div
              style={{
                height: 24, // Reduced height
                width: 24, // Reduced width
                borderRadius: 50,
                borderWidth: 1,
                marginRight: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faInfo}
                style={{
                  color: "white",
                  height: 16, // Reduced height
                  width: 16, // Reduced width
                }}
              />
            </div>
            <div>
              <span>More info</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
