import React, { useState } from "react";
import ListItems from "./ListItems";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function ({ segment }) {
  //   console.log(segment);
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleClick(getLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getLabel]: !displayCurrentChildren[getLabel],
    });
  }
  return (
    <>
      <li onClick={() => handleClick(segment.label)} className="tree-label">
        <p>{segment.label}</p>{" "}
        {segment.children ? (
          <span>
            {displayCurrentChildren[segment.label] ? (
              <FaMinus size={25} color="#fff" />
            ) : (
              <FaPlus size={25} color="#fff" />
            )}
          </span>
        ) : null}
      </li>
      <div>
        {segment.children &&
        segment.children.length > 0 &&
        displayCurrentChildren[segment.label] ? (
          <ListItems menu={segment.children} />
        ) : (
          console.log(null)
        )}
      </div>
    </>
  );
}
