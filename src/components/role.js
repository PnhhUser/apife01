import { Navigate } from "react-router-dom";
import { ROLE } from "../commons/constants";
import { useAuthen } from "../contexts/authContext";

export const Role = ({ children, name }) => {
  const keyIndex = Object.keys(ROLE)
    .map((key) => key.toLocaleLowerCase())

    .indexOf(name);
  const value = Object.values(ROLE)[keyIndex];

  const { role } = useAuthen();

  if (value === role) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
