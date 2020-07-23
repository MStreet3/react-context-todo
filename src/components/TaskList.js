import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const DefaultTaskList = ({ tasks }) => {
  return (
    <div>
      <ul className="list">
        {tasks.map(({ title, id }) => {
          return <Task title={title} key={id} id={id} />;
        })}
      </ul>
    </div>
  );
};

const EmptyTaskList = () => <div className="no-tasks">No Tasks!</div>;

const renderList = (tasks) => {
  if (tasks.length) {
    return <DefaultTaskList tasks={tasks} />;
  }
  return <EmptyTaskList />;
};

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return <>{renderList(tasks)}</>;
};

export default TaskList;
