import { useRef, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    // console.log("start");
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    // console.log("stop");
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    // console.log("reset");
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(time / 60)}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <>
      <div>{formatTime(time)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default StopWatch;
