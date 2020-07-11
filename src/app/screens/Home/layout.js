import React from 'react';
import { t } from 'i18next';

import Header from '../../components/Header';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={`column ${styles.background}`}>
      <Header />
      <div className={`column ${styles.container}`}>
        <h1 className={`${styles.title} m-top-3`}>{t('Home:title')}</h1>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
