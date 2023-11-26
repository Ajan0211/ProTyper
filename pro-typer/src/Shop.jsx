import ShopNav from "./ShopNav.jsx";
import "./Shop.css";
import ShopItem from "./ShopItem.jsx";

function Shop() {
  return (
    <>
      <ShopNav></ShopNav>
      <div className="page-container">
        <ShopItem name={"item1"} price={"£8.99"} />
        <ShopItem name={"item2"} price={"£7.99"} />
        <ShopItem name={"item3"} price={"£6.99"} />
        <ShopItem name={"item5"} price={"£5.99"} />
        <ShopItem name={"item6"} price={"£8.99"} />
        <ShopItem name={"item7"} price={"£7.99"} />
        <ShopItem name={"item8"} price={"£6.99"} />
        <ShopItem name={"item9"} price={"£5.99"} />
      </div>
    </>
  );
}

export default Shop;
