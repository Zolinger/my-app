import { useState } from "react";

const CHAT = [];
/*const author = {
  ME: "John C",
  BOT: "T-800",
};*/

export const MessageList = () => {
  const [MessageList] = useState(CHAT);

  return MessageList.map(({ message }) => (
    <div className="messagetext">{message}</div>
  ));
};
