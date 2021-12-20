import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const PrivateRoute = ({ auth, ...rest }) =>
  !auth ? <Outlet {...rest} /> : <Navigate to={ROUTES.SIGN_IN} />;
