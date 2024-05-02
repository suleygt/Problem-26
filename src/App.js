import React, { useState, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    intervalRef.current = null;
  };

  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl bg-blue-500 rounded-full p-4'>Stopwatch: {time}s</div>
      <div className='flex justify-between'>
        <button onClick={stopTimer} className='text-white font-bold bg-green-800 rounded-lg p-2'>Stop</button>
        <button onClick={startTimer} className='text-white font-bold bg-green-800 rounded-lg p-2'>Start</button>
        <button onClick={resetTimer} className='text-white font-bold bg-green-800 rounded-lg p-2'>Reset</button>
      </div>
    </div>
  );
}