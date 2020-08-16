import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'heroicons-react';
import useAuthentication from '../../../hooks/authentication/useAuthentication';
import styles from './dropdown.module.css';

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useAuthentication();

  return (
    <div className={styles.container} onClick={() => setShowMenu(!showMenu)}>
      <span className={styles.avatar} />
      <ChevronDown fill="#CBD5E0" />
      {showMenu && (
        <div className={styles.contextMenu}>
          <ul className={styles.contextMenu_list}>
            <li className={styles.contextMenu_list__item}>
              <Link className={styles.contextMenu_list__link} to="/">Settings</Link>
            </li>
            <li className={styles.contextMenu_list__item} onClick={logout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
