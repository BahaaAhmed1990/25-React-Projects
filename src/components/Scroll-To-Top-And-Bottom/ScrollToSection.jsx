import React, { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();
  const data = [
    {
      label: "first div",
      style: {
        width: "100%",
        background: "red",
        height: "700px",
      },
    },
    {
      label: "second div",
      style: {
        width: "100%",
        background: "green",
        height: "700px",
      },
    },
    {
      label: "third div",
      style: {
        width: "100%",
        background: "blue",
        height: "700px",
      },
    },
    {
      label: "fourth div",
      style: {
        width: "100%",
        background: "yellow",
        height: "700px",
      },
    },
    {
      label: "fifth div",
      style: {
        width: "100%",
        background: "pink",
        height: "700px",
      },
    },
  ];
  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1>ScrollToSection</h1>
      <button onClick={handleScrollToSection}>Scroll To</button>
      {data.map((item, index) => (
        <div ref={index === 3 ? ref : null} style={item.style}>
          <h1>{item.label}</h1>
        </div>
      ))}
    </div>
  );
}
