import Navbar from "../../Navbar.jsx";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

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
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    axios
      .post("/api/SignUp", {
        firstname,
        lastname,
        email,
        password,
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          navigate("/Login");
        }
      })
      .catch((err) => console.log(err));
  };

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
              onChange={(e) => setFirstname(e.target.value)}
            ></input>
          </div>

          <div className="input">
            <i className="fa-solid fa-user"></i>
            <input
              type="lastname"
              id="lname"
              name="Lastname"
              placeholder="Lastname..."
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </div>

          <div className="input">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email..."
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
          <div className="button-container2">
            <div className="submit-button">
              <a onClick={() => navigate("/Login")}>Login</a>
            </div>
            <div className="signup-button">
              <a onClick={() => handleSubmit()}>Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
