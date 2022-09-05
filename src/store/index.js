import { legacy_createStore as createStore } from 'redux';

const tasksInitialState = {
  tasks: [],
};

function tasksReducer(state = tasksInitialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.data],
      };
    case 'CHECK_TASK':
      return {
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === action.data) {
              return {
                ...task,
                done: !task.done
              }
            }
            return task;
          }),
        ],
      };
    case 'EDIT_TASK':
      return {
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === action.data.id) {
              return {
                ...task,
                value: action.data.value
              }
            }
            return task;
          }),
        ],
      };
    case 'CLEAR_TASKS':
      return {
        tasks: action.data,
      };
    case 'DEL_TASK':
      return {
        tasks: state.tasks.filter((task) => task.id !== action.data),
      };
    case 'LOAD_FROM_STORAGE':
      return {
        tasks: action.data,
      };
    default:
      return state;
  }
}

export function addTask(task) {
  return {
    type: 'ADD_TASK',
    data: task,
  };
}

export function checkTask(id) {
  return {
    type: 'CHECK_TASK',
    data: id,
  };
}

export function editTask(id, value) {
  return {
    type: 'EDIT_TASK',
    data: { id, value },
  };
}

export function clearTasks() {
  return {
    type: 'CLEAR_TASKS',
    data: [],
  };
}

export function delTask(id) {
  return {
    type: 'DEL_TASK',
    data: id,
  };
}

export function loadFromStorage(tasks) {
  return {
    type: 'LOAD_FROM_STORAGE',
    data: tasks,
  };
}

const store = createStore(tasksReducer);

export default store;
