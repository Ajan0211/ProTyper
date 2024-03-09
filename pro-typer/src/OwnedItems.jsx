import { useContext } from "react";
import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./OwnedItems.css";
import { UserContext } from "./userContext.jsx";

function OwnedItems() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar></Navbar>
      <div className="ownedItems-page">
        <div className="container-ownedItems">
          <AccountNav></AccountNav>
          <div className="item-section">Skins:</div>
          <div className="owned-items-list">
            {user?.items
              ? user.items.map((item, index) => {
                  return (
                    <div key={`owned-item-${index}`} className="owned-item">
                      {item.name}
                    </div>
                  );
                })
              : "No items found..."}
          </div>
          <div className="button-container2">
            <div className="change-button">Change skin</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnedItems;
