// src/App.js
import React from "react";
import { Provider } from "react-redux";
// import TodoForm from "./components/TodoForm";
// import TaskList from "./components/TaskList";
import Store from "./redux/Store";
import ToDoForm from "./Components/ToDoForm";
import TaskList from "./Components/TaskList";

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <h1>To-Do List</h1>
        <ToDoForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;