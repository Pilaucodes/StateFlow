//dashboard styling
import "./Dashboard.css";

// reusable statistic component import
import Statistic from "../components/Statistic";

//display main dashboard with statistics and other dashboard widgets
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

    </div>
  );
}

export default Dashboard;