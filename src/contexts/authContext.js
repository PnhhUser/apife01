import { createContext, useContext, useEffect, useState } from "react";
import { apiProfile, getStorageByName } from "../commons/utils";
import { localName } from "../commons/constants";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token] = useState(getStorageByName(localName.token));
  const [role, setRole] = useState(1);

  useEffect(() => {
    async function profile() {
      if (token) {
        const user = await apiProfile(token);

        setRole(user.data.role);
      }
    }

    profile();
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthen() {
  return useContext(AuthContext);
}
