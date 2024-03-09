import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const updateProfile = () => {
    axios.get("/api/profile").then(({ data }) => {
      setUser(data);
    });
  };

  const logout = () => {
    axios.get("/api/logout", () => {
      setUser(null);
    });
  };

  useEffect(() => {
    updateProfile();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}
