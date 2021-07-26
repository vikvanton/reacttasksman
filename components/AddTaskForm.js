import React, {useState} from "react";
import {connect} from "react-redux";
import {addTask, clearTasks} from "../src/actions";

function AddTaskForm(props) {
  const [ task, setTask ] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    if (task == '') alert('Empty task field!');
    else {
      props.addTask(task);
      setTask('');
    }
    e.preventDefault();
  }

  function handleClear() {
    if (props.tasks.length != 0) props.clearTasks();
    else alert('Empty list of tasks!');
  }

  return (
    <header class="header">
    <form class="input-form" onSubmit={handleSubmit}>
      <div class="form-group">
        <label class="col-form-label col-form-label-lg mt-4" for="inputLarge">
          <h2>Tasks planner</h2></label>
        <div class="form-container">
          <input class="form-control form-control-lg inp-form"
            type="text" 
            placeholder="Place new task" 
            id="inputLarge" 
            onChange={handleChange} 
            value={task} />
        </div>
      </div>
      <div class="form-container">
        <button class="btn btn-primary btn-form" type="submit">Add task</button>
        <button class="btn btn-danger btn-form" type="button" onClick={handleClear}>Clear list</button>
      </div>
    </form>
    </header>
    );
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = {
  addTask,
  clearTasks
}

export default connect(mapStateToProps, mapDispatchToProps) (AddTaskForm)