import Navbar from "./pro-typer/src/navbar";

import "./Login.css";

function Login() {
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
          <div className="submit-button">Login</div>
          <div className="submit-button">Sign up</div>
        </div>
        <div className="forgot-password">Forgot your password?</div>
      </div>
    </>
  );
}

export default Login;
