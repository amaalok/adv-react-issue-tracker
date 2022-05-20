import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/authSlice';
import profile from '../../assests/images/profile.png';
import logout from '../../assests/images/logout.png';
import classes from './NavBar.module.css';

const NavBar = (props: any) => {
  const dispatch = useDispatch();
  const [showDiv, setShowDiv] = useState(false);
  const handleProfile = () => {
    setShowDiv(!showDiv);
  };
  const handleLogout = () => {
    localStorage.removeItem('userId');
    dispatch(authActions.logout());
    window.location.href = '/';
  };
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
          <img src={profile} alt="" onClick={handleProfile} />
          {showDiv && (
            <div className={classes.info} onClick={handleLogout}>
              <img src={logout} alt="" /> Logout
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default NavBar;
