import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';
import Tracker from '../../assests/images/Icon.png';
import SideImg from '../../assests/images/sideImg.png';
import Language from '../Language/Language';
import { authActions } from '../../Store/authSlice';
import classes from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  // const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailHandler = (event: any) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post('https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/auth/login', {
        email: email,
        password: password
      })
      .then((response: any) => {
        console.log(response.data['userId']);
        localStorage.setItem('userId', response.data['userId']);
        window.location.href = '/dashboard';
        dispatch(authActions.login());
      })
      .catch((error: any) => {
        alert(error.response.data['error']);
        navigate('/');
      });
  };
  return (
    <div className={classes.login}>
      <div className={classes.sidebar}>
        <img src={Tracker} className={classes.tracker} alt="" />
        <img src={SideImg} className={classes.tracker} alt="" />
        <Language flag={true} />
      </div>
      <div className={classes['login_section']}>
        <Form className={classes.form} onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t('Email')}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t('Enter your email address')}
              onChange={emailHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t('Password')}</Form.Label>
            <Form.Control type="password" placeholder="**********" onChange={passwordHandler} />
          </Form.Group>
          <Button variant="dark" className={classes.button} type="submit">
            {t('LOGIN')}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
