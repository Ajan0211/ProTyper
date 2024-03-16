import { useContext } from "react";
import "./AccountNav.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "./userContext";

function AccountNav() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="accountNav">
        <div className="heading-accountNav">
          {user
            ? user.firstname + " " + user.lastname + "'s Account"
            : "My ProTyper Account"}
        </div>

        <div className="Accountnav-links">
          <div className="nav-item1">
            <NavLink activeClassName="active" to="/Account">
              Update Details
            </NavLink>
          </div>
          <div className="nav-item1">
            <NavLink activeClassName="active" to="/OwnedItems">
              Owned Items
            </NavLink>
          </div>
          <div className="nav-item1">
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
