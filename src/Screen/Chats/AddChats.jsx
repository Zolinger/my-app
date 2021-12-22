import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function AddChats({ chatList, setChatList }) {
  const [chatName, setChatName] = useState("");

  const handleChatChange = (e) => setChatName(e.target.value);

  const chatAdd = (e) => {
    if (chatName === "") return alert("Задайте чату название!");
    const newChat = {
      chatId: uuidv4(),
      chatName: chatName,
    };

    setChatName("");

    return setChatList([...chatList, newChat]);
  };

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <>
        <input
          className="nameadd-chat"
          value={chatName}
          placeholder="Name chat..."
          onChange={handleChatChange}
        />
        <button className="add-chat" onClick={chatAdd}>
          Add chat
        </button>
      </>
    </form>
  );
}
