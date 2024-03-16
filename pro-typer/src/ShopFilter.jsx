import React from "react";

const ShopFilter = (props) => {
  const { typeFilter, setTypeFilter } = props;
  return (
    <div className="navbar2">
      <div className="shopnav-item1">
        <a
          className={typeFilter == "skin" ? `active` : ""}
          onClick={() =>
            setTypeFilter((state) => {
              if (state == "skin") {
                return "";
              }
              return "skin";
            })
          }
        >
          Skins
        </a>
      </div>
      <div className="shopnav-item1">
        <a
          className={typeFilter == "theme" ? `active` : ""}
          onClick={() =>
            setTypeFilter((state) => {
              if (state == "theme") {
                return "";
              }
              return "theme";
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
