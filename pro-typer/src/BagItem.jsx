import React from "react";
import { useContext } from "react";
import { BagContext } from "./BagContext.jsx";
const BagItem =
  /**
 * @author Ajanthapan Agilaruben

 * This file hold the bag item component which is used in the bag component and this holds the items with the 
 *  cost of the item of this specicific item with a trash icon as well.
 * @date 30/3/2024 - 11:32:31 AM
 *
 * @param {props which is item} 
 * @returns {item , item.price and removeFromBag}
 */

  (props) => {
    const { item } = props;
    const { bag, removeFromBag } = useContext(BagContext);
    return (
      <>
        <div className="shop-container">
          {/* Shows selected items name */}
          {item.name}
          <div className="total-container">
            {/* gets the item.price of the item selected */}
            {item.type == "coin"
              ? `£${item.price}`
              : `${item.price * item.quantity} coins`}
          </div>{" "}
          {/* when users clicks on trash icon it would remove it from the bag */}
          <i
            onClick={() => removeFromBag(item)}
            className="fa-solid fa-trash"
          ></i>
        </div>
      </>
    );
  };

export default BagItem;
