import React from 'react';
import Square from './Square';

export default function Board({ squares, onPlay, disabled }) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {squares.map((val, idx) => (
        <Square
          key={idx}
          value={val}
          onClick={() => onPlay(idx)}
          disabled={disabled || !!val}
        />
      ))}
    </div>
  );
}
