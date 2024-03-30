/**
 * @author Ajanthapan Agilaruben
 * This File contains the Account Navbar component which allows the user to change from update details, skins, themes
 *  and statistics within the Account page.
 *
 * @date 30/3/2024 - 17:28:28 PM
 *
 * @returns the AccountNav Component
 */

import { useContext } from "react";
import "./AccountNav.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "./userContext";

function AccountNav() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="accountNav">
        {/* if the user is logged in it would say there name in the account nav bar if not it will be ProTyper Account */}
        <div className="heading-accountNav">
          {user
            ? user.firstname + " " + user.lastname + "'s Account"
            : "My ProTyper Account"}
        </div>

        <div className="Accountnav-links">
          <div className="nav-item1">
            {/* Send user to Update Details page */}
            <NavLink activeClassName="active" to="/Account">
              Update Details
            </NavLink>
          </div>
          <div className="nav-item1">
            {/* Send user to Skins page */}
            <NavLink activeClassName="active" to="/Skins">
              Skins
            </NavLink>
          </div>
          <div className="nav-item1">
            {/* Send user to Themes page */}
            <NavLink activeClassName="active" to="/Themes">
              Themes
            </NavLink>
          </div>
          <div className="nav-item1">
            {/* Send user to Statistics page */}
            <NavLink activeClassName="active" to="/Statistics">
              Statistics
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountNav;
