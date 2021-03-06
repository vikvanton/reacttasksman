import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTask, clearTasks} from '../src/actions';

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
      <button class="btn btn-danger" type="button" onClick={handleClear}>Clear list</button>
      <hr />
    </form>
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