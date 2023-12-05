import Navbar from "../../Navbar.jsx";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/**
 * @author Ajanthapan Agilaruben
 * This File contains the Sign up component which allows the user to input there personal information and
 * sign up to ProTyper.
 *
 * @date 12/5/2023 - 13:35:48 PM
 *
 * @returns the SignUp component
 */
function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState("");

  return (
    <>
      <Navbar></Navbar>
      <div className="signup-page">
        <div className="container-signup">
          <div className="heading-signup">Sign up</div>
          <div className="input">
            <i className="fa-solid fa-user"></i>
            <input
              type="firstname"
              id="fname"
              name="firstname"
              placeholder="Firstname..."
            ></input>
          </div>

          <div className="input">
            <i className="fa-solid fa-user"></i>
            <input
              type="lastname"
              id="lname"
              name="Lastname"
              placeholder="Lastname..."
            ></input>
          </div>

          <div className="input">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email..."
            ></input>
          </div>
          <div className="input">
            <i className="fa-solid fa-key"></i>
            <input
              type={`${showPassword ? "text" : "password"}`}
              id="password"
              name="password"
              placeholder="Password..."
            ></input>
            <i
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              type="show-password"
              onClick={() => setShowPassword((state) => !state)}
            ></i>
          </div>
          <div className="button-container2">
            <div className="signup-button">
              <a onClick={() => navigate("/Login")}>Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
