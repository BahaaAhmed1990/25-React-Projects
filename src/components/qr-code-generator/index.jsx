import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleClick() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleClick}
        >
          Generate Code
        </button>
      </div>
      <div>
        <QRCode value={qrCode} size={200} bgColor="#fff" />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
