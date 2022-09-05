import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <main>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        )).reverse()}
      </ul>
    </main>
  );
}
