import React from 'react';
import './styles/Button.css';

const Button = ({ text, type, event, muted }) => {
  return (
    <>
      <button
        className={`btn ${muted ? 'muted' : ''}`}
        type={type}
        onClick={event}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
