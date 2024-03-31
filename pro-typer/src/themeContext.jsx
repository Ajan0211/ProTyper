/**
 * @author Ajanthapan Agilaruben
 * This is the file that contains the context which manages the themes including support for light/dark mode as well as choosing the fonts.
 *
 * @date 31/3/2024 - 13:29:50 PM
 *
 * @returns Themes component
 */

import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [currentFont, setCurrentFont] = useState(null);
  const [currentSkin, setCurrentSkin] = useState(null);
  const [currentBG, setCurrentBG] = useState(null);
  // This is the list of the available fonts
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
  // This is the function that gets the CSS style string of the current font chosen by the user.
  const getCurrentFontString = () => {
    if (currentFont == null) {
      return null;
    }
    return fontList.filter((item) => item.name == currentFont)[0].styleString;
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightMode, // whether light mode is on
        setIsLightMode, //m function to set light/dark mode
        fontList, // list of available fonts
        currentFont, // currently selected font
        setCurrentFont, // function to set the current font
        getCurrentFontString, // function to get the style string of the current font
        currentSkin, // currently selevted skin
        setCurrentSkin, // Function to set the current skin
        currentBG, // Currently selected background
        setCurrentBG, // function to set current
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
