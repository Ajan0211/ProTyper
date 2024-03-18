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
    const { item } = props;

    return (
      <>
        <div className="shop-container">
          {item.name}

          <div className="total-container">
            {item.type == "coin"
              ? `£${item.price}`
              : `${item.price * item.quantity} coins`}
          </div>
        </div>
      </>
    );
  };

export default BagItem;
