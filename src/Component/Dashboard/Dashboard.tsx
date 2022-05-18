import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';
import classes from './Dashboard.module.css';

const Dashboard = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [user, setUser] = useState([]);
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
      // console.log(response.data[0].name);
      setUser(response.data[0].name);
      // console.log('user', user);
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
  if (allProjects.length <= 0) {
    return <h1>Hello</h1>;
  }
  return (
    <React.Fragment>
      <div className={classes['dashboard-container']}>
        <Sidebar />
        <div className={classes.content}>
          <NavBar />
          <div className={`row ${classes['text-home']}`}>
            <h1 className="col">Project Details</h1>
            <button className={`btn btn-sm btn-dark ${classes.button}`}>VIEW INSIGHT</button>
          </div>
          <div className={classes['input-container']}>
            <label htmlFor={classes.select}>Project Name</label>
            <select className={classes.select} name="Priority">
              <option selected disabled hidden>
                Select
              </option>
              {allProjects.map((project) => (
                <option key={project['projectID']} value={project['projectID']}>
                  {project['projectName']}
                </option>
              ))}
            </select>

            <label htmlFor={classes.select}>Project Owner</label>
            <input type="text" className={classes.summary} name="project Owner" value={user} />

            <label htmlFor={classes.select}>Filter Asignee</label>
            <select className={classes.select} name="Priority">
              <option selected disabled hidden>
                Select
              </option>
              {allProjects.map((project) => (
                <option key={project['projectID']} value={project['projectID']}>
                  {project['projectName']}
                </option>
              ))}
            </select>

            <label htmlFor={classes.select}>Filter Priority</label>
            <select className={classes.select} name="Priority">
              <option selected disabled hidden>
                Select
              </option>
              <option value="1">LOW</option>
              <option value="2">MEDIUM</option>
              <option value="3">HIGH</option>
            </select>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
