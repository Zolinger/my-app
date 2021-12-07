import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

export function MessageForm({ messageList, setMessageList }) {
  const [messageText, setMessageText] = useState("");

  const handleTextChange = (e) => setMessageText(e.target.value);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAdd = (e) => {
    const newMessage = {
      id: uuidv4(),
      author: "Me",
      text: messageText,
    };
    setMessageText("");

    return setMessageList([...messageList, newMessage]);
  };

  return (
    <form
      className="sendform"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <input
          className="text-field"
          label="Enter your message..."
          value={messageText}
          onChange={handleTextChange}
          placeholder="Message..."
          autoFocus
          ref={inputRef}
        />
        <Button
          variant="contained"
          type="submit"
          value="Send"
          onClick={handleAdd}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
