import React from "react";
import { secondsToDuration } from "../utils/duration";

// Count hidden when timer is stopped

function TimerCount(props) {
  const { timerState, remainingTime } = props;
  return (
    !timerState.stop && (
      <p className="lead" data-testid="session-sub-title">
        {secondsToDuration(remainingTime)} remaining
      </p>
    )
  );
}

export default TimerCount;
