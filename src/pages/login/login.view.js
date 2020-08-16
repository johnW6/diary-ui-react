import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuthentication from '../../hooks/authentication/useAuthentication';
import styles from './login.module.css';
import welcomeImage from '../../assets/images/lime-business-online.png';

const LoginView = () => {
  const { login, isAuthenticated } = useAuthentication();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const {
    register, handleSubmit, errors,
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) {
      history.push(from);
    }
  }, [isAuthenticated]);

  const onSubmit = (data) => {
    login(data.username, data.ytToken);
    history.push('/issues');
  };

  return (
    <div className={styles._container}>
      <div className={styles._left__container}>
        <div className={styles._welcomeMessage__container}>
          <div className={styles._header__container}>
            <span className={styles._header__text}>
              Start your
              <span className={styles._header__text_emphasis}> journey</span>
            </span>
          </div>
          <div className={styles._message__container}>
            <span className={styles._message__text}>
              YouTime helps you track the spent time of your YouTrack issues
            </span>
            <img className={styles._message__img} src={welcomeImage} alt="welcomeImage" />
          </div>
        </div>
      </div>
      <div className={styles._loginForm__container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles._loginForm__box}>
          <span className={styles._loginForm__header}>Login</span>
          <span className={styles._loginForm__message}>
            Provide a username and your password and start your journey
          </span>
          <div className={styles._loginForm__formGroup}>
            <span className={styles._loginForm__label}>Username</span>
            <input
              className={styles._loginForm__inputBox}
              type="text"
              placeholder="username"
              name="username"
              ref={register({ required: true, max: 24, min: 4 })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div className={styles._loginForm__formGroup}>
            <span className={styles._loginForm__label}>Password</span>
            <input
              className={styles._loginForm__inputBox}
              type="text"
              placeholder="password"
              name="password"
              ref={register({ required: true })}
            />
            {errors.ytToken && <span>{errors.username.ytToken}</span>}
          </div>
          <button className={styles._loginForm__button} type="submit">Start here</button>
        </form>
      </div>
    </div>
  );
};

LoginView.propTypes = {};

export default LoginView;
