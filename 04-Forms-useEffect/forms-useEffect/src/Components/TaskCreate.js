import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/task";

function TaskCreate({ task, taskFormpUpdate }) {
  const { editTaskById, createTask } = useContext(TaskContext);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    e.preventDefault();
    setInputDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskFormpUpdate) {
      editTaskById(task.id, inputTitle, inputDescription);
    } else {
      createTask(inputTitle, inputDescription);
    }
    setInputTitle("");
    setInputDescription("");
  };

  return (
    <div>
      {taskFormpUpdate ? (
        <div className="taskUpdate">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="taskForm">
            <label>Başlığı Düzenleyiniz</label>
            <input
              value={inputTitle}
              onChange={handleChange}
              className="input"
            />
            <label>Taskı Düzenleyiniz</label>
            <textarea
              value={inputDescription}
              onChange={handleDescChange}
              className="textarea"
              rows={6}
            />
            <button onClick={handleSubmit} className="button buttonCreate">
              Güncelle
            </button>
          </form>
        </div>
      ) : (
        <div className="taskCreate">
          <h3>Lütfen Task Ekleyiniz! </h3>
          <form className="taskForm">
            <label>Task Adı</label>
            <input
              value={inputTitle}
              onChange={handleChange}
              className="input"
            />
            <label>Task Açıklaması</label>
            <textarea
              value={inputDescription}
              onChange={handleDescChange}
              className="textarea"
              rows={6}
            />
            <button onClick={handleSubmit} className="button buttonCreate">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
