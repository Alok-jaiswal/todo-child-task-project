import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/todoSlice";

const ToDoForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  
  const [taskData, setTaskData] = useState({
    name: "",
    email: "",
    description: "",
    status: "active",
    parentId: ""
  });

  const validateEmail = (email) => /@gmail\.com$|@outlook\.com$/.test(email);
  const formatDescription = (desc) => desc.replace(/\s+/g, " ").trim().replace(/\b\w/g, (c) => c.toUpperCase());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskData.name || !validateEmail(taskData.email) || !taskData.description) {
      alert("Invalid input. Check name, email, and description.");
      return;
    }
    dispatch(addTask({ ...taskData, description: formatDescription(taskData.description) }));
    setTaskData({ name: "", email: "", description: "", status: "active", parentId: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Name" value={taskData.name} onChange={(e) => setTaskData({ ...taskData, name: e.target.value })} required />
      <input type="email" placeholder="Email (gmail/outlook)" value={taskData.email} onChange={(e) => setTaskData({ ...taskData, email: e.target.value })} required />
      <textarea placeholder="Description" value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value })} required />
      <select value={taskData.parentId} onChange={(e) => setTaskData({ ...taskData, parentId: e.target.value })}>
        <option value="">No Parent</option>
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>{task.name}</option>
        ))}
      </select>
      <label>
        <input type="radio" name="status" value="active" checked={taskData.status === "active"} onChange={() => setTaskData({ ...taskData, status: "active" })} /> Active
      </label>
      <label>
        <input type="radio" name="status" value="inactive" checked={taskData.status === "inactive"} onChange={() => setTaskData({ ...taskData, status: "inactive" })} /> Inactive
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoForm;