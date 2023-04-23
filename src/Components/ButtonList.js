import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Cricket", "Soccer", "News", "Cooking"];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap  pl-10">
      {list.map((btn,index) => (
        <Button key={index} name={btn}  />
      ))}
    </div>
  );
};

export default ButtonList;
