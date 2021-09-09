import React from "react";
import { List } from "./List";

export const Demographic = () => {
  return (
    <div className='ageDemographic'>
      <h1 className="ageDemographic__header">All Users</h1>
      <select id="ageDemographic__options">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="vw">VW</option>
        <option value="audi" selected>
          Audi
        </option>
      </select>

      <List></List>
    </div>
  );
};
