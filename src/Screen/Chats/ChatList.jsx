import "./Chats.css";
import React from "react";

export function ChatList({ chatList }) {
  return (
    <>
      {chatList.map(({ chatId, chatName }) => (
        <ul key={chatId} className="chats-list" type="circle">
          <li className="chat-name">{chatName}</li>
        </ul>
      ))}
    </>
  );
}
