import { Navigate } from "react-router-dom";
import { useAuthen } from "../contexts/authContext";

export const Auth = ({ children }) => {
  const { token } = useAuthen();

  if (token === null) {
    return <Navigate to="/login" />;
  }

  return children;
};
