import { Navigate, useParams } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const Chats = ({ chatList }) => {
  const { chatId } = useParams();
  if (!chatId || !chatList[chatId]) {
    return <Navigate to={ROUTES.NO_CHAT} />;
  }
  return (
    <>
      <li id={1}>Skynet</li>
      <li id={2}>T-1000</li>
      <li id={3}>Rebelscum</li>
    </>
  );
};
