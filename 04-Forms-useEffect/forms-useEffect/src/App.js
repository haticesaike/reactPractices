import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import { useEffect, useContext } from "react";
import { TaskContext } from "./context/task";
import "./App.css";

function App() {
  const { fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h2>Görevler</h2>
      <TaskList />
    </div>
  );
}

export default App;
