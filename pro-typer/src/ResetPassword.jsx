import Navbar from "../../Navbar.jsx";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";

/**
 * @author Ajanthapan Agilaruben
 * This file is used for the user to reset there password if they have forgotten it.
 * @date 12/5/2023 - 11:33:27 AM
 *
 * @returns {Navbar component as well as instructions on what to do to reset password.}
 */
function ResetPassword() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="container-resetpassword">
        <div className="heading-resetpassword">Reset Password</div>
        <div className="reset-instructions">
          Enter your email to receive a password reset link. Note: The link will
          be sent only if there is an account associated with the provided email
          on Protyper.
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
        <div className="continue-button">
          <a onClick={() => navigate("/Login")}>Continue</a>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
