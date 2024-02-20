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
        <div className="button2">Kode Mono</div>
        <div className="button2">Anta</div>
        <div className="button2">Montserrat</div>
        <div className="button2">Roboto Condensed</div>
        <div className="button2">Playfair Display</div>
        <div className="button2">Oswald</div>
        <div className="button2">Bebas Neue</div>
        <div className="button2">Kanit</div>
        <div className="button2">Caveat</div>
        <div className="button2">Lobster</div>
        <div className="button2">Indie Flower</div>
        <div className="button2">Tangerine</div>
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
