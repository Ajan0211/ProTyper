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
        <div
          style={{ fontFamily: '"Kode Mono", monospace' }}
          className="button2"
        >
          Kode Mono
        </div>
        <div style={{ fontFamily: '"Anta", sans-serif' }} className="button2">
          Anta
        </div>
        <div
          style={{ fontFamily: '"Montserrat", sans-serif' }}
          className="button2"
        >
          Montserrat
        </div>
        <div
          style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
          className="button2"
        >
          Roboto Condensed
        </div>
        <div
          style={{ fontFamily: '"Playfair Display", serif' }}
          className="button2"
        >
          Playfair Display
        </div>
        <div style={{ fontFamily: '"Oswald", sans-serif' }} className="button2">
          Oswald
        </div>
        <div
          style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          className="button2"
        >
          Bebas Neue
        </div>
        <div style={{ fontFamily: '"Kanit", sans-serif' }} className="button2">
          Kanit
        </div>
        <div style={{ fontFamily: '"Caveat", cursive' }} className="button2">
          Caveat
        </div>
        <div
          style={{ fontFamily: '"Lobster", sans-serif' }}
          className="button2"
        >
          Lobster
        </div>
        <div
          style={{ fontFamily: '"Indie Flower", cursive' }}
          className="button2"
        >
          Indie Flower
        </div>
        <div style={{ fontFamily: '"Tangerine", cursive' }} className="button2">
          Tangerine
        </div>

        <div className="button2">Default</div>
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
