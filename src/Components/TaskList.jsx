// src/components/TaskList.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/todoSlice";
const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  const renderTasks = (tasks) => (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.name}</strong> - {task.email} ({task.status})
          <p>{task.description}</p>
          <small>{new Date(task.createdAt).toLocaleString()}</small>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          {task.childTasks.length > 0 && renderTasks(task.childTasks)}
        </li>
      ))}
    </ul>
  );

  return <div>{renderTasks(tasks)}</div>;
};

export default TaskList;