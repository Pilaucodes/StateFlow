import "./TaskCard.css";

//displays a single task including its title, priority and current status.
function TaskCard({
  title,
  priority,
  status,
  onEdit,
  onDelete,
}) {
  return (
    <div className="task-card">

      <h3>{title}</h3>

      <div className="task-info">
        <p><strong>Priority:</strong> {priority}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>
      <button onClick={onEdit}>
  Edit
</button>
<button onClick={onDelete}>
  Delete
</button>

    </div>
  );
}

export default TaskCard;