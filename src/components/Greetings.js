import { useSelector } from 'react-redux';
import React from 'react';

const Greeting = () => {
  const greetings = useSelector((state) => state.home.data);

  if (greetings) {
    return (
      <div>
        <h1>{greetings.message}</h1>
      </div>
    );
  }
  return '';
};

export default Greeting;
