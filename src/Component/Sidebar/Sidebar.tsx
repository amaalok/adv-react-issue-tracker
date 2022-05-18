import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <a href="/dashboard">PROJECT BOARD</a>
      <a href="/create_issue">CREATE ISSUES</a>
      <a href="/create_project">CREATE PROJECTS</a>
    </div>
  );
};
export default Sidebar;
