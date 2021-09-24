import { useState, useEffect } from 'react';

export const useTimer = (startTimer: boolean, time: number) => {
  const [count, setCount] = useState(time);

  useEffect(() => {
    if (startTimer) {
      const timeLeft = setInterval(() => {
        setCount((c) => c - 1);
      }, 1000);
      return () => clearInterval(timeLeft);
    } else {
      setCount(time);
    }
  }, [startTimer]);

  return count;
};
