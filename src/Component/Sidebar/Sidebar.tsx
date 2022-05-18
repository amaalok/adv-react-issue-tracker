import React from 'react';
import Tracker from '../../assests/images/Icon.png';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <img src={Tracker} className={classes.sideImg} />
      <a href="/dashboard">PROJECT BOARD</a>
      <a href="/create_issue">CREATE ISSUES</a>
      <a href="/create_project">CREATE PROJECTS</a>
    </div>
  );
};
export default Sidebar;
