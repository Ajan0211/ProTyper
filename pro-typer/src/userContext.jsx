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

  useEffect(() => {
    updateProfile();
  }, []);
  return (
    <UserContext.Provider value={{ user, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}
