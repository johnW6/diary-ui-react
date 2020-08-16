import React from 'react';
import Dropdown from './dropdown';
import Menu from './menu';
import Logo from './logo';
import styles from './header.module.css';

const Header = () => (
  <div className={styles.container}>
    <Logo />
    <Menu />
    <Dropdown />
  </div>
);

export default Header;
