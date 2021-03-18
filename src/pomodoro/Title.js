import React from "react";
import { secondsToDuration } from "../utils/duration";

// Title hidden when timer is stopped
// Alternates between Focusing and On Break, depending on session

function Title(props) {
  const { timerState, onBreak, breakDuration, focusDuration } = props;
  if (!timerState.stop) {
    if (onBreak) {
      return (
        <h2 data-testid="session-title">
          On Break for {secondsToDuration(breakDuration)} minutes
        </h2>
      );
    } else {
      return (
        <h2 data-testid="session-title">
          Focusing for {secondsToDuration(focusDuration)} minutes
        </h2>
      );
    }
  } else {
    return null;
  }
}

export default Title;
