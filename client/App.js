import { forEach } from "lodash";
import React from "react";
import reactIcon from "../public/favicon.png";
import { Users } from "./components/Users";
import { Demographic } from "./components/Demographic";

export default function App() {

    const getRequest = () => {
        return fetch("http://localhost:3000/users", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    }

  return (
    <div>
          <Users></Users>
          <Demographic></Demographic>
          <img src={reactIcon} />
          {/* <button onClick={getRequest}>requests</button> */}
    </div>
  );
}
