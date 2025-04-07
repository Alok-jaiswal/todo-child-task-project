import React from "react";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import ToDoForm from "./Components/ToDoForm";
import TaskList from "./Components/TaskList";
import "./App.css"; 

const App = () => {
  return (
    <Provider store={Store}>
      <div className="app-container">
        <h1>To-Do List</h1>
        <div className="form-list-container">
          <div className="todo-form-container">
            <h2>Add New Task</h2> 
            <ToDoForm />
          </div>
          <div className="task-list-wrapper">
            <h2>Task List</h2>
            <TaskList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;