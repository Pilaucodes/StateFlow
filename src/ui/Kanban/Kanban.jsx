import "./Kanban.css";
import KanbanCard from "../components/KanbanCard/KanbanCard";

// displays the Kanban board page
function Kanban({ tasks }) {
  return (
    <div className="kanban">

      <h1>Kanban Board</h1>

      <div className="kanban-board">

        {/* To Do */}
        <div className="kanban-column">
          <h2>To Do</h2>

          {tasks
            .filter((task) => task.status === "To Do")
            .map((task) => (
              <KanbanCard
                key={task.id}
                title={task.title}
                priority={task.priority}
              />
            ))}
        </div>

        {/* In Progress */}
        <div className="kanban-column">
          <h2>In Progress</h2>

          {tasks
            .filter((task) => task.status === "In Progress")
            .map((task) => (
              <KanbanCard
                key={task.id}
                title={task.title}
                priority={task.priority}
              />
            ))}
        </div>

        {/* Completed */}
        <div className="kanban-column">
          <h2>Completed</h2>

          {tasks.filter((task) => task.status === "To Do").length === 0 ? (
  <p>No tasks</p>
) : (
  tasks
    .filter((task) => task.status === "To Do")
    .map((task) => (
      <KanbanCard
        key={task.id}
        title={task.title}
        priority={task.priority}
      />
    ))
)}
        </div>

      </div>

    </div>
  );
}

export default Kanban;