import ShopNav from "./ShopNav.jsx";
import "./Shop.css";

function Shop() {
  return (
    <>
      <ShopNav></ShopNav>
      <div className="page-container">
        <div className="box-container">box 1</div>
        <div className="box-container">box 2</div>
        <div className="box-container">box 3</div>
        <div className="box-container">box 4</div>
      </div>
    </>
  );
}

export default Shop;
