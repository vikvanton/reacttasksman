import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, clearTasks } from '../store';
import { encryptText } from '../utils';

export default function AddTaskForm() {
  const [task, setTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    if (task === '') {
      toast.error('Empty task field!');
    } else {
      dispatch(
        addTask({
          id: Date.now(),
          value: encryptText(task),
          done: false,
        })
      );
      setTask('');
    }
    e.preventDefault();
  }

  function handleClear() {
    if (tasks.length === 0) {
      toast.error('Empty list of tasks!');
    } else {
      if (confirm('Are you sure? This will delete ALL of your tasks!'))
        dispatch(clearTasks());
    }
  }

  return (
    <header className="header">
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label
            className="col-form-label col-form-label-lg"
            htmlFor="inputLarge"
          >
            <h2>Tasks planner</h2>
          </label>
          <div className="form-container">
            <input
              className="inp-form"
              type="text"
              placeholder="Place new task"
              id="inputLarge"
              onChange={handleChange}
              value={task}
            />
          </div>
        </div>
        <div className="form-container">
          <button className="btn btn-outline-success btn-form" type="submit">
            Add task
          </button>
          <button
            className="btn btn-outline-danger btn-form"
            type="button"
            onClick={handleClear}
          >
            Clear list
          </button>
        </div>
      </form>
    </header>
  );
}
