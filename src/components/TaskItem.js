import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { checkTask, editTask, delTask } from '../store';
import { encryptText, decryptText } from '../utils';

export default function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState('');
  const dispatch = useDispatch();
  const ref = useRef();
  const taskValue = decryptText(task.value);

  function handleEdit() {
    if (!isEditing) setEditingValue(taskValue);
    else setEditingValue('');
    setIsEditing(!isEditing);
  }

  function handleSave() {
    dispatch(editTask(task.id, encryptText(editingValue)));
    setIsEditing(!isEditing);
    setEditingValue('');
  }

  function handleDel() {
    ref.current.className += ' task-item-delete';
    setTimeout(() => {
      dispatch(delTask(task.id));
    }, 1000);
  }

  function handleCheck() {
    dispatch(checkTask(task.id));
  }

  function handleChange(e) {
    setEditingValue(e.target.value);
  }

  return (
    <li className="task-item" ref={ref}>
      {isEditing ? (
        <>
          <div className="task-box task-box-editing">
            <input
              className="inp-form inp-form-editing"
              type="text"
              onChange={handleChange}
              value={editingValue}
            />
          </div>
          <div className="btn-box">
            {!task.done && (
              <button
                type="button"
                className="btn btn-secondary btn-sm btn-list"
                onClick={handleEdit}
              >
                Cancel
              </button>
            )}
            <button
              type="button"
              className="btn btn-success btn-sm btn-list"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="task-box">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id={task.id}
                className="form-check-input"
                defaultChecked={task.done}
                onClick={handleCheck}
              />
            </div>
            <div className={`task-container ${task.done && 'done'}`}>
              {taskValue}
            </div>
          </div>
          <div className="btn-box">
            {!task.done && (
              <button
                type="button"
                className="btn btn-primary btn-sm btn-list"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
            <button
              type="button"
              className="btn btn-danger btn-sm btn-list"
              onClick={handleDel}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}
