import "./Kanban.css";
import KanbanCard from "../components/KanbanCard/KanbanCard";

// displays the Kanban board page
function Kanban({ tasks, setTasks }) {
  // updates task status when moved between columns
function updateTaskStatus(id, newStatus) {

  console.log(
    "Updating:",
    id,
    newStatus
  );

  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          status: newStatus,
        }
      : task
  );

  setTasks(updatedTasks);

}
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
  id={task.id}
  title={task.title}
  priority={task.priority}
  status={task.status}
  onStatusChange={updateTaskStatus}
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
  id={task.id}
  title={task.title}
  priority={task.priority}
  status={task.status}
  onStatusChange={updateTaskStatus}
/>
            ))}
        </div>

        {/* Completed */}
        <div className="kanban-column">
          <h2>Completed</h2>
          {tasks.filter((task) => task.status === "Completed").length === 0 ? (
  <p>No tasks</p>
) : (
  tasks
    .filter((task) => task.status === "Completed")
    .map((task) => (
      <KanbanCard
        key={task.id}
        id={task.id}
        title={task.title}
        priority={task.priority}
        status={task.status}
        onStatusChange={updateTaskStatus}
      />
    ))
)}
    
        </div>

      </div>

    </div>
  );
}

export default Kanban;