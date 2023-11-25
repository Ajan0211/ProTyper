import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-item1">
          <a onClick={() => navigate("/")}>Home</a>
        </div>
        <div className="nav-item1">
          <a onClick={() => navigate("/Shop")}>Shop</a>
        </div>
        <div className="nav-item1">
          <a onClick={() => navigate("/Settings")}>Settings</a>
        </div>
      </div>

      <img className="logo" src="src/assets/Layer 1.png"></img>
      <div className="nav-right">
        <a onClick={() => navigate("/Login")}>Login/Signup</a>
      </div>
    </div>
  );
}

export default Navbar;
