import React from "react";

function Paused(props) {
  const { timerState } = props;
  return timerState.pause && <h3>PAUSED</h3>;
}

export default Paused;
