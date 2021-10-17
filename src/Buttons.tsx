import React from 'react';
import { Time } from './types/Time'

type Props = {
  setRunTime: (value: boolean | ((prevVal: boolean) => boolean)) => void,
  setTime: (value: Time | ((prevVal: Time) => Time)) => void,
  pause: () => void,
  runTime: boolean,
}

const Buttons: React.FC<Props> = ({ setRunTime, setTime, pause, runTime }) => {

  return (
    <div className="stop-watch__buttons">
      {!runTime && (<button
        type="submit"
        className="stop-watch__button stop-watch__start"
        onClick={() => setRunTime(true)}
      >
        Start
      </button>)}

      {runTime && (<button
        type="submit"
        className="stop-watch__button stop-watch__stop"
        onClick={() => {setTime({hours: 0, minutes: 0, seconds: 0}); setRunTime(false)}}
      >
        Stop
      </button>)}

      <button
        type="submit"
        className="stop-watch__button stop-watch__wait"
        onClick={pause}
      >
        Wait
      </button>

      <button
        type="submit"
        className="stop-watch__button stop-watch__reset"
        onClick={() => {setTime({hours: 0, minutes: 0, seconds: 0}); setRunTime(true)}}
      >
        Reset
      </button>
    </div>
  )
}

export default Buttons;
