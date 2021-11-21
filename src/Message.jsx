import "./Message.css";

export const Message = ({ name, years }) => {
  return (
    <div className="mytext">
      Hello from Syberia! My name is {name}. I am {years} years old.
    </div>
  );
};
