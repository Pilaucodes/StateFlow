import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaColumns,
  FaClock,
  FaRobot,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>StateFlow</h2>
      </div>

      <nav>
        <ul>

 <NavLink to="/">
  <li>
    <FaHome />
    <span>Dashboard</span>
  </li>
</NavLink>

 <NavLink to="/tasks">
          <li>
            <FaTasks />
            <span>Tasks</span>
          </li>
 </NavLink>

  <NavLink to="/kanban">
          <li>
            <FaColumns />
            <span>Kanban</span>
          </li>
 </NavLink>

  <NavLink to="/focus">
          <li>
            <FaClock />
            <span>Focus Sessions</span>
          </li>
 </NavLink>

  <NavLink to="/assistant">
          <li>
            <FaRobot />
            <span>AI Assistant</span>
          </li>
 </NavLink>

  <NavLink to="/">
          <li>
            <FaCog />
            <span>Settings</span>
          </li>
    </NavLink>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;