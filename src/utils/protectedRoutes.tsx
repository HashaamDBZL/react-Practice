import { Outlet, Navigate } from "react-router";
import { useAuth } from "./AuthContext.tsx";

const ProtectedRoutes = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
