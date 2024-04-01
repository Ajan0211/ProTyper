/**
 * @author Ajanthapan Agilaruben
 * This file contains the component that filters the items in the shop by either skins or themes.
 * @date 1/4/2024 - 12:41:35 PM
 * @param {typeFilter, setTypeFilter}
 * @returns {ShopFilter component.}
 */

import React from "react";

const ShopFilter = (props) => {
  const { typeFilter, setTypeFilter } = props;
  return (
    <div className="navbar2">
      <div className="shopnav-item1">
        <a
          className={typeFilter == "skin" ? `active` : ""} // Highlights if skin is the current filter.
          onClick={() =>
            setTypeFilter((state) => {
              if (state == "skin") {
                // it filters for skin
                return ""; // it removes the filter if its already set
              }
              return "skin"; // Sets the filter to skin
            })
          }
        >
          Skins
        </a>
      </div>
      <div className="shopnav-item1">
        <a
          className={typeFilter == "theme" ? `active` : ""} // Highlights if theme is the current filter.
          onClick={() =>
            setTypeFilter((state) => {
              if (state == "theme") {
                // it filters for theme
                return ""; // Remove filter if already set
              }
              return "theme"; // // sets the filter to theme
            })
          }
        >
          Themes
        </a>
      </div>
    </div>
  );
};

export default ShopFilter;
