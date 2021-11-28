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
          className="text-field"
          id="outlined-textarea"
          label="Name..."
          value={messageAuthor}
          placeholder="Name..."
          onChange={handleAuthorChange}
          multiline
          autoFocus
        />
        <TextField
          className="text-field"
          label="Message..."
          value={messageText}
          onChange={handleTextChange}
          placeholder="Message..."
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
