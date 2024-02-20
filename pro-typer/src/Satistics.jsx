import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./Statistics.css";

function Statistics() {
  return (
    <>
      <Navbar></Navbar>
      <div className="ownedItems-page">
        <div className="container-ownedItems">
          <AccountNav></AccountNav>

          <div className="button-container2">
            <div className="change-button">Change skin</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
