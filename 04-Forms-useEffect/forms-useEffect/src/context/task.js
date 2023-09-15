import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const TaskContext = createContext();

function TaskProvider({ children }) {
  let elma = "elma";
  const [tasks, setTasks] = useState([]);
  const createTask = async (inputTitle, inputDescription) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      inputTitle: inputTitle,
      inputDescription: inputDescription,
    });
    console.log(response);

    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  };
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      inputTitle: updatedTitle,
      inputDescription: updatedTaskDesc,
    });
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          inputTitle: updatedTitle,
          inputDescription: updatedTaskDesc,
        };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const sharedValueAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };

  return (
    <TaskContext.Provider value={sharedValueAndMethods}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
