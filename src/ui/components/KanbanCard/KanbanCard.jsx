import "./KanbanCard.css";

// displays a task inside a kanban column
function KanbanCard({ title, priority }) {
  return (
    <div className="kanban-card">
      <h3>{title}</h3>
      <p>{priority} Priority</p>
    </div>
  );
}

export default KanbanCard;