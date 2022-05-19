import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Issue.module.css';
import NavBar from '../NavBar/NavBar';
import Tracker from '../../assests/images/Icon.png';
import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';

const Issue = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [allProjects, setAllProjects] = useState([]);
  const [allUser, setAllUser] = useState([]);
  // const [summaryValidate, setSummaryValidate] = useState(true);
  const headers: any = {
    userID: localStorage.getItem('userId') !== null ? localStorage.getItem('userId') : '1'
  };
  function handleSubmit(event: any) {
    event.preventDefault();
    const data = new FormData(event.target);
    // const summary: any = data.get('Summary');
    // if (summary.length < 5) {
    //   setSummaryValidate(false);
    //   return;
    // }
    // setSummaryValidate(true);

    const issueData = {
      summary: data.get('Summary'),
      type: data.get('Type'),
      projectID: data.get('Project'),
      description: data.get('Description'),
      priority: data.get('Priority'),
      status: 1,
      assignee: data.get('Asignee'),
      tags: [data.get('Tags')],
      sprint: data.get('Sprint'),
      storyPoint: data.get('Story')
    };
    axios
      .post('https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue', issueData, {
        headers: headers
      })
      .then((response: any) => {
        localStorage.setItem('issueId', response.data['issueId']);
        navigate('/dashboard');
      })
      .catch((error: any) => {
        console.log(error.response);
      });
  }

  useEffect(() => {
    async function getRes() {
      const response = await axios.get(
        'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/user',
        { headers: headers }
      );
      setAllUser(response.data);
    }
    getRes();
  }, []);

  useEffect(() => {
    async function getRes() {
      const response = await axios.get(
        'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project',
        { headers: headers }
      );
      setAllProjects(response.data);
    }
    getRes();
  }, []);

  return (
    <React.Fragment>
      <div className={classes['issue-container']}>
        <div className={classes.sidebar}>
          <img src={Tracker} className={classes.sideImg} alt="" />
          <div className={classes['link-div']}>
            <Link to="/dashboard">{t('PROJECT BOARD')}</Link>
            <Link to="/create_issue" className={classes.active}>
              <p className={classes.link}>{t('CREATE ISSUES')}</p>
            </Link>
            <Link to="/create_issue">{t('CREATE PROJECTS')}</Link>
          </div>
          <Language flag={false} />
        </div>
        <div>
          <NavBar flag={false} />
          <div className={classes.content}>
            <h1 className={classes.h1}>{t('Create User Stories/Tasks/Bugs')}</h1>
            <form onSubmit={handleSubmit}>
              <div className={classes['input-container']}>
                <label htmlFor={classes.summary}>{t('Summary')}</label>
                <input
                  type="text"
                  placeholder={t('Add Summary')}
                  className={classes.summary}
                  name="Summary"
                />
                {/* {!summaryValidate && <p>jbdsibsdib</p>} */}
              </div>
              <div className={classes['select-input']}>
                <div className={classes['input-container']}>
                  <label htmlFor={classes.select}>{t('Type')}</label>
                  <select className={classes.select} name="Type">
                    <option disabled selected hidden>
                      {t('Select')}
                    </option>
                    <option value="1">{t('BUG')}</option>
                    <option value="2">{t('TASK')}</option>
                    <option value="3">{t('STORY')}</option>
                  </select>
                </div>
                <div className={classes['input-container']}>
                  <label htmlFor={classes.select}>{t('Project')}</label>
                  <select className={classes.select} name="Project">
                    <option selected style={{ display: 'none' }}>
                      {t('Select')}
                    </option>
                    {allProjects.map((project) => (
                      <option key={project['projectID']} value={project['projectID']}>
                        {project['projectID']}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={classes['input-container']}>
                <label htmlFor="">{t('Description')}</label>
                <textarea
                  cols={10}
                  rows={4}
                  name="Description"
                  className={classes.description}
                  placeholder={t('Write description')}
                />
              </div>

              <div className={classes['select-input']}>
                <div className={classes['input-container']}>
                  <label htmlFor={classes.select}>{t('Priority')}</label>
                  <select className={classes.select} name="Priority">
                    <option selected disabled hidden>
                      Select
                    </option>
                    <option value="1">LOW</option>
                    <option value="2">MEDIUM</option>
                    <option value="3">HIGH</option>
                  </select>
                </div>

                <div className={classes['input-container']}>
                  <label htmlFor={classes.select}>{t('Asignee')}</label>
                  <select className={classes.select} name="Asignee">
                    <option selected disabled hidden>
                      {t('Select')}
                    </option>
                    {allUser.map((user) => (
                      <option key={user['id']} value={user['id']}>
                        {user['name']}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={classes['select-input']}>
                <div className={classes['input-container']}>
                  <label htmlFor={classes.select}>{t('Tags')}</label>
                  <select className={classes.select} name="Tags">
                    <option selected disabled hidden>
                      {t('Select')}
                    </option>
                    <option>{t('React')}</option>
                    <option>Hu-22</option>
                    <option>HashedIn</option>
                  </select>
                </div>

                <div className={classes['input-container']}>
                  <label htmlFor={classes.select}>{t('Sprint')}</label>
                  <select className={classes.select} name="Sprint">
                    <option selected disabled hidden>
                      {t('Select')}
                    </option>
                    <option>React_1</option>
                    <option>React_2</option>
                    <option>React_3</option>
                  </select>
                </div>
              </div>
              <div className={classes['input-container']}>
                <label htmlFor="">{t('Story Points')}</label>
                <input
                  type="number"
                  name="Story"
                  min="1"
                  max="12"
                  className={classes.story}
                  placeholder="1,2,3..."
                />
              </div>
              <div className={classes.button}>
                <button className={classes.reset}>{t('RESET')}</button>
                <button className={classes.create}>{t('CREATE')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Issue;
