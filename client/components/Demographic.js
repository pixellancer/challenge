import React, { useEffect, useState, useRef } from "react";
import './DemographicStyle.css'
import { List } from "./List";
import { getItems, getListOfAgesOfUsersWith } from "../APIs/APIs";

export const Demographic = () => {
  const [items, setItems] = useState([]);
  //   const [categories, setCategories] = useState([]);
  const [ageWithCount, setAgeWithCount] = useState("");
  const categories = useRef(undefined);
  useEffect(() => getItems().then((data) => setItems(data)), []);

  const optionsHandler = (e) => {
    const selectedItem = e.target.value;
    getListOfAgesOfUsersWith(selectedItem).then((data) => {
      const ageCountObj = Object.values(data)[0][0];
      categories.current = Object.keys(ageCountObj);
      setAgeWithCount(Object.values(data)[0]);
    });
  };

  return (
    <div className="ageDemographic">
      <h1 className="ageDemographic__header">All Users</h1>
      <select id="ageDemographic__options" onChange={optionsHandler}>
        {items &&
          items.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
          </select>
          {
              (categories.current && ageWithCount) ? (
                  
                  <List categories={categories.current} items={ageWithCount}></List>
              ) : (
                      <></>
              )
          }
      {/* <List categories={categories.current} items={ageWithCount}></List> */}
    </div>
  );
};
