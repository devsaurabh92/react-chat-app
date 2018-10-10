import React from "react";
import "./Sidebar.css";
import User from "../containers/User";

const Sidebar = ({ contacts }) => {
  //console.log(contacts);
  return (
    <aside className="Sidebar">
      {contacts.map((contact,index) => <User user={contact} key={index} />)}
    </aside>
  );
};

export default Sidebar;