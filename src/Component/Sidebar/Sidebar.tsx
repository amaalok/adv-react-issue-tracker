import React from 'react';
import { Link } from 'react-router-dom';
import Tracker from '../../assests/images/Icon.png';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <img src={Tracker} className={classes.sideImg} alt="" />
      <Link to="/dashboard">PROJECT BOARD</Link>
      <Link to="/create_issue">CREATE ISSUES</Link>
      <Link to="/create_project">CREATE PROJECTS</Link>
    </div>
  );
};
export default Sidebar;
