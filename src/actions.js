export function addTask(task) {
  return {
    type: 'ADD_TASK',
    data: task
  }
}

export function clearTasks() {
  return {
    type: 'CLEAR_TASKS',
    data: []
  }
}

export function delTask(id) {
  return {
    type: 'DEL_TASK',
    data: id
  }
}