import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { BagContext } from "./BagContext";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const { bag, setBag } = useContext(BagContext);
  const navigate = useNavigate();

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

  const checkout = (dataToSend) => {
    axios.post("/api/checkout", dataToSend).then(() => {
      setBag([]);
      alert("Purchase was successful");
      navigate("/");
    });
  };

  useEffect(() => {
    updateProfile();
  }, [bag]);
  return (
    <UserContext.Provider
      value={{ user, setUser, logout, updateProfile, checkout }}
    >
      {children}
    </UserContext.Provider>
  );
}
