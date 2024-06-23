import { useState } from "react";
import Board from "./Board";
import Moves from "./Moves";
import "./styles.css";

export default function TicTacToe() {
  const [histoy, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = histoy[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...histoy.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleJumpTo(move) {
    setCurrentMove(move);
  }
  return (
    <div>
      <div className="board">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <Moves history={histoy} onJumpTo={handleJumpTo} />
      </div>
    </div>
  );
}
