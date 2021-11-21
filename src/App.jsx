import "./App.css";
import React, { useCallback, useState } from "react";

const CHAT = [];

function App() {
  const MessageList = () => {
    const [MessageList] = useState(CHAT);
    return MessageList.map(({ message }) => (
      <div className="message">{message}</div>
    ));
  };
  const SendMessageForm = () => {
    const [message, MessageList] = useState();
    const handleChange = useCallback((e) => {
      MessageList(e.target.message);
    }, []);
    return (
      <div className="sendform">
        <form>
          <input
            className="message-form"
            type="text"
            value={message}
            placeholder="Enter your message..."
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Send"
            className="message-button"
            onClick={MessageList}
          />
        </form>
      </div>
    );
  };
  return (
    <div className="chat">
      <MessageList />
      <SendMessageForm />
    </div>
  );
}

export default App;
