import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
