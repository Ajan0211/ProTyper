import { useContext } from "react";
import "./AccountNav.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";

function AccountNav() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="accountNav">
        <div className="heading-accountNav">
          {user
            ? user.firstname + " " + user.lastname + "'s Account"
            : "My ProTyper Account"}
        </div>

        <div className="Accountnav-left">
          <div className="nav-item1">
            <a onClick={() => navigate("/Account")}>Update Details</a>
          </div>
          <div className="nav-item1">
            <a onClick={() => navigate("/OwnedItems")}>Owned Items</a>
          </div>
          <div className="nav-item1">
            <a onClick={() => navigate("/Statistics")}>Statistics</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountNav;
