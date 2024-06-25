import React from "react";
import MenuItem from "./MenuItem";
export default function ListItems({ menu }) {
  console.log(menu);
  return (
    <ul className="tree-list">
      {menu &&
        menu.map((menu, index) => <MenuItem segment={menu} key={index} />)}
    </ul>
  );
}
