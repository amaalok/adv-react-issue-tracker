import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../assests/images/emptyProject.png';
import classes from './EmptyProject.module.css';

const EmptyProject = () => {
  return (
    <React.Fragment>
      <div className={classes['text-home']}>
        <h1>Welcome to Tracker</h1>
      </div>
      <p className={classes.paragraph}>
        Sees like you haven&apos;nt created any project yet.
        <Link to="/create_issue" className={classes.link}>
          <p> Click here </p>
        </Link>
        to onboard a new project.
      </p>
      <img src={Img} alt="" className={classes.img} />
    </React.Fragment>
  );
};
export default EmptyProject;
