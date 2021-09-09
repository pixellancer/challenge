import React from "react";
import "./ListStyle.css";

export const List = ({ categories, items }) => {
  return (
    <div className="listSection">
      {/* {categories ? ( */}
        <section className="listSection__category">
          {categories.map((item, index) => (
            <span key={index} className="category__name">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}
        </section>
      {/* ) : (
        <></>
      )} */}
      {/* {items ? ( */}
        <section className="listSection__listItems">
          {items.map((item, index) => (
            <div key={index} className="listItems__itemRow">
              {Object.values(item).map((value, index) => (
                <span key={index} className="itemRow__itemDetail">
                  {value}
                </span>
              ))}
            </div>
          ))}
        </section>
      {/* ) : (
        <></>
      )} */}
    </div>
  );
};
