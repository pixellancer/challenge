import React, { useEffect, useState, useRef } from "react";
import { List } from "./List";
import { getUsers } from "../APIs/APIs";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const categories = useRef([]);
  useEffect(() => getUsers().then((data) => setUsers(data)), []);
  useEffect(() => {
    if (users[0] !== undefined) {
      categories.current = Object.keys(users[0]);
    }
  }, [users]);
  return (
    <div className="userInfo">
      <h1 className="userInfo__header">All Users</h1>
      <h4 className="userInfo__subHeader">User and their age</h4>
      <List categories={categories.current} items={users}></List>
    </div>
  );
};
