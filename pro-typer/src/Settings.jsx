import "./Settings.css";
import Navbar from "../../Navbar";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Setting() {
  const { setIsLightMode, fontList, currentFont, setCurrentFont } =
    useContext(ThemeContext);
  return (
    <>
      <Navbar></Navbar>
      <div className="title">Fonts</div>
      <div className="font-container">
        {fontList.map((item) => {
          return (
            <div
              key={`font-button-${item.name}`}
              style={{ fontFamily: item.styleString }}
              onClick={() => setCurrentFont(item.name)}
              className="button2"
            >
              {item.name}
            </div>
          );
        })}
        <div
          onClick={() => setCurrentFont(null)}
          className="button2 default-font"
        >
          Default
        </div>
      </div>

      <div className="title">Background</div>
      <div className="background-container">
        <div onClick={() => setIsLightMode(true)} className="background1">
          <img className="Image" src={"src/assets/light-mode.png"}></img>
          <div className="name">Light Mode</div>
        </div>

        <div onClick={() => setIsLightMode(false)} className="background1">
          <img className="Image" src={"src/assets/dark-mode.png"}></img>
          <div className="name">Dark Mode</div>
        </div>
      </div>
    </>
  );
}

export default Setting;
