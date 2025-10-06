import React from 'react';

export default function Square({ value, onClick, disabled }) {
  const cls = `square ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''}`;
  return (
    <button 
      className={cls}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Square ${value || 'empty'}`}
    >
      {value}
    </button>
  );
}
