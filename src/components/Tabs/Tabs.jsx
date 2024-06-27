import React, { useState } from "react";
import "./styles.css";
export default function Tabs({ content, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="tabs-wrapper">
      <div className="tabs-btn">
        {content &&
          content.map((tabItem, index) => (
            <span
              className="tab-label"
              key={tabItem.label}
              onClick={() => handleClick(index)}
              style={currentTabIndex === index ? { background: "green" } : null}
            >
              {tabItem.label}
            </span>
          ))}
      </div>
      <div className="tabs-content">
        {content && content[currentTabIndex]
          ? content[currentTabIndex].content
          : null}
      </div>
    </div>
  );
}
