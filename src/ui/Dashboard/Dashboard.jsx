import "./Dashboard.css";
import Statistic from "../components/Statistic";
import { useNavigate } from "react-router-dom";

//displays main dashboard with statistics and other dashboard widgets
function Dashboard({tasks, focusSessions,
}) {
  const navigate = useNavigate();

  // calculate statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  // calculates percentage of completed tasks
  const completionPercentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const todoTasks = tasks.filter(
    (task) => task.status === "To Do"
  ).length;

  // counts tasks based on priority level
  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const mediumPriorityTasks = tasks.filter(
    (task) => task.priority === "Medium"
  ).length;

  const lowPriorityTasks = tasks.filter(
    (task) => task.priority === "Low"
  ).length;

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      {/* statistics */}
      <div className="stats-grid">

        <Statistic
          title="Total Tasks"
          value={totalTasks}
        />

        <Statistic
          title="To Do"
          value={todoTasks}
        />

        <Statistic
          title="In Progress"
          value={inProgressTasks}
        />

        <Statistic
          title="Completed"
          value={completedTasks}
        />

      </div>

      {/* Chart section */}
      <div className="dashboard-charts">

        {/* task completion progress */}
        <div className="chart-card">

          {/* shows percentage of completed tasks */}
          <h2>Task Completion Progress</h2>

          <h3>
            {completionPercentage}%
          </h3>

          <p>
            Tasks completed
          </p>

          {/* visual progress bar */}
          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${completionPercentage}%`,
              }}
            ></div>

          </div>

        </div>

        {/* task priority */}
        <div className="chart-card">

          {/* displays task distribution by priority */}
          <h2>Tasks by Priority</h2>

          <p>
            High: {highPriorityTasks}
          </p>

          <p>
            Medium: {mediumPriorityTasks}
          </p>

          <p>
            Low: {lowPriorityTasks}
          </p>

        </div>

        {/* focus sessions */}
<div className="chart-card">

  {/* displays completed focus sessions */}
  <h2>Focus Sessions This Week</h2>

  <h3>
    {focusSessions}
  </h3>

  <p>
    Sessions completed
  </p>

</div>

      </div>

      {/* lower dashboard area */}
      <div className="dashboard-bottom">

        {/* recent tasks */}
        <div className="recent-tasks">

          <h2>Recent Tasks</h2>

          <ul>

            {tasks.slice(0, 5).map((task) => (

              <li key={task.id}>
                {task.title}
              </li>

            ))}

          </ul>

        </div>

        {/* quick-actions */}
        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <button onClick={() => navigate("/tasks?new=true")}>
            Create Task
          </button>

          <button onClick={() => navigate("/focus")}>
            Start Focus Session
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
 