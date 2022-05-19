import React from 'react';
import { Link } from 'react-router-dom';
import Tracker from '../../assests/images/Icon.png';
import classes from './CreateProject.module.css';
import { useTranslation } from 'react-i18next';
import NavBar from '../NavBar/NavBar';

const CreateProject = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className={classes['project-container']}>
        <div className={classes.sidebar}>
          <img src={Tracker} className={classes.sideImg} alt="" />
          <div className={classes['link-div']}>
            <Link to="/dashboard">{t('PROJECT BOARD')}</Link>
            <Link to="/create_issue">{t('CREATE ISSUES')}</Link>
            <Link to="/create_project" className={classes.active}>
              <p className={classes.link}>{t('CREATE PROJECTS')}</p>
            </Link>
          </div>
        </div>
        <div className={classes.content}>
          <NavBar flag={false} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default CreateProject;
