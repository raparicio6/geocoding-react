import React from 'react';
import { t } from 'i18next';

import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';

import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <Header />
      <div className={`column ${styles.background}`}>
        <div className={`column ${styles.container}`}>
          <h1 className={styles.title}>{t('Home:title')}</h1>
          <div className="row space-around m-top-8">
            <CustomButton label={t('Home:addressesButtonLabel')} />
            <CustomButton label={t('Home:locationButtonLabel')} />
          </div>
        </div>
      </div>
    </>
  );
}

Home.propTypes = {};

export default Home;
