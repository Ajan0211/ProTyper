import Navbar from "../../Navbar.jsx";
import "./Account.css";
import { useNavigate } from "react-router-dom";
import AccountNav from "./AccountNav.jsx";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("/api/account-changes", {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(response.data.message);
        } else {
          if (email) {
            toast.success("Changes saved! You must log back in again");
          } else {
            toast.success("Changes saved!");
          }
        }
      })
      .catch((err) => console.log(err));
  };
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="button-container2">
            <div onClick={handleSubmit} className="change-button">
              Make Changes
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
