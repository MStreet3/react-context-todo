import React from 'react';
import '../App.css';
import TaskList from './TaskList';
import TaskListContextProvider from '../context/TaskListContext';
import TaskForm from './TaskForm';
import Header from './Header';

const App = (props) => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
