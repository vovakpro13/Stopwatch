import React, { useState, useEffect } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import { Time } from './types/Time'
import './App.scss';



const App: React.FC = () => {
  const [time, setTime] = useState<Time>({hours: 0, minutes: 0, seconds: 0});
  const [, setMs] = useState<number>(new Date().getTime());
  const [runTime, setRunTime] = useState<boolean>(false);

  useEffect(() => {
    let timer: any;

    if (runTime) {
      timer = setInterval(() => {
        setTime(({ hours, minutes, seconds }) => {
          return {hours, minutes, seconds: seconds + 1}
        })
      }, 1000)
    } else {
        clearInterval(timer)
    }

    return () =>  clearInterval(timer)
  }, [runTime]);

  useEffect(() => {
    const { minutes, seconds} = time;

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
  }, [time])

  const pause = () => setMs((prevValue) => {
    const curentValue = new Date().getTime();

    if ((curentValue - prevValue) < 300) {
      setRunTime(false)
    }

    return new Date().getTime()
  })

  return (
    <>
      <h1 className="tittle">React Stopwatch</h1>

      <div className="stop-watch">
        <Display time={time}/>
        <Buttons
          setRunTime={setRunTime}
          setTime={setTime}
          runTime={runTime}
          pause={pause}
        />
      </div>
    </>
    
  );
}

export default App;
