import React from "react";
import './ListStyle.css'

// export const List = ({categories, items}) => {
export const List = () => {
  const categories = [111, 222];
  const items = [
    {
      username: "Rita",
      age: 12,
    },
    {
      username: "Rita",
      age: 122,
    },
    {
      username: "Rita",
      age: 132,
    },
  ];
  return (
    <div className='listSection'>
      <section className="listSection__category">
        {categories.map((item,i) => (
            <span key={i} className="category__name">
            item
          </span>
        ))}
      </section>
      <section className="listSection__listItems">
        {items.map((item,i) => (
          <div  key={i} className='listItems__itemRow'>
            {Object.values(item).map((value,i) => (
              <span key={i} className='itemRow__itemDetail'>{value}</span>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};
