import React from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import LogError from "../components/LogError";
import Footer from "../components/Footer";
import { createStore } from "redux"
import { Provider } from "react-redux"
import "./bootstrap.min.css";
import "./style.css";

var tasksState;

if (localStorage.getItem('tasks')) {
  tasksState = {
    tasks: JSON.parse(localStorage.getItem('tasks')), 
  }
} else {
  tasksState = {
    tasks: [], 
  }
}  

function reducer(state, action) {
  let newState;
  switch(action.type) {
    case 'ADD_TASK':
      newState = { 
        tasks: [...state.tasks, action.data] 
      };
      localStorage.setItem('tasks', JSON.stringify(newState.tasks));
      return newState;
    case 'CLEAR_TASKS':
      newState = {
        tasks: action.data
      };
      localStorage.setItem('tasks', JSON.stringify(newState.tasks)); 
      return newState;
    case 'DEL_TASK':
      state.tasks.splice(action.data, 1);
      newState = {
        tasks: [...state.tasks]
      };
      localStorage.setItem('tasks', JSON.stringify(newState.tasks));
      return newState;
    default:
      return state;
  }
}

const store = createStore(reducer, tasksState);

export default function App(props) {
  let content;
  if(props.pass == "1234") {
    content = <>
      <AddTaskForm />
      <TaskList />
      </>
  } else {
    content = <LogError />
  }
  return (
    <Provider store={store}>
      {content}
      <Footer />
    </Provider>
  );
}
