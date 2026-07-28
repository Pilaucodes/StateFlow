import "./Tasks.css";
import TaskCard from "../components/Taskcard/TaskCard";
import { useState , useRef, useEffect} from "react";
import { useLocation } from "react-router-dom";

// displays all tasks created in the app
function Tasks({ tasks, setTasks }) {
  const location = useLocation();

  // add task form visibility
  const [showForm, setShowForm] = useState(false);

// stores values entered into the form
const [newTask, setNewTask] = useState({
  title: "",
  priority: "High",
  status: "To Do",
});
const [editingTaskId, setEditingTaskId] = useState(null);
const inputRef = useRef(null);

useEffect(() => {

  const params = new URLSearchParams(location.search);

  if (params.get("new") === "true") {
    setShowForm(true);
  }

}, [location]);

useEffect(() => {
  if (showForm) {
    inputRef.current?.focus();
  }
}, [showForm]);

// adds new task totask list
function addTask() {

  if (newTask.title.trim() === "") {
    return;
  }

  // editing an existing task
  if (editingTaskId !== null) {

    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId
        ? {
            ...task,
            title: newTask.title,
            priority: newTask.priority,
            status: newTask.status,
          }
        : task
    );

    setTasks(updatedTasks);

    setEditingTaskId(null);

  } 
  
  // otherwise create a new task
  else {

    const task = {
      id: tasks.length + 1,
      title: newTask.title,
      priority: newTask.priority,
      status: "To Do",
    };

    setTasks([...tasks, task]);

  }

  // clear form
  setNewTask({
    title: "",
    priority: "High",
    status: "To Do",
  });

  setShowForm(false);
}
  return (
    <div className="tasks">

      <div className="tasks-header">

        <h1>Tasks</h1>

        <button
          className="add-task-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "+ Add Task"}
        </button>

      </div>

      {showForm && (
        <div className="task-form">

          {/* input for task title */}
<input
ref={inputRef}
  type="text"
  placeholder="Task title"
  value={newTask.title}
  onChange={(event) =>
    setNewTask({
      ...newTask,
      title: event.target.value,
    })
  }
/>

          {/* Select the task priority */}
<select
  value={newTask.priority}
  onChange={(event) =>
    setNewTask({
      ...newTask,
      priority: event.target.value,
    })
  }
>
  <option>High</option>
  <option>Medium</option>
  <option>Low</option>
</select>
<p>Buttons should be here</p>

          <button onClick={addTask}>
  {editingTaskId ? "Save Changes" : "Create Task"}
</button>

        </div>
      )}

    {tasks.length === 0 ? (
  <p>No tasks yet? Lets get you started</p>
) : (
  tasks.map((task) => (
    <TaskCard
  key={task.id}
  id={task.id}
  title={task.title}
  priority={task.priority}
  status={task.status}
  onEdit={() => {
  setEditingTaskId(task.id);

  setNewTask({
    title: task.title,
    priority: task.priority,
    status: task.status,
  });

  setShowForm(true);
}}
onDelete={() => {
  setTasks(
    tasks.filter((item) => item.id !== task.id)
  );
}}
/>

  ))
)}
    </div>
  );
}

export default Tasks;