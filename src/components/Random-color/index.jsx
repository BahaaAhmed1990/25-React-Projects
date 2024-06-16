import { useEffect, useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function randomNumUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleHexColor() {
    let hexColorsAlphapet = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
      "A",
      "B",
      "C",
      "D",
      "E",
    ];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexColorsAlphapet[randomNumUtility(hexColorsAlphapet.length)];
    }
    console.log(color);
    setColor(color);
  }
  function handleRgbColor() {
    const r = randomNumUtility(256);
    const g = randomNumUtility(256);
    const b = randomNumUtility(256);
    let color = `rgb(${r},${g},${b})`;
    console.log(color);
    setColor(color);
  }
  useEffect(() => {
    typeOfColor === "hex" ? handleHexColor() : handleRgbColor();
  }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        background: color,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button
          onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}
        >
          generate color
        </button>
        <button onClick={() => setTypeOfColor("rgb")}>generate rgb</button>
        <button onClick={() => setTypeOfColor("hex")}>generate hex</button>
      </div>
      <div>
        <h3
          style={{
            fontSize: "32px",
          }}
        >
          {typeOfColor === "hex" ? "HEX" : "RGB"}
        </h3>
        <h6
          style={{
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          {color}
        </h6>
      </div>
    </div>
  );
}
