import Navbar from "../../Navbar.jsx";
import "./Account.css";

/**
 * @author Ajanthapan Agilaruben
 * This File contains the Sign up component which allows the user to input there personal information and
 * sign up to ProTyper.
 *
 * @date 12/5/2023 - 13:35:48 PM
 *
 * @returns the SignUp component
 */
function Account() {
  return (
    <>
      <Navbar></Navbar>
      <div className="account-page">
        <div className="container-account">
          <div className="heading-account">My Account</div>
          <div className="change-container">
            <div className="left-container">
              Change first name
              <div className="input-account">
                <i className="fa-solid fa-user"></i>
                <input
                  type="firstname"
                  id="fname"
                  name="firstname"
                  placeholder="Firstname..."
                ></input>
              </div>
              Change last name
              <div className="input-account">
                <i className="fa-solid fa-user"></i>
                <input
                  type="lastname"
                  id="lname"
                  name="Lastname"
                  placeholder="Lastname..."
                ></input>
              </div>
              Change Email
              <div className="input-account">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email..."
                ></input>
              </div>
            </div>
            <div className="right-container">
              Change last name
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="lastname"
                  id="lname"
                  name="Lastname"
                  placeholder="Lastname..."
                ></input>
              </div>
              Change Email
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email..."
                ></input>
              </div>
            </div>
          </div>
          <div className="button-container2">
            <div className="change-button">Make Changes</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
