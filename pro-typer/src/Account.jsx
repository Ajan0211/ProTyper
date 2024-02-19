import Navbar from "../../Navbar.jsx";
import "./Account.css";

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
  return (
    <>
      <Navbar></Navbar>
      <div className="account-page">
        <div className="container-account">
          <div className="heading-account">My Account</div>
          <div className="account-nav">
            <div className="nav-left">
              <div className="nav-item1">
                <a onClick={() => navigate("/Account")}>Update Details</a>
              </div>
              <div className="nav-item1">
                <a onClick={() => navigate("/Owned-Items")}>Owned Items</a>
              </div>
              <div className="nav-item1">
                <a onClick={() => navigate("/Statistics")}>Statistics</a>
              </div>
            </div>
          </div>
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
          <div className="button-container2">
            <div className="change-button">Make Changes</div>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default Account;
