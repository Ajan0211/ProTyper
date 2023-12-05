import React from "react";

const BagItem =
  /**
 * @author Ajanthapan Agilaruben

 * This file hold the bag item component which is used in the bag component and this holds the items with the 
 * number of quantity the user has bought of this specicific item.
 * @date 12/5/2023 - 11:32:31 AM
 *
 * @param {props which are priceIndex and priceList} 
 * @returns {item and number of quantity.}
 */
  (props) => {
    const { priceIndex, priceList } = props;

    return (
      <>
        <div className="shop-container">
          item1
          <div className="quantity">
            <i className="fa-solid fa-minus"></i>
            <div className="quantity-num">1</div>
            <i className="fa-solid fa-plus"></i>
          </div>
          <div className="total-container">{priceList[priceIndex]}</div>
        </div>
      </>
    );
  };

export default BagItem;
