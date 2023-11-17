import Navbar from "./pro-typer/src/navbar";

import "./Login.css";

function Login() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-login">
        <div className="heading">Login</div>
        <div className="input">
          <input
            type="username"
            id="uernamename"
            name="username"
            placeholder="Username..."
          ></input>
        </div>

        <div className="input">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password..."
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
