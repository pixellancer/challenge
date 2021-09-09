import React from "react";
import "./App.css";
import { Users } from "./components/Users";
import { Demographic } from "./components/Demographic";

export default function App() {
  return (
    <div className="container">
      <Users></Users>
      <Demographic></Demographic>
    </div>
  );
}
