import "./FocusMode.css";
import { useState, useEffect } from "react";

// displays page
function FocusMode({focusSessions,setFocusSessions,}) {
  // default focus session duration
const [sessionDuration, setSessionDuration] = useState(25);

  // stores number of seconds remaining
const [timeLeft, setTimeLeft] = useState(25 * 60);

// check whether the timer runs
const [isRunning, setIsRunning] = useState(false);
// completed Pomodoro sessions
const [sessionsCompleted, setSessionsCompleted] = useState(() => {

  const savedSessions = localStorage.getItem("sessionsCompleted");

  return savedSessions
    ? Number(savedSessions)
    : 0;

});

// total focusing minutes spent
const [totalFocusTime, setTotalFocusTime] = useState(() => {

  const savedFocusTime = localStorage.getItem("totalFocusTime");

  return savedFocusTime
    ? Number(savedFocusTime)
    : 0;

});

// loads saved focus settings
useEffect(() => {

  const savedSettings = localStorage.getItem("settings");

  if (savedSettings) {

    const settings = JSON.parse(savedSettings);

    const minutes = parseInt(
      settings.sessionLength
    );

    setSessionDuration(minutes);

    setTimeLeft(minutes * 60);

  }

}, []);

// saves completed sessions
useEffect(() => {

  localStorage.setItem(
    "sessionsCompleted",
    sessionsCompleted
  );

}, [sessionsCompleted]);

// saves total focus time
useEffect(() => {

  localStorage.setItem(
    "totalFocusTime",
    totalFocusTime
  );

}, [totalFocusTime]);

// synces session  with dashboard
useEffect(() => {

  setSessionsCompleted(focusSessions.length);

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

// stores completed focus session
setFocusSessions((previous) => [
  ...previous,
  {
    id: Date.now(),
    date: new Date().toISOString(),
    duration: sessionDuration,
  },
]);

// adds completed focus time
setTotalFocusTime(
  (previous) => previous + sessionDuration
);

    return;
  }

  // count down every second
const timer = setInterval(() => {

  setTimeLeft((previousTime) =>
    previousTime > 0
      ? previousTime - 1
      : 0
  );

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
      setTimeLeft(sessionDuration * 60);
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