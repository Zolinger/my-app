import { Navigate, useParams } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const Chats = () => {
  const { chatId } = useParams();
  if (!chatId) {
    return <Navigate to={ROUTES.NO_CHAT} />;
  }
  return <h1>Chats page</h1>;
};
