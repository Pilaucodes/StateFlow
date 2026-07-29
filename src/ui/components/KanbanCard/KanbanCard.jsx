import "./KanbanCard.css";

// displays a task inside a kanban column
function KanbanCard({
  id,
  title,
  priority,
  status,
  onStatusChange,
}) {

  return (
    <div className="kanban-card">

      <h3>{title}</h3>

      <p>
        {priority} Priority
      </p>

      {/* changes task progress status */}
      <select
        value={status}
        onChange={(event) =>
          onStatusChange(
            id,
            event.target.value
          )
        }
      >

        <option>
          To Do
        </option>

        <option>
          In Progress
        </option>

        <option>
          Completed
        </option>

      </select>

    </div>
  );
}

export default KanbanCard;