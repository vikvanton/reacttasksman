import React from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import Footer from "../components/Footer";
import { createStore } from "redux"
import { Provider } from "react-redux"
import "./bootstrap.min.css";
import "./style.css";

const tasksState = {
  tasks: []
};

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.data]
      };
    case 'CLEAR_TASKS':
      return {
        tasks: action.data
      };
    case 'DEL_TASK':
      state.tasks.splice(action.data, 1);
      return {
        tasks: [...state.tasks]
      };
    default:
      return state;
  }
}

const store = createStore(reducer, tasksState);

export default function App() {
  return (
    <Provider store={store}>
      <AddTaskForm />
      <TaskList />
      <Footer />
    </Provider>
  );
}
