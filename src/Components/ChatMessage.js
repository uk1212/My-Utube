import React from 'react'
import userImg from "../Assets/img/userIcn.png";

const ChatMessage = ({name,message}) => {
  return (
  
    <div className="flex  p-2 items-center shadow-md">
    <img className="h-12" alt="user-icon" src={userImg} />
    <span className="font-bold px-2 py-2">{name}</span>
    <span>{message}</span>
    </div>
    
 
  )
}

export default ChatMessage