import "./Settings.css";
import { useState } from "react";

// settings page
function Settings() {
  //whether reminders are enabled
const [reminders, setReminders] = useState(false);

//  selected focus session length
const [sessionLength, setSessionLength] = useState("25 minutes");

// settings saved
const [saved, setSaved] = useState(false);

  return (
    <div className="settings">

      <h1>Settings</h1>

      {/* notifications and reminders */}
      <div className="settings-card">

        <h2>Notifications</h2>

        <label>
          <input
  type="checkbox"
  checked={reminders}
  onChange={(event) =>
    setReminders(event.target.checked)
  }
/>
          Enable reminders
        </label>

      </div>

      {/* focus Mode */}
      <div className="settings-card">

        <h2>Focus Mode</h2>

        <label>
          Default session length
        </label>

        <select
  value={sessionLength}
  onChange={(event) =>
    setSessionLength(event.target.value)
  }
>
          <option>25 minutes</option>
          <option>30 minutes</option>
          <option>45 minutes</option>
        </select>

      </div>
      {/* account */}
      <div className="settings-card">

        <h2>Account</h2>

        <button onClick={() => setSaved(true)}>
  {saved ? "Saved ✓" : "Save Settings"}
</button>

{saved && (
  <p className="saved-message">
    Settings saved successfully!
  </p>
)}

      </div>

    </div>
  );
}

export default Settings;