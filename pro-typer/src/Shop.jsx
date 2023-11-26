import ShopNav from "./ShopNav.jsx";
import "./Shop.css";

function Shop() {
  return (
    <>
      <ShopNav></ShopNav>
      <div className="page-container">
        <div className="box-container">
          item 1<div className="image-container"></div>
          <div className="price-container">
            $$$$
            <div className="Add-button">Add to Bag</div>
          </div>
        </div>
        <div className="box-container">box 2</div>
        <div className="box-container">box 3</div>
        <div className="box-container">box 4</div>
      </div>
      <div className="page-container">
        <div className="box-container">box 5</div>
        <div className="box-container">box 6</div>
        <div className="box-container">box 7</div>
        <div className="box-container">box 8</div>
      </div>
      <div className="page-container">
        <div className="box-container">box 9</div>
        <div className="box-container">box 10</div>
        <div className="box-container">box 11</div>
        <div className="box-container">box 12</div>
      </div>
    </>
  );
}

export default Shop;
