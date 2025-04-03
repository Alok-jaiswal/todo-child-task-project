// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";

const Store = configureStore({
  reducer: { todo: todoReducer },
});

export default Store;
