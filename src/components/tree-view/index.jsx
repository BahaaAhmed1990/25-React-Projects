import React from "react";
import ListItems from "./ListItems";
import "./styles.css";
export default function TreeView({ menu = [] }) {
  //   console.log(menu);

  return (
    <div className="tree-view-container">
      <ListItems menu={menu} />
    </div>
  );
}
