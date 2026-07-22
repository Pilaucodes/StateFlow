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
      <h2>StateFlow</h2>

      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FaHome /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/tasks">
              <FaTasks /> Tasks
            </NavLink>
          </li>

          <li>
            <NavLink to="/kanban">
              <FaColumns /> Kanban
            </NavLink>
          </li>

          <li>
            <NavLink to="/focus">
              <FaClock /> Focus Sessions
            </NavLink>
          </li>

          <li>
            <NavLink to="/assistant">
              <FaRobot /> AI Assistant
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings">
              <FaCog /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;