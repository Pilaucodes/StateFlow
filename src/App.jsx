import { useState, useEffect  } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout/Layout";
import Dashboard from "./ui/Dashboard/Dashboard";
import Tasks from "./ui/Tasks/Tasks";
import Kanban from "./ui/Kanban/Kanban";
import FocusMode from "./ui/FocusMode/FocusMode";
import Assistant from "./ui/Assistant/Assistant";
import Settings from "./ui/Settings/Settings";

function App() {

  // stores all tasks in the application
const [tasks, setTasks] = useState(() => {

  const savedTasks = localStorage.getItem("tasks");

  // loads saved tasks if they exist
  if (savedTasks) {
    return JSON.parse(savedTasks);
  }
  // default tasks for first app launch
  return [
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
  ];

});
// saves tasks whenever the task list changes
useEffect(() => {

  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );

}, [tasks]);

  // stores completed focus session history
const [focusSessions, setFocusSessions] = useState(() => {

  const savedSessions = localStorage.getItem("focusSessions");

  return savedSessions
    ? JSON.parse(savedSessions)
    : [];

});

// saves focus sessions
useEffect(() => {

  localStorage.setItem(
    "focusSessions",
    JSON.stringify(focusSessions)
  );

}, [focusSessions]);

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
        element={
         <Kanban
      tasks={tasks}
      setTasks={setTasks}
    />
  }
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