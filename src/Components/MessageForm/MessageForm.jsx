import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

export function MessageForm({ messageList, setMessageList }) {
  const [messageAuthor, setMessageAuthor] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleAuthorChange = (e) => setMessageAuthor(e.target.value);
  const handleTextChange = (e) => setMessageText(e.target.value);

  const handleAdd = (e) => {
    if (messageAuthor === "" || messageText === "")
      return alert("заполните поля!");
    if (messageAuthor === "T-800") return alert("Good try, human!");
    const newMessage = {
      id: uuidv4(),
      author: messageAuthor,
      text: messageText,
    };
    setMessageAuthor("");
    setMessageText("");
    return setMessageList([...messageList, newMessage]);
  };

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="sendform">
        <TextField
          id="outlined-textarea"
          label="Enter your name..."
          value={messageAuthor}
          placeholder="Enter your name..."
          onChange={handleAuthorChange}
          multiline
          autoFocus
        />
        <TextField
          label="Enter your message..."
          value={messageText}
          onChange={handleTextChange}
          placeholder="Enter your message..."
          multiline
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
