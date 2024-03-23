import { useContext } from "react";
import Navbar from "../../Navbar.jsx";
import AccountNav from "./AccountNav.jsx";
import "./OwnedItems.css";
import { UserContext } from "./userContext.jsx";
import { ThemeContext } from "./themeContext.jsx";
import { useNavigate } from "react-router-dom";

function OwnedItems() {
  const { user } = useContext(UserContext);
  const { currentSkin, setCurrentSkin } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="ownedItems-page">
        <div className="container-ownedItems">
          <AccountNav></AccountNav>
          <div className="item-section">Skins:</div>
          <div className="owned-items-list">
            {user?.items
              ? user.items
                  .filter((item) => item.type == "skin")
                  .map((item, index) => {
                    return (
                      <div
                        key={`owned-item-${index}`}
                        className={`owned-item ${
                          currentSkin == item ? "active" : ""
                        }`}
                        onClick={() => {
                          setCurrentSkin(item);
                        }}
                      >
                        <img
                          className="Owned-items-image"
                          src={item.image}
                          alt=""
                        />
                        {item.name}
                      </div>
                    );
                  })
              : "No items found..."}
          </div>
          <div className="item-section">Themes:</div>
          <div className="owned-items-list">
            {user?.items
              ? user.items
                  .filter((item) => item.type == "theme")
                  .map((item, index) => {
                    return (
                      <div
                        key={`owned-item-theme-${index}`}
                        className={`owned-item ${
                          currentSkin == item ? "active" : ""
                        }`}
                        onClick={() => {
                          // setCurrentSkin(item);
                        }}
                      >
                        <img
                          className="Owned-items-image theme-image"
                          src={item.image}
                          alt=""
                        />
                        {item.name}
                      </div>
                    );
                  })
              : "No items found..."}
          </div>
          <div className="button-container2">
            <div className="change-button" onClick={() => navigate("/Game")}>
              Head to Game
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnedItems;
