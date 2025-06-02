import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function AuthProvider({ children }: { children?: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedIn = localStorage.getItem("accessToken") ? true : false;

  const isLoginOrRegisterPage =
    location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    if (!loggedIn && !isLoginOrRegisterPage) {
      navigate("/login", { state: { from: location }, replace: true });
    }

    if (loggedIn && isLoginOrRegisterPage) {
      navigate("/home", { replace: true });
    }
  }, [loggedIn, isLoginOrRegisterPage, navigate, location]);

  return children ? children : <Outlet />;
}
