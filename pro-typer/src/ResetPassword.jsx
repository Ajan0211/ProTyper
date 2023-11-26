import Navbar from "../../Navbar.jsx";
import "./ResetPassword.css";

function ResetPassword() {
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
          <i class="fa-solid fa-envelope"></i>
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
