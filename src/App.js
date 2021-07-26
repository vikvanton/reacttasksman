import React, {useState, useEffect} from "react";
import StorageManager from "../components/StorageManager"; 
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import LogError from "../components/LogError";
import Footer from "../components/Footer";
import { createStore } from "redux"
import { Provider } from "react-redux"
import "./bootstrap.min.css";
import "./style.css";

export default function App(props) {
  const tasksState = {
    tasks: []
  }

  function reducer(state, action) {
    let newState;
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
        let newTasks = state.tasks;
        newTasks.splice(action.data, 1);
        return {
          tasks: [...newTasks]
        };
      case 'LOAD_FROM_STORAGE':
        return { 
          tasks: action.data 
        }; 
      default:
        return state;
    }
  }
  
  const store = createStore(reducer, tasksState);
  let content;

  if(props.pass == "1234") {
    content = <>
      <StorageManager />
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
