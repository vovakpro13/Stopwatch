import React from 'react';
import { Time } from './types/Time'

type Props = {
  time: Time,
}

const Display: React.FC<Props> = ({ time }) => {
  const { hours, minutes, seconds } = time;

  return (
    <>
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
    </>
  )
}

export default Display;
