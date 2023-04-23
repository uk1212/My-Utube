import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";


const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(10),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  // if(ChatMessages)
  return (
    <div className="border w-full h-full border-black bg-slate-100 rounded-lg overflow-auto flex flex-col-reverse  ">
      {ChatMessages.map((c,index) => (
        <ChatMessage name={c.name} message={c.message} key={index} />
      ))}
    </div>
  );
};

export default LiveChat;
