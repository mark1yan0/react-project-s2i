import React from 'react';
import './styles/Button.css';

const Button = ({ text, type, event }) => {
  return (
    <>
      <button className='btn' type={type} onClick={event}>
        {text}
      </button>
    </>
  );
};

export default Button;
