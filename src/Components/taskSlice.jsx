import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageTasks = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const initialState = {
  tasks: getLocalStorageTasks(),
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveToLocalStorage(state.tasks);
    },
    updateTasks: (state, action) => {
      state.tasks = action.payload;
      saveToLocalStorage(state.tasks);
    },
  },
});

export const { addTask, updateTasks } = taskSlice.actions;
export default taskSlice.reducer;
