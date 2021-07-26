import React, {useState, useEffect} from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import LogError from "../components/LogError";
import Footer from "../components/Footer";
import { createStore } from "redux"
import { Provider } from "react-redux"
import "./bootstrap.min.css";
import "./style.css";

export default function App(props) {
  const [tasksState, setTasksState] = useState({
      tasks: [],
    });

  useEffect((state) => {
    if (localStorage.getItem('tasks')) {
      setTasksState({
        tasks: JSON.parse(localStorage.getItem('tasks')),
        }); 
      }
  }, []);

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
        let newTasks = state.tasks;
        newTasks.splice(action.data, 1);
        newState = {
          tasks: [...newTasks]
        };
        localStorage.setItem('tasks', JSON.stringify(newState.tasks));
        return newState;
      default:
        return state;
    }
  }
  
  const store = createStore(reducer, tasksState);
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
