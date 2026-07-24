//dashboard styling
import "./Dashboard.css";

// reusable statistic component import
import Statistic from "../components/Statistic";

//displays main dashboard with statistics and other dashboard widgets
function Dashboard() {
  return (
    <div className="dashboard">

      {/* Dashboard Title */}
      <h1>Dashboard</h1>

      {/* Dashboard Statistics */}
      <div className="stats-grid">

        <Statistic
          title="Total Tasks"
          value="12"
        />

        <Statistic
          title="To Do"
          value="5"
        />

        <Statistic
          title="In Progress"
          value="4"
        />

        <Statistic
          title="Completed"
          value="3"
        />

      </div>

 // Chart sectioon 
      <div className="dashboard-charts">

        <div className="chart-card">
          <h2>Task Completion Progress</h2>
          <p>...</p>
        </div>

        <div className="chart-card">
          <h2>Tasks by Priority</h2>
          <p>...</p>
        </div>

        <div className="chart-card">
          <h2>Focus Sessions This Week</h2>
          <p>...</p>
        </div>

      </div>

      //lower dash-area
      <div className="dashboard-bottom">

        // recent tasks

        <div className="recent-tasks">

          <h2>Recent Tasks</h2>

          <ul>
            <li>Fix Login API</li>
            <li>Implement Kanban Board</li>
            <li>Update Database Schema</li>
          </ul>

        </div>

        // quick-actions

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <button>Create Task</button>
          <button>Start Focus Session</button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
 