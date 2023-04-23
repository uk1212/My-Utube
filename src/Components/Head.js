import React, { useEffect } from "react";
import logo from "../Assets/img/unnamed (3).jpg";
import userImg from "../Assets/img/userIcn.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //API call
    //make an api call after every key press
    //but if defference between 2 api calls is <200ms
    //declline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API--" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const dispatch = useDispatch();

  const toggleMenuHadler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHadler()}
          className="h-8 p-4 cursor-pointer bg-blue-400"
          alt="menu"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png"
        />
        <img className="h-12 mx-2" alt="utube-logo" src={logo} />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="shadow-md p-1 pl-3 w-1/2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border  pl-3 p-1 border-gray-400 px-2 rounded-r-full">
            🔍
          </button>
        </div>
        {/* {fixed} */}
        <div className=" bg-white py-2 px-2 w-1/2 rounded-md shadow-2xl ">
          <ul>
            {showSuggestions &&
              suggestions?.map((s) => (
                <li key={s} className="hover:bg-gray-100 py-2 px-3">
                  🔍{s}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <img className="h-12" alt="user-icon" src={userImg} />
      </div>
    </div>
  );
};

export default Head;
