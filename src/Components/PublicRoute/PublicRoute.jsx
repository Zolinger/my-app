import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const PublicRoute = ({ auth, ...rest }) =>
  !auth ? <Outlet {...rest} /> : <Navigate to={ROUTES.PROFILE} />;
