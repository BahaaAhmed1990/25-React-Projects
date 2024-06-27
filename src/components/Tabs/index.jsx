import React from "react";
import Tabs from "./Tabs";

export default function TabsParent() {
  const content = [
    {
      label: "Tab-1",
      content: "lorem ipsum.content for tab one",
    },
    {
      label: "Tab-2",
      content: "lorem ipsum.content for tab two",
    },
    {
      label: "Tab-3",
      content: "lorem ipsum.content for tab three",
    },
  ];

  function handleChange(getCurrentIndex) {
    console.log(getCurrentIndex);
  }
  return (
    <div>
      <Tabs content={content} onChange={handleChange} />
    </div>
  );
}
