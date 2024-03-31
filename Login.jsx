import Navbar from "./Navbar.jsx";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./pro-typer/src/userContext.jsx";
import { toast } from "react-hot-toast";

/**
 * @author Ajanthapan Agilaruben
 * This file is used for the Login page where the user would type in there email and password. There
 * is a sign up button for un-registered users and a forgot your password section as well if the user has forgotten there passwords.
 * @date 30/3/2024 - 11:47:21 AM
 *
 * @returns {The navbar along with the login form }
 */
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(UserContext);
  // this is the function which is called when the user attempts to log in
  const handleSubmit = () => {
    axios
      .post("/api/Login", {
        email, // This includes the users email and password in the request body
        password,
      })
      .then((result) => {
        // This checks if the result doesnt return a specific error messages
        if (
          result.data !== "the password is incorrect" &&
          result.data !== "No record existed"
        ) {
          setUser(result.data); // After the user is logged in it saves it to the frontend
          navigate("/"); // naviagtes to the home page when login is successful
          toast.success("Logged in!"); // displays a success toast message
        } else {
          toast.error("Incorrect email or password. Please try again!"); // displays an error toast message if the email or password is wrong.
        }
      })
      .catch((err) => console.log(err)); // this catches any error during the request.
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
          {/* when clicked it would show the password typed in and also change the icon as well */}
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
            {/* allows user to login if password and email is correct if not it would send an error message */}
            <a onClick={() => handleSubmit()}>Login</a>
          </div>
          {/* leads user to the sign up page */}
          <div className="submit-button">
            <a onClick={() => navigate("/SignUp")}>Sign up</a>
          </div>
        </div>
        {/* leads user to the reset password page */}
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
