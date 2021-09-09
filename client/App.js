import React from "react";
import reactIcon from "../public/favicon.png";
import { Users } from "./components/Users";
import { Demographic } from "./components/Demographic";

export default function App() {
  return (
    <div>
      <Users></Users>
      <Demographic></Demographic>
      <img src={reactIcon} />
    </div>
  );
}
