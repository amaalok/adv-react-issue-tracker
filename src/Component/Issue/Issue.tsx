import React from 'react';
import classes from './Issue.module.css';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

const Issue = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavBar />
        <div className={classes.content}>
          <h1>Create User Stories/Tasks/Bugs</h1>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Issue;
