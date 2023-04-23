import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  };
  if (videos.length === 0) return <Shimmer />;
  // if (videos.length === 0)  return <h1>Shimmer UI Loading......</h1>;

  // if (videos.length !== 0)
 else
    return (
      <div className="flex flex-wrap justify-around">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            {" "}
            <VideoCard  info={video} />
          </Link>
        ))}
      </div>
    );
};

export default VideoContainer;
