import React, { useCallback } from 'react';
import { t } from 'i18next';
import { useHistory } from 'react-router-dom';

import CustomButton from '../../components/CustomButton';
import { Routes } from '../../constants';

function Home() {
  const history = useHistory();

  const handleAddressesOnClick = useCallback(() => history.push(Routes.ADDRESSES), [history]);

  return (
    <>
      <h1 className="title">{t('Home:title')}</h1>
      <div className="row space-around m-top-8">
        <CustomButton label={t('Home:addressesButtonLabel')} onClick={handleAddressesOnClick} />
        <CustomButton label={t('Home:locationButtonLabel')} />
      </div>
    </>
  );
}

export default Home;
