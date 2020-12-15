import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Routes } from '../../constants';

import logo from './logo.svg';
import styles from './styles.module.scss';

function Header() {
  return (
    <AppBar className={`row center ${styles.appbar}`} position="static">
      <Toolbar className={styles.toolbar}>
        <Link to={Routes.HOME}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
