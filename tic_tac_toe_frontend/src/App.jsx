import React, { useMemo, useState } from 'react';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import { calculateWinner, isBoardFull } from './utils/game';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, Draw: 0 });

  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const draw = useMemo(() => !winner && isBoardFull(squares), [winner, squares]);
  const currentPlayer = xIsNext ? 'X' : 'O';

  function handlePlay(index) {
    if (squares[index] || winner) return;
    const next = squares.slice();
    next[index] = currentPlayer;
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function handleRestart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function handleNewRound() {
    if (winner) {
      setScores(prev => ({ ...prev, [winner]: prev[winner] + 1 }));
    } else if (draw) {
      setScores(prev => ({ ...prev, Draw: prev.Draw + 1 }));
    }
    handleRestart();
  }

  const status = winner ? `Winner: ${winner}` : draw ? 'Draw' : `Turn: ${currentPlayer}`;

  return (
    <div className="app">
      <div className="card" role="region" aria-label="Tic Tac Toe Game">
        <div className="header">
          <h1 className="title">Tic Tac Toe</h1>
          <div className="status" aria-live="polite">{status}</div>
        </div>
        <Scoreboard scores={scores} />
        <Board squares={squares} onPlay={handlePlay} disabled={!!winner} />
        <div className="controls">
          <button 
            className="btn" 
            onClick={handleRestart}
            aria-label="Restart current round"
          >
            Restart
          </button>
          <button 
            className="btn secondary" 
            onClick={handleNewRound}
            aria-label="Start new round and tally score"
          >
            New Round
          </button>
        </div>
      </div>
    </div>
  );
}
