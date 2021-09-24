import { useState, useEffect } from 'react';

export const useTimer = (startTimer: boolean) => {
  // set initial state to be 30s
  const [count, setCount] = useState(30);

  useEffect(() => {
    if (startTimer) {
      const timeLeft = setInterval(() => {
        setCount((c) => c - 1);
      }, 1000);
      return () => clearInterval(timeLeft);
    }
  }, [startTimer]);

  return count;
};
