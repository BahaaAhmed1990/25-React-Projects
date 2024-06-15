import React, { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [seleceted, setSelected] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(seleceted === getCurrentId ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    let indexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (indexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(indexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);

    console.log(indexOfCurrentId, cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiple(!enableMultiple);
        }}
      >
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data &&
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="item"
              onClick={
                enableMultiple
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {enableMultiple
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-answer">{dataItem.answer}</div>
                  )
                : seleceted === dataItem.id && (
                    <div className="acc-answer">{dataItem.answer}</div>
                  )}
            </div>
          ))}
      </div>
    </div>
  );
}
