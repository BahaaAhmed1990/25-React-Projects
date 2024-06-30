import { useLayoutEffect, useState } from "react";

export default function useWindowResizeHook() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowDimensions;
}
