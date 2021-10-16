import React, { useState, useEffect } from 'react';
import './App.scss';

const App: React.FC = () => {
  const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 57});
  const [ms, setMs] = useState(new Date().getTime());
  const [switchTimer, setSwitchTimer] = useState(false);

  const {hours, minutes, seconds} = time;

  useEffect(() => {
    let timer: any;

    if (switchTimer) {
      timer = setInterval(() => {
        setTime(({ hours, minutes, seconds }) => {
          return {hours, minutes, seconds: seconds + 1}
        })
      }, 1000)
    } else {
        clearInterval(timer)
    }

    return () =>  clearInterval(timer)
  }, [switchTimer]);

  useEffect(() => {
    if (seconds === 60) {
      setTime(({ hours, minutes }) => {
        return {hours, minutes: minutes + 1, seconds: 0}
      })
    }
  
    if (minutes === 60) {
      setTime(({ hours }) => {
        return {hours: hours + 1, minutes: 0, seconds: 0}
      })
    }
  })

  const pause = () => setMs((prevValue) => {
    const curentValue = new Date().getTime();

    if ((curentValue - prevValue) < 300) {
      setSwitchTimer(false)
    }

    return new Date().getTime()
  })

  return (
    <>
      <h1 className="tittle">React Stopwatch</h1>

      <div className="stop-watch">
        <div className="stop-watch__definitions">
          <span className="stop-watch__definition">HH</span>
          <span className="stop-watch__definition">MM</span>
          <span className="stop-watch__definition">SS</span>
        </div>

        <div className="stop-watch__container">
          <div className="stop-watch__number">
            <span className="stop-watch__data">{hours < 10 ? '0' + hours : hours}</span>
          </div>

          <span className="stop-watch__separator">:</span>

          <div className="stop-watch__number">
            <span className="stop-watch__data">{minutes < 10 ? '0' + minutes : minutes}</span>
          </div>

          <span className="stop-watch__separator">:</span>

          <div className="stop-watch__number">
            <span className="stop-watch__data">{seconds < 10 ? '0' + seconds : seconds}</span>
          </div>
        </div>

        <div className="stop-watch__buttons">
          <button
            type="submit"
            className="stop-watch__button"
            onClick={() => setSwitchTimer(true)}
          >
            Start
          </button>

          <button
            type="submit"
            className="stop-watch__button"
            onClick={() => {setTime({hours: 0, minutes: 0, seconds: 0}); setSwitchTimer(false)}}
          >
            Stop
          </button>

          <button
            type="submit"
            className="stop-watch__button"
            onClick={pause}
          >
            Wait
          </button>

          <button
            type="submit"
            className="stop-watch__button"
            onClick={() => setTime({hours: 0, minutes: 0, seconds: 0})}
          >
            Reset
          </button>

        </div>
      </div>
    </>
    
  );
}

export default App;
