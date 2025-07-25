import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), name: newTask }]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List với Vite</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nhập việc cần làm"
      />
      <button onClick={addTask}>Thêm</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} <button onClick={() => deleteTask(task.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
