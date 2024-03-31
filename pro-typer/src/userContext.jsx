/**
 * @author Ajanthapan Agilaruben
 * This is the file that contains the contxt that contains the user info and provides it acroos all components in the aaplication
 *
 * @date 31/3/2024 - 13:29:50 PM
 *
 * @returns User context.
 */

import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { BagContext } from "./BagContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// this creates a new context for the users informations
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const { bag, setBag } = useContext(BagContext);
  const navigate = useNavigate();
  // This function updates the users profile information
  const updateProfile = () => {
    axios.get("/api/profile").then(({ data }) => {
      setUser(data);
    });
  };
  // This is teh function that handles the user logout
  const logout = () => {
    setUser(null);
    axios.get("/api/logout");
  };
  // This isi the function that handles the checkout process
  const checkout = (dataToSend) => {
    axios
      .post("/api/checkout", dataToSend) // send the data to the backend
      .then(() => {
        setBag([]); // This clears the bag after purchase went through
        toast.success("Purchase was successful"); // This shows the success message
        navigate("/"); // Navigates back to home page
      })
      .catch((error) => {
        if (error.response.status == 401) {
          toast.error(error.response.data.message);
        }
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
