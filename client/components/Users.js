import React, { useEffect, useState, useRef } from "react";
import "./UsersStyle.css";
import { List } from "./List";
import { getUsers } from "../APIs/APIs";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(
    () =>
      getUsers().then((data) => {
        setUsers(data);
        setCategories(Object.keys(data[0]));
        setLoading(false);
      }),
    []
  );

  return (
    <div className="userInfo">
      <header>
        <h1 className="userInfo__header">All Users</h1>
        <h4 className="userInfo__subHeader">User and their age</h4>
      </header>
      <section className="userInfo__details">
        {loading ? (
          <h1 className="userInfo__loading">Loading users ...</h1>
        ) : (
          <List categories={categories} items={users}></List>
        )}
      </section>
    </div>
  );
};
