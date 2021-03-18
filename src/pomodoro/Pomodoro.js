import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import { secondsToDuration } from "../utils/duration";
import Title from "./Title.js";
import TimerCount from "./TimerCount.js";
import ProgressBar from "./ProgressBar.js";

function Pomodoro() {
  const initialTimerState = {
    play: false,
    pause: false,
    stop: true,
  };

  const [timerState, setTimerState] = useState(initialTimerState);
  const [onBreak, setOnBreak] = useState(false);
  const [focusDuration, setFocusDuration] = useState(1500);
  const [breakDuration, setBreakDuration] = useState(300);
  const [remainingTime, setRemainingTime] = useState(focusDuration);
  const [progressPercent, setProgressPercent] = useState(0);

  // PLAY settings
  function playTimer() {
    setTimerState({
      play: true,
      pause: false,
      stop: false,
    });
  }

  // PAUSE settings
  function pauseTimer() {
    setTimerState({
      play: false,
      pause: true,
      stop: false,
    });
  }

  // STOP settings
  function stopTimer() {
    setTimerState(initialTimerState);
    setOnBreak(false);
    setProgressPercent(0);
    setRemainingTime(focusDuration);
  }

  // Runs on 1-second interval: decreases remainingTime and increases progressPercent
  // Calls swapTimers function when time reaches zero
  useInterval(
    () => {
      if (remainingTime === 0) {
        swapTimers();
      } else {
        setRemainingTime((prevState) => prevState - 1);
        findProgressPercent();
      }
    },
    timerState.play ? 1000 : null
  );

  // Plays audio at the end of each timer
  // Then swaps between focus and break timers
  function swapTimers() {
    const audio = new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`);
    audio.play();
    if (!onBreak) {
      setRemainingTime(breakDuration);
    } else {
      setRemainingTime(focusDuration);
    }
    setOnBreak((prevState) => !prevState);
    setProgressPercent(0);
  }

  // Calculates what percentage of timer is complete
  function findProgressPercent() {
    if (onBreak) {
      const percent = Math.round(
        ((breakDuration - remainingTime) * 100) / breakDuration
      );
      setProgressPercent(percent);
    } else {
      const percent = Math.round(
        ((focusDuration - remainingTime) * 100) / focusDuration
      );
      setProgressPercent(percent);
    }
  }

  // Play/pause button handler
  function handlePlayPauseClick() {
    if (timerState.play) {
      pauseTimer();
    } else if (timerState.pause) {
      playTimer();
    } else if (timerState.stop) {
      playTimer();
      if (onBreak) {
        setRemainingTime(breakDuration);
      } else {
        setRemainingTime(focusDuration);
      }
    }
  }

  // Plus/minus button handler for duration values
  function handleDurationClick(seconds) {
    return Math.abs(seconds) > 60
      ? setFocusDuration((prevState) => prevState + seconds)
      : setBreakDuration((prevState) => prevState + seconds);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {secondsToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              {/* FOCUS DURATION MINUS BUTTON */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={() => handleDurationClick(-300)}
                // Disabled when timer is set to play, and value is set to 5 minutes
                disabled={timerState.play || focusDuration === 300}
              >
                <span className="oi oi-minus" />
              </button>
              {/* FOCUS DURATION PLUS BUTTON */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={() => handleDurationClick(300)}
                // Disabled when timer is set to play, and value is set to 60 minutes
                disabled={timerState.play || focusDuration === 3600}
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
                Break Duration: {secondsToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                {/* BREAK DURATION MINUS BUTTON */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={() => handleDurationClick(-60)}
                  // Disabled when timer is set to play, and value is set to 1 minute
                  disabled={timerState.play || breakDuration === 60}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* BREAK DURATION PLUS BUTTON */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={() => handleDurationClick(60)}
                  // Disabled when timer is set to play, and value is set to 15 minutes
                  disabled={timerState.play || breakDuration === 900}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            {/* PLAY/PAUSE BUTTON */}
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={handlePlayPauseClick}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !timerState.play,
                  "oi-media-pause": timerState.play,
                })}
              />
            </button>
            {/* STOP BUTTON */}
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              disabled={!timerState.play}
              onClick={stopTimer}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      {/* Following three elements hidden when timer is stopped */}
      <div>
        <div className="row mb-2">
          <div className="col">
            {/* Timer Title : alternates between Focusing and On Break */}
            <Title
              timerState={timerState}
              onBreak={onBreak}
              focusDuration={focusDuration}
              breakDuration={breakDuration}
            />
            {/* Timer Count : counts down remaining time */}
            <TimerCount timerState={timerState} remainingTime={remainingTime} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            {/* Progress Bar : displays progress percentage as visual bar */}
            <ProgressBar
              timerState={timerState}
              progressPercent={progressPercent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
