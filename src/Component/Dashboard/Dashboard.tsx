import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Tracker from '../../assests/images/Icon.png';
import classes from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import EmptyProject from '../EmptyProject/EmptyProject';
import IssueCards from '../IssueCard/IssueCards';
import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';

const Dashboard = () => {
  const { t } = useTranslation();
  const [allProjects, setAllProjects] = useState([]);
  const [user, setUser] = useState([]);
  const [project, setProject] = useState('');
  const [issues, setIssues] = useState([] as any[]);
  const [assignees, setAssignees] = useState([] as any[]);
  const [fassign, setFassign] = useState('');
  const [fpriority, setFpriority] = useState('');
  const headers: any = {
    userID: localStorage.getItem('userId') !== null ? localStorage.getItem('userId') : '1'
  };
  useEffect(() => {
    async function getUser() {
      const response = await axios.get(
        `https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/user?userID=${localStorage.getItem(
          'userId'
        )}`,
        { headers: headers }
      );
      setUser(response.data[0].name);
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getRes() {
      const response = await axios.get(
        'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project',
        { headers: headers }
      );
      console.log(response.data);
      setAllProjects(response.data);
    }
    getRes();
  }, []);

  useEffect(() => {
    async function getIssues() {
      const response = await axios.get(
        `https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue?projectID=${project}`,
        { headers: headers }
      );
      setIssues(response.data);
    }
    getIssues();
  }, [project]);
  useEffect(() => {
    const assign = [...issues];
    assign.map((x) => x.assignee);
    const a = assign.map((x) => x.assignee);
    const unique = [...new Map(a.map((obj) => [obj['id'], obj])).values()];
    setAssignees(unique);
  }, [issues]);
  return (
    <React.Fragment>
      <div className={classes['dashboard-container']}>
        <div className={classes.sidebar}>
          <img src={Tracker} className={classes.sideImg} alt="" />
          <div className={classes['link-div']}>
            <Link to="/dashboard" className={classes.active}>
              <p className={classes.link}>{t('PROJECT BOARD')}</p>
            </Link>
            <Link to="/create_issue">{t('CREATE ISSUES')}</Link>
            <Link to="/create_project">{t('CREATE PROJECTS')}</Link>
          </div>
          <Language props={false} />
        </div>
        <div className={classes.content}>
          <NavBar flag={true} />
          {allProjects.length <= 0 && <EmptyProject />}
          {allProjects.length > 0 && (
            <React.Fragment>
              <div className={classes['text-home']}>
                <h1>{t('Project Details')}</h1>
                <button className={classes.button}>{t('VIEW INSIGHT')}</button>
              </div>

              <div className={classes['project']}>
                <div className={classes['input-container']}>
                  <label htmlFor={classes.select}>{t('Project Name')}</label>
                  <select
                    className={classes.select}
                    name="Priority"
                    onChange={(event) => {
                      setProject(event.target.value);
                    }}>
                    <option selected disabled hidden>
                      {t('Select')}
                    </option>
                    {allProjects.map((project) => (
                      <option key={project['projectID']} value={project['projectID']}>
                        {project['projectName']}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={classes['input-container']}>
                  <label htmlFor={classes.select}>{'Project Owner'}</label>
                  <input type="text" className={classes.owner} name="project Owner" value={user} />
                </div>
              </div>
              <div className={classes.filter}>
                <div className={classes['input-container']} id={classes.assignee}>
                  <select
                    className={classes['filter-container']}
                    onChange={(event) => {
                      setFassign(event.target.value);
                    }}
                    name="Priority">
                    <option selected value="">
                      {t('None')}
                    </option>
                    {assignees.map((user) => (
                      <option key={user['id']} value={user['id']}>
                        {user['name']}
                      </option>
                    ))}
                  </select>
                  <label htmlFor={classes.select}>{t('Filter Asignee')}</label>
                </div>
                <div className={classes['input-container']} id={classes.priority}>
                  <select
                    className={classes['filter-container']}
                    name="Priority"
                    onChange={(event) => {
                      setFpriority(event.target.value);
                    }}>
                    <option selected value="">
                      {t('None')}
                    </option>
                    <option value="1">{'LOW'}</option>
                    <option value="2">{'MEDIUM'}</option>
                    <option value="3">{'HIGH'}</option>
                  </select>
                  <label htmlFor={classes.select}>{t('Filter Priority')}</label>
                </div>
              </div>
              <IssueCards list={issues} filterbyassignee={fassign} filterbypriority={fpriority} />
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
