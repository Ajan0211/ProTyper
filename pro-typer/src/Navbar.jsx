import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img className="logo" src="src/assets/Layer 1.png"></img>

      <div className="nav-item">
        <a onClick={() => navigate("/")}>Home</a>
      </div>
      <div className="nav-item">
        <a onClick={() => navigate("/Settings")}>Settings</a>
      </div>
      <div className="nav-item">
        <a onClick={() => navigate("/Shop")}>Shop</a>
      </div>
      <div className="nav-item">
        <a onClick={() => navigate("/Login")}>Login/Signup</a>
      </div>
    </div>
  );
}

export default Navbar;
