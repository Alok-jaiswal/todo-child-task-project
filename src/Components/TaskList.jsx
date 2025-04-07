import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/todoSlice";
import "./TaskList.css"; 

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  const renderTasks = (tasks) => (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="task-card">
          <strong>{task.name}</strong> - {task.email} ({task.status})
          <p>{task.description}</p>
          <small>{new Date(task.createdAt).toLocaleString()}</small>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          {task.childTasks.length > 0 && (
            <ul>{renderTasks(task.childTasks)}</ul> 
          )}
        </li>
      ))}
    </ul>
  );

  return <div className="task-list-container">{renderTasks(tasks)}</div>;
  {
    /* Apply the container class */
  }
};

export default TaskList;
