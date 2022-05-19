import React from 'react';
import profile from '../../assests/images/profile.png';
import classes from './NavBar.module.css';

const NavBar = (props: any) => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        {props.flag && (
          <div>
            <input type="search" className={classes.search} placeholder="Search" />
          </div>
        )}
        {!props.flag && <div className={classes.search}></div>}
        <div className={classes.user}>
          <p>Anjali Gupta</p>
          <img src={profile} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default NavBar;
