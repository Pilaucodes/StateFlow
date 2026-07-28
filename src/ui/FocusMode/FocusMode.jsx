import "./FocusMode.css";
import { useState, useEffect } from "react";

// displays page
function FocusMode({focusSessions,setFocusSessions,
}) {

  // stores number of seconds remaining
const [timeLeft, setTimeLeft] = useState(25 * 60);

// check whether the timer runs
const [isRunning, setIsRunning] = useState(false);
// completed Pomodoro sessions
const [sessionsCompleted, setSessionsCompleted] = useState(0);

// total focusing minutes spent
const [totalFocusTime, setTotalFocusTime] = useState(0);

// synces session  with dashboard
useEffect(() => {
  setSessionsCompleted(focusSessions);
}, [focusSessions]);

  // converts seconds into minutes and seconds
const minutes = Math.floor(timeLeft / 60);

const seconds = timeLeft % 60;

// runs each time the timer starts or stops
useEffect(() => {

  // doesn't starttimer if it isn't running
  if (!isRunning) {
    return;
  }

  // stops when timer is zero
  if (timeLeft === 0) {

    setIsRunning(false);

  // increases completed sessions
setSessionsCompleted((previous) => previous + 1);

// updates dashboard session counter
setFocusSessions((previous) => previous + 1);

// adds completed focus time
setTotalFocusTime((previous) => previous + 25);

    return;
  }

  // count down every second
  const timer = setInterval(() => {

    setTimeLeft((previousTime) => previousTime - 1);

  }, 1000);

  // removes the interval before creating a new one
  return () => clearInterval(timer);

}, [isRunning, timeLeft]);
  return (
    <div className="focus-mode">

      <h1>Focus Mode</h1>

      {/* timer */}
      <div className="timer-card">

        <h2>Pomodoro Timer</h2>
{/* remaining time*/}
        <h1>
  {minutes}:{seconds.toString().padStart(2, "0")}
</h1>
<p className="focus-message">
  Stay focused. You got this girl. 
</p>
  <div className="timer-buttons">

  {/* starts timer */}
  <button
    onClick={() => setIsRunning(true)}
    disabled={isRunning}
  >
    Start
  </button>

  {/* pauses timer */}
  <button
    onClick={() => setIsRunning(false)}
    disabled={!isRunning}
  >
    Pause
  </button>

  {/* resets timer */}
  <button
    onClick={() => {
      setIsRunning(false);
      setTimeLeft(25 * 60);
    }}
  >
    Reset
  </button>

</div>

      </div>

      {/* focus states */}
      <div className="focus-stats">

        <div className="focus-stat-card">
          <h2>Sessions Completed</h2>
          <p>{sessionsCompleted}</p>
        </div>

        <div className="focus-stat-card">
          <h2>Total Focus Time</h2>
          <p>{totalFocusTime} min</p>
        </div>

      </div>

    </div>
  );
}

export default FocusMode;