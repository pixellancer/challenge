import { forEach } from "lodash";
import React from "react";
import reactIcon from "../public/favicon.png";
import { List } from "./components/List";

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
          <h1> Hello World testinggooo </h1>
          <List></List>
          <img src={reactIcon} />
          <button onClick={getRequest}>requests</button>
    </div>
  );
}
