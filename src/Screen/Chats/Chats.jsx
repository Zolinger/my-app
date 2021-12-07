import React, { useState } from "react";
import { AddChats } from "./AddChats";
import { ChatList } from "./ChatList";
import "./Chats.css";
//import { Navigate, useParams } from "react-router-dom";
//import { ROUTES } from "../../Router/constants";

export function Chats() {
  const [chatList, setChatList] = useState([]);

  /*const { chatId } = useParams();
  if (!chatId || !chatList[chatId]) {
    return <Navigate to={ROUTES.NO_CHAT} />;
  }*/

  return (
    <div className="chat-form">
      <AddChats chatList={chatList} setChatList={setChatList} />
      <ChatList chatList={chatList} />
    </div>
  );
}
