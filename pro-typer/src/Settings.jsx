import "./Settings.css";
import Navbar from "../../Navbar";

function Setting() {
  return (
    <>
      <Navbar></Navbar>
      <div className="title">Fonts</div>
      <div className="font-container">
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
        <div className="font1">font1</div>
      </div>

      <div className="title">Background</div>
      <div className="background-container">
        <div className="background1">Light Mode</div>
        <div className="background1">Dark Mode</div>
      </div>
    </>
  );
}

export default Setting;
