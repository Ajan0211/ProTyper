import Navbar from "./Navbar.jsx";
import "./SignUp.css";

function SignUp() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-signup">
        <div className="heading-signup">Sign up</div>
        <div className="input">
          <i class="fa-solid fa-user"></i>
          <input
            type="firstname"
            id="fname"
            name="firstname"
            placeholder="Firstname..."
          ></input>
        </div>

        <div className="input">
          <i class="fa-solid fa-user"></i>
          <input
            type="lastname"
            id="lname"
            name="Lastname"
            placeholder="Lastname..."
          ></input>
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
        <div className="input">
          <i class="fa-solid fa-key"></i>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password..."
          ></input>
        </div>
        <div className="button-container2">
          <div className="signup-button">Sign up</div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
