import React from 'react';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';
import classes from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div className={classes.content}>
        <NavBar />
        <div className={classes['text-home']}>
          <h1>Welcome to Tracker</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
