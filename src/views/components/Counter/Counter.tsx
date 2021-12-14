import React from 'react';

export interface CounterProps {
}

const Counter:React.VFC<CounterProps> = (props) => {
  const [count, setCount] = React.useState<number>(0);

  const incrementCounter = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>counter at: {count}</h1>
      <button
        onClick={() => incrementCounter()}
      >
        button
      </button>
      <a href='/canvas'>canvas-link</a>
    </div>
  );
}

export default Counter;