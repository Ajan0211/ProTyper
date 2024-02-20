import "./Settings.css";
import Navbar from "../../Navbar";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Setting() {
  const { setIsLightMode } = useContext(ThemeContext);
  return (
    <>
      <Navbar></Navbar>
      <div className="title">Fonts</div>
      <div className="font-container">
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
        <div className="button2">font1</div>
      </div>

      <div className="title">Background</div>
      <div className="background-container">
        <div onClick={() => setIsLightMode(true)} className="background1">
          Light Mode
        </div>
        <div onClick={() => setIsLightMode(false)} className="background1">
          Dark Mode
        </div>
      </div>
    </>
  );
}

export default Setting;
