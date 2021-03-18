import React from "react";
import { secondsToDuration } from "../utils/duration";

function Duration(props) {
  const {
    isTimerRunning,
    focusDuration,
    setFocusDuration,
    breakDuration,
    setBreakDuration,
  } = props;

  function handleDurationClick(seconds) {
    return Math.abs(seconds) > 60
      ? setFocusDuration((prevState) => prevState + seconds)
      : setBreakDuration((prevState) => prevState + seconds);
  }

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {secondsToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={() => handleDurationClick(-300)}
              disabled={isTimerRunning || focusDuration === 300}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={() => handleDurationClick(300)}
              disabled={isTimerRunning || focusDuration === 3600}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* TODO: Update this text to display the current break session duration */}
              Break Duration: {secondsToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={() => handleDurationClick(-60)}
                disabled={isTimerRunning || breakDuration === 60}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={() => handleDurationClick(60)}
                disabled={isTimerRunning || breakDuration === 900}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Duration;
