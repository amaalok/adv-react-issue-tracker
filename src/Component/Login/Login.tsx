import React from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import Tracker from '../../assests/images/Icon.png';
import SideImg from '../../assests/images/sideImg.png';
import classes from './Login.module.css';
const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.sidebar}>
        <img src={Tracker} className={classes.tracker} />
        <img src={SideImg} className={classes.tracker} />
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className={classes.dropdown}>
              LANGUAGE
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
              <Dropdown.Item href="#/action-3">French</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className={classes['login_section']}>
        <Form className={classes.form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="**********" />
          </Form.Group>
          <Button variant="dark" className={classes.button} type="submit">
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
