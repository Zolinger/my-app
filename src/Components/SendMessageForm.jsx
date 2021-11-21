import React, { useCallback, useState } from "react";
import { MessageList } from "./MessageList";

export default function SendMessageForm() {
  const [message, setMessages] = useState(MessageList);
  const handleChange = useCallback((e) => {
    setMessages(e.target.message);
  }, []);

  return (
    <div>
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
}
