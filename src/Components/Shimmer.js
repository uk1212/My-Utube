// import VideoCard from "./VideoCard";
import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {Array(15)
        .fill("")
        .map((e,index) => (
          <div key={index} className="bg-gray-400 p-2 m-2 h-72 w-72 shadow-lg "> </div>
        ))}
    </div>
  );
};

export default Shimmer;
