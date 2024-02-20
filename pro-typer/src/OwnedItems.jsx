import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./OwnedItems.css";

function OwnedItems() {
  return (
    <>
      <Navbar></Navbar>
      <div className="ownedItems-page">
        <div className="container-ownedItems">
          <AccountNav></AccountNav>
          <div className="item-section">Skins:</div>
          <div className="button-container2">
            <div className="change-button">Change skin</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnedItems;
