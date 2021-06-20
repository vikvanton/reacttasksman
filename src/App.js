import React, {useState} from "react";
import "./bootstrap.min.css";
import "./style.css";

function AddTaskForm(props) {
  const [ task, setTask ] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    props.addNewTask(task);
    setTask('');
    e.preventDefault();
  }

  function handleClear(e) {
    props.clearTasks();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label class="col-form-label col-form-label-lg mt-4" for="inputLarge">
          <h2>Tasks planner</h2></label>
        <input class="form-control form-control-lg"
          type="text" 
          placeholder="Place new task" 
          id="inputLarge" 
          onChange={handleChange} 
          value={task} />
      </div>
      <button class="btn btn-primary" type="submit">Add task</button>
      <button class="btn btn-warning" type="button" onClick={handleClear}>Clear list</button>
      <hr />
    </form>
    );
}

function TaskList(props) {
  const arr = props.data;

  const listTasks = arr.map((val, index) =>
    <li key={index}>{val} <br /> <br /> 
      <button type="button" class="btn btn-danger btn-sm"
        id={index} onClick={props.remove}>Delete</button>
    </li>
  );
  
  return <ul>{listTasks}</ul>;
}

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  function addTask(name) {
    if (name == '') alert('Empty task field!');
    else setTasks([...tasks, name]);
  }

  function delTask(e) {
    tasks.splice(e.target.id, 1);
    setTasks([...tasks]);
  }

  function clearList() {
    if (tasks.length != 0) setTasks([]);
    else alert('Empty list of tasks!');
  }

  return (
    <div>
      <AddTaskForm addNewTask={addTask} clearTasks={clearList}/>
      <TaskList data={tasks} remove={delTask} />
    </div>
  );
}

export default function App() {
  return (
    <TaskManager />
  );
}
