import TaskShow from "./TaskShow";
import { useContext } from 'react';
import { TaskContext } from '../context/task';

function TaskList() {
    const { tasks } = useContext(TaskContext);
    return  <div className="task-list">
        {tasks.map((task) => {
            return <TaskShow key={task.id} task={task}/>

        })}
    </div>
}

export default TaskList;