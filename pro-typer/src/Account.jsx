import Navbar from "../../Navbar.jsx";
import "./Account.css";
import { useNavigate } from "react-router-dom";
import AccountNav from "./AccountNav.jsx";

/**
 * @author Ajanthapan Agilaruben
 * This File contains the Account component which allows the user to change there personal information and
 * aslo look at there statistics and the current items owned by the user
 *
 * @date 19/2/2024 - 17:28:28 PM
 *
 * @returns the Account component
 */
function Account() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="account-page">
        <div className="container-account">
          <AccountNav></AccountNav>
          <div className="big-container">
            <div className="container-left">
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
            </div>
            <div className="container-right">
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
              Change Password
              <div className="input-account">
                <i className="fa-solid fa-key"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password..."
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
