import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const BagContext = createContext({});

export function BagContextProvider({ children }) {
  const [bag, setBag] = useState([]);

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
