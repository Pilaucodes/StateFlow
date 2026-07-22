import { Routes, Route } from "react-router-dom";

import Layout from "./ui/Layout/Layout";

import Dashboard from "./ui/Dashboard/Dashboard";
import Tasks from "./ui/Tasks/Tasks";
import Kanban from "./ui/Kanban/Kanban";
import FocusMode from "./ui/FocusMode/FocusMode";
import Assistant from "./ui/Assistant/Assistant";
import Settings from "./ui/Settings/Settings";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/focus" element={<FocusMode />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;