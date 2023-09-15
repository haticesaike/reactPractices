import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import { TaskContext } from "../context/task";

function TaskShow({ task }) {
  const { editTaskById, deleteTaskById } = useContext(TaskContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="task-card">
      {showEdit ? (
        <TaskCreate task={task} taskFormpUpdate={true} />
      ) : (
        <div className="task-frame">
          <h3>Göreviniz</h3>
          <div className="border border-title">
            <p>{task.inputTitle}</p>
          </div>
          <h3>Yapılcaklar</h3>
          <div className="border">
            <p>{task.inputDescription}</p>
          </div>
          <div className="cards-buttons">
            <button
              className="cardButton task-delete"
              onClick={handleDeleteClick}
            >
              Sil
            </button>
            <button className="cardButton task-edit" onClick={handleEditClick}>
              Düzenle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
