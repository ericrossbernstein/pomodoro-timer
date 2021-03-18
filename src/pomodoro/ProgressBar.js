import React from "react";

// Progress Bar hidden when timer is stopped

function ProgressBar(props) {
  const { timerState, progressPercent } = props;
  return (
    !timerState.stop && (
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progressPercent}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    )
  );
}

export default ProgressBar;
