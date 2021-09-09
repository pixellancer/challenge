import React from "react";
import reactIcon from "../public/favicon.png";
import { Users } from "./components/Users";
import { Demographic } from "./components/Demographic";
import { useState, useEffect } from "react";
import { getUsers, getItems, getListOfAgesOfUsersWith } from "./APIs/APIs";

export default function App() {
  const check = () => {
    console.log(state);
  };
  const [state, setstate] = useState([]);
  useEffect(() => getListOfAgesOfUsersWith().then((data) => setstate(data)), []);

  return (
    <div>
      <Users></Users>
      <Demographic></Demographic>
      <img src={reactIcon} />
      <button onClick={check}>show</button>
      <button onClick={getItems}>requests</button>
    </div>
  );
}
