/**
 * This file contains the bag context which returns the props bag, setbag and removeFromBag.
 * @date 30/3/2024 - 11:17:03 AM
 * @author Ajanthapan Agilaruben
 * @returns {BagContextProvider}
 */

import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const BagContext = createContext({});

export function BagContextProvider({ children }) {
  const [bag, setBag] = useState([]);
  // This function allows the user to remove items from the bag.
  const removeFromBag = (item) => {
    const indexToRemove = bag.indexOf(item);
    if (indexToRemove !== -1) {
      const newBag = [...bag];
      newBag.splice(indexToRemove, 1);
      setBag(newBag);
      toast.success("Removed from basket!");
    }
  };

  return (
    <BagContext.Provider value={{ bag, setBag, removeFromBag }}>
      {children}
    </BagContext.Provider>
  );
}
