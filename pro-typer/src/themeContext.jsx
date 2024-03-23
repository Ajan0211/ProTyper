import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [currentFont, setCurrentFont] = useState(null);
  const [currentSkin, setCurrentSkin] = useState(null);
  const [currentBG, setCurrentBG] = useState(null);

  const fontList = [
    { name: "Kode Mono", styleString: '"Kode Mono", monospace' },
    { name: "Montserrat", styleString: '"Montserrat", sans-serif' },
    { name: "Playfair", styleString: '"Playfair Display", serif' },

    { name: "Tangerine", styleString: '"Tangerine", cursive' },
    {
      name: "Jacquarda Bastarda 9",
      styleString: '"Jacquarda Bastarda 9", serif',
    },

    {
      name: "Coming Soon",
      styleString: '"Coming Soon", cursive',
    },
  ];

  const getCurrentFontString = () => {
    if (currentFont == null) {
      return null;
    }
    return fontList.filter((item) => item.name == currentFont)[0].styleString;
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightMode,
        setIsLightMode,
        fontList,
        currentFont,
        setCurrentFont,
        getCurrentFontString,
        currentSkin,
        setCurrentSkin,
        currentBG,
        setCurrentBG,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
