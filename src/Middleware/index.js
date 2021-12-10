import { useState } from "react";
import { ADD_MESSAGE_ACTION } from "../Store/Messages/constants";
import { v4 as uuidv4 } from "uuid";

export const middleware = (store) => (next) => (action) => {
  if (action.type === ADD_MESSAGE_ACTION && action.message.author !== "Bot") {
    const INIT_BOT = {
      id: uuidv4(),
      author: "Bot",
      text: "Hello!",
    };
    const CHAT_BOT = {
      id: uuidv4(),
      author: "Bot",
      text: "To Be, or not to Be...",
    };

    const [messageList, setMessageList] = useState([INIT_BOT]);

    setTimeout(() => store.dispatch(setMessageList(CHAT_BOT)), 2000);
  }
  return next(action);
};
