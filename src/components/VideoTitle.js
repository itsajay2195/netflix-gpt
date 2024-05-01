import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex justify-between w-1/4">
        <div>
          <button className="bg-gray-500 text-white p-2 px-10 text-lg bg-opacity-50 rounded-lg ">
            <FontAwesomeIcon
              icon={faPlay}
              style={{ color: "white", marginRight: 10 }}
            />
            Play
          </button>
        </div>
        <div>
          <button className="bg-gray-500 text-white p-2 px-10 text-lg bg-opacity-50 rounded-lg ">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
