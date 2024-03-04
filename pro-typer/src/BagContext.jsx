import { createContext, useState } from "react";

export const BagContext = createContext({});

export function BagContextProvider({ children }) {
  const [bag, setBag] = useState([]);

  return (
    <BagContext.Provider value={{ bag, setBag }}>
      {children}
    </BagContext.Provider>
  );
}
