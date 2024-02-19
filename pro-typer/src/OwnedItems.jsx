import Navbar from "../../Navbar.jsx";
import "./OwndedItems.css";

function OwnedItems() {
  return (
    <>
      <Navbar></Navbar>
      <div className="ownedItems-page">
        <div className="container-ownedItems">
          <div className="heading-ownedItems">Owned Items</div>
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
          <div className="button-container2">
            <div className="change-button">Change skin</div>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default OwnedItems;
