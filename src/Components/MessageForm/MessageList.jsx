import "./MessageList.css";

export function MessageList({ messageList }) {
  return (
    <>
      {messageList.map(({ id, author, text }) => (
        <div key={id} className="message">
          <>
            <span className="message_author">{author}</span>
            <p className="message_text">{text}</p>
          </>
        </div>
      ))}
    </>
  );
}
