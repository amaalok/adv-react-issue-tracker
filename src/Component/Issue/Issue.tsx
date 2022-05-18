import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from './Issue.module.css';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

const Issue = () => {
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
        <Sidebar />
        <div>
          <NavBar />
          <div className={classes.content}>
            <h1 className={classes.h1}>Create User Stories/Tasks/Bugs</h1>
            <form onSubmit={handleSubmit}>
              <div className={classes['input-container']}>
                <label htmlFor={classes.summary}>Summary</label>
                <input
                  type="text"
                  placeholder="Add Summary"
                  className={classes.summary}
                  name="Summary"
                />
                {/* {!summaryValidate && <p>jbdsibsdib</p>} */}
              </div>
              <div className={classes['input-container']}>
                <label htmlFor={classes.select}>Type</label>
                <select className={classes.select} name="Type">
                  <option disabled selected hidden>
                    Select
                  </option>
                  <option value="1">BUG</option>
                  <option value="2">TASK</option>
                  <option value="3">STORY</option>
                </select>
              </div>
              <div className={classes['input-container']}>
                <label htmlFor={classes.select}>Project</label>
                <select className={classes.select} name="Project">
                  <option selected style={{ display: 'none' }}>
                    Select
                  </option>
                  {allProjects.map((project) => (
                    <option key={project['projectID']} value={project['projectID']}>
                      {project['projectID']}
                    </option>
                  ))}
                </select>
              </div>
              <div className={classes['input-container']}>
                <label htmlFor="">Description</label>
                <textarea cols={10} rows={4} name="Description"></textarea>
              </div>

              <div className={classes['input-container']}>
                <label htmlFor={classes.select}>Priority</label>
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
                <label htmlFor={classes.select}>Asignee</label>
                <select className={classes.select} name="Asignee">
                  <option selected disabled hidden>
                    Select
                  </option>
                  {allUser.map((user) => (
                    <option key={user['id']} value={user['id']}>
                      {user['name']}
                    </option>
                  ))}
                </select>
              </div>

              <div className={classes['input-container']}>
                <label htmlFor={classes.select}>Tags</label>
                <select className={classes.select} name="Tags">
                  <option selected disabled hidden>
                    Select
                  </option>
                  <option>React</option>
                  <option>Hu-22</option>
                  <option>HashedIn</option>
                </select>
              </div>

              <div className={classes['input-container']}>
                <label htmlFor={classes.select}>Sprint</label>
                <select className={classes.select} name="Sprint">
                  <option selected disabled hidden>
                    Select
                  </option>
                  <option>React_1</option>
                  <option>React_2</option>
                  <option>React_3</option>
                </select>
              </div>

              <div className={classes['input-container']}>
                <label htmlFor="">Story Points</label>
                <input type="number" name="Story" min="1" max="12" />
              </div>
              <div className={classes.button}>
                <button className="btn btn-light">Reset</button>
                <button className="btn btn-dark">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Issue;
