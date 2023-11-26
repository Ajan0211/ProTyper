import Navbar from "./Navbar.jsx";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="container-login">
        <div className="heading-login">Login</div>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input
            type="username"
            id="uernamename"
            name="username"
            placeholder="Username..."
          ></input>
        </div>

        <div className="input">
          <i class="fa-solid fa-key"></i>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password..."
          ></input>
        </div>
        <div className="button-container">
          <div className="submit-button">
            <a onClick={() => navigate("/Game")}>Login</a>
          </div>
          <div className="submit-button">
            <a onClick={() => navigate("/SignUp")}>Sign up</a>
          </div>
        </div>
        <div className="forgot-password">
          <a onClick={() => navigate("/ResetPassword")}>
            Forgot your password?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
