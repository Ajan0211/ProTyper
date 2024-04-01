/**
 * @author Ajanthapan Agilaruben
 * This File contains the Setting page which contains the different fonts available for
 * the user to use as well as darkmode and lightmode.
 *
 * @date 1/4/2024 - 13:35:48 PM
 *
 * @returns the Settings component
 */

import "./Settings.css";
import Navbar from "../../Navbar";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";

// This is the function for the settings page
function Setting() {
  const { setIsLightMode, fontList, currentFont, setCurrentFont } =
    useContext(ThemeContext);
  return (
    <>
      <Navbar></Navbar>
      <div className="title">Fonts</div>
      <div className="font-container">
        {/* This maps through the availabe fonts and renders a button for each one */}
        {fontList.map((item) => {
          return (
            <div
              key={`font-button-${item.name}`}
              style={{ fontFamily: item.styleString }} // This applys the font style
              onClick={() => setCurrentFont(item.name)} // This sets the current font when clicked
              className="button2"
            >
              {/* Dispalys the font name */}
              {item.name}
            </div>
          );
        })}
        {/* This is the button for the default font */}
        <div
          onClick={() => setCurrentFont(null)}
          className="button2 default-font"
        >
          Default
        </div>
      </div>

      <div className="title">Background</div>
      <div className="background-container">
        {/* This allows you to select light mode */}
        <div onClick={() => setIsLightMode(true)} className="background1">
          <img className="Image" src={"src/assets/light-mode.png"}></img>
          <div className="name">Light Mode</div>
        </div>
        {/* This allows you to select dark mode */}
        <div onClick={() => setIsLightMode(false)} className="background1">
          <img className="Image" src={"src/assets/dark-mode.png"}></img>
          <div className="name">Dark Mode</div>
        </div>
      </div>
    </>
  );
}

export default Setting;
