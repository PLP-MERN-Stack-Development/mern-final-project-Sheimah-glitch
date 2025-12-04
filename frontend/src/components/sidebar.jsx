import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div style={{ width: "200px", float: "left", padding: "10px", borderRight: "1px solid #ccc" }}>
      {children}
    </div>
  );
};

export default Sidebar;
