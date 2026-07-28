import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout/Layout";
import Dashboard from "./ui/Dashboard/Dashboard";
import Tasks from "./ui/Tasks/Tasks";
import Kanban from "./ui/Kanban/Kanban";
import FocusMode from "./ui/FocusMode/FocusMode";
import Assistant from "./ui/Assistant/Assistant";
import Settings from "./ui/Settings/Settings";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish designing dashboard",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Write project report",
      priority: "Medium",
      status: "To Do",
    },
    {
      id: 3,
      title: "Push code to GitHub",
      priority: "Low",
      status: "Completed",
    },
  ]);

  // stores the number of completed focus sessions
const [focusSessions, setFocusSessions] = useState(0);

  return (
    <Layout>
      <Routes>

       <Route
  path="/"
  element={
    <Dashboard
      tasks={tasks}
      focusSessions={focusSessions}
    />
  }
/>

        <Route
          path="/tasks"
          element={<Tasks tasks={tasks} setTasks={setTasks} />}
        />

        <Route
          path="/kanban"
          element={<Kanban tasks={tasks} />}
        />

        <Route
  path="/focus"
  element={
    <FocusMode
      focusSessions={focusSessions}
      setFocusSessions={setFocusSessions}
    />
  }
/>
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Layout>
  );
}

export default App;