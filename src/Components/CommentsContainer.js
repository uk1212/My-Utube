import React from "react";

import userImg from "../Assets/img/userIcn.png";

const commentData = [
  {
    name: "Utkarsh Kumar",
    text: "Lorem ipsum dolor sit amnet",
    replies: [],
  },
  {
    name: "Utkarsh Kumar",
    text: "Lorem ipsum dolor sit amnet",
    replies: [
      {
        name: "Utkarsh Kumar",
        text: "Lorem ipsum dolor sit amnet",
        replies: [
          {
            name: "Utkarsh Kumar",
            text: "Lorem ipsum dolor sit amnet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Utkarsh Kumar",
    text: "Lorem ipsum dolor sit amnet",
    replies: [],
  },
  {
    name: "Utkarsh Kumar",
    text: "Lorem ipsum dolor sit amnet",
    replies: [
      {
        name: "Utkarsh Kumar",
        text: "Lorem ipsum dolor sit amnet",
        replies: [],
      },
      {
        name: "Utkarsh Kumar",
        text: "Lorem ipsum dolor sit amnet",
        replies: [],
      },
    ],
  },
  {
    name: "Utkarsh Kumar",
    text: "Lorem ipsum dolor sit amnet",
    replies: [],
  },
];

const Comment = ({ data, }) => {
  const { name, text, replies } = data;
  return (
    <div  className="my-2 flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <div>
        <img className="w-12 h-12" src={userImg} />
      </div>
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({comments}) => {
  return comments.map((comment,index) =>
  <div key={index}>
  <Comment  data={comment}/>
  <div className="pl-5 border border-l-black ml-5">
  <CommentsList comments={comment.replies}/>

  </div>
  </div>
  ) ;
  };


const CommentsContainer = () => {
  return (
    <div className="px-5 m-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
