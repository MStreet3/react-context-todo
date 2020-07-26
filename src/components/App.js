import React from 'react';
import '../App.css';
import TaskList from './TaskList';
import TaskListContextProvider from '../context/TaskListContext';
import TaskForm from './TaskForm';
import Header from './Header';
import DailyHeader from './DailyHeader';

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <DailyHeader />
        <TaskListContextProvider>
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </TaskListContextProvider>
      </div>
    </div>
  );
};

export default App;
