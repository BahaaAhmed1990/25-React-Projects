import React from "react";

export default function Moves({ history, onJumpTo }) {
  return (
    <ol>
      {history.map((_, move) => {
        let description;
        if (move > 0) {
          description = `Go To Move ${move}`;
        } else {
          description = `Go To First Move`;
        }
        return (
          <li key={move}>
            <button onClick={() => onJumpTo(move)}>{description}</button>
          </li>
        );
      })}
    </ol>
  );
}
