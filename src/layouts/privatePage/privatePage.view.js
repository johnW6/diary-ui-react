import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../../components/header';
import styles from './privatePage.module.css';

const PrivatePage = ({ children }) => (
  <>
    <Header />
    <div className={styles.container}>
      {children}
    </div>
  </>
);

PrivatePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivatePage;
