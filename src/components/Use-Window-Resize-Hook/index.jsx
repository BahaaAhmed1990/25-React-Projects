import React from "react";
import useWindowResizeHook from "./useWindowResizeHook";

function WindowResizeHook() {
  const windowDimensions = useWindowResizeHook();
  const { width, height } = windowDimensions;
  return (
    <div>
      <h1>WidowResizeHook</h1>
      <p>Width : {width}</p>
      <p>Heigth : {height}</p>
    </div>
  );
}

export default WindowResizeHook;
