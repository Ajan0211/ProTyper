import "./AccountNav.css";
import { useNavigate } from "react-router-dom";

function AccountNav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="accountNav">
        <div className="heading-accountNav">My ProTyper Account</div>

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
