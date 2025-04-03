// src/redux/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        ...action.payload,
        childTasks: [],
      };

      if (action.payload.parentId) {
        const addChild = (tasks) => {
          for (let task of tasks) {
            if (task.id === action.payload.parentId) {
              task.childTasks.push(newTask);
              return true;
            }
            if (addChild(task.childTasks)) return true;
          }
          return false;
        };
        addChild(state.tasks);
      } else {
        state.tasks.push(newTask);
      }
      saveToLocalStorage(state.tasks);
    },
    
    deleteTask: (state, action) => {
      const deleteRecursive = (tasks) => {
        return tasks.filter(task => {
          if (task.id === action.payload) return false;
          task.childTasks = deleteRecursive(task.childTasks);
          return true;
        });
      };
      state.tasks = deleteRecursive(state.tasks);
      saveToLocalStorage(state.tasks);
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
