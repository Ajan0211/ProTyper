import Navbar from "./Navbar.jsx";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

/**
 * @author Ajanthapan Agilaruben
 * This file is used for the Login page where the use would type in there email and password. There
 * is a sign up button for un-registered users and a forgot your password section as well if the user has forgotten there passwords.
 * @date 12/5/2023 - 11:47:21 AM
 *
 * @returns {The navbar along with the login form }
 */
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/Login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container-login">
        <div className="heading-login">Login</div>
        {showError ? (
          <div className="error">The username or password is incorrect!</div>
        ) : undefined}
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input
            type="username"
            id="uernamename"
            name="username"
            placeholder="Username..."
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="input">
          <i className="fa-solid fa-key"></i>
          <input
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            name="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <i
            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            type="show-password"
            onClick={() => setShowPassword((state) => !state)}
          ></i>
        </div>
        <div className="button-container">
          <div className="submit-button">
            {/* This is commented out as it would set off error message. */
            /* <a onClick={() => setShowError(true)}>Login</a> */}
            <a onClick={() => handleSubmit()}>Login</a>
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
