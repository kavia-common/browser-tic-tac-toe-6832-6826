import React from 'react';

export default function Scoreboard({ scores }) {
  return (
    <div className="scoreboard" aria-label="Scoreboard">
      <div className="score x">X: {scores.X}</div>
      <div className="score draw">Draw: {scores.Draw}</div>
      <div className="score o">O: {scores.O}</div>
    </div>
  );
}
