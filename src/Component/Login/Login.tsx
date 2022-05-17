import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';
import Tracker from '../../assests/images/Icon.png';
import SideImg from '../../assests/images/sideImg.png';
import classes from './Login.module.css';
import Language from '../Language/Language';

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.login}>
      <div className={classes.sidebar}>
        <img src={Tracker} className={classes.tracker} />
        <img src={SideImg} className={classes.tracker} />
        <div>
          <Language />
          {/* <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className={classes.dropdown}>
              {t('LANGUAGE')}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {languages.map(({ code, name, country_code }) => (
                <Dropdown.Item key={country_code}>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                  key={country_code}>
                  {name}
                </button>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown> */}
        </div>
      </div>
      <div className={classes['login_section']}>
        <Form className={classes.form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t('Email')}</Form.Label>
            <Form.Control type="email" placeholder={t('Enter your email address')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t('Password')}</Form.Label>
            <Form.Control type="password" placeholder="**********" />
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
