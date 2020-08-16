import React from 'react';
import { NavLink } from 'react-router-dom';
import { SpeakerphoneOutline, ChartBarOutline } from 'heroicons-react';
import styles from './menu.module.css';

const Menu = () => (
  <ul className={styles.menu}>
    <li className={styles.menuItem}>
      <NavLink to="/" className={styles.menuItem_link} activeClassName={styles.menuItem_selected}>
        <SpeakerphoneOutline />
        Issues
      </NavLink>
    </li>
    <li className={styles.menuItem}>
      <NavLink to="/dashboard" className={styles.menuItem_link}>
        <ChartBarOutline />
        Dashboard
      </NavLink>
    </li>
  </ul>
);

export default Menu;
