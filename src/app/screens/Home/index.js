import React, { useCallback } from 'react';
import { t } from 'i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CustomButton from '../../components/CustomButton';
import { Routes } from '../../constants';
import TrackingRedux from '../../../redux/TrackingRedux';

function Home() {
  const dispatch = useDispatch();

  const addClick = useCallback(url => dispatch(TrackingRedux.addClick(url)), [dispatch]);

  const history = useHistory();

  const handleAddressesOnClick = useCallback(() => history.push(Routes.ADDRESSES), [history]);
  const handleLocationsOnClick = useCallback(() => history.push(Routes.LOCATIONS), [history]);

  return (
    <div
      onClick={() => {
        addClick(Routes.HOME);
      }}
    >
      <h1 className="title">{t('Home:title')}</h1>
      <div className="row space-around m-top-8">
        <CustomButton label={t('Home:addressesButtonLabel')} onClick={handleAddressesOnClick} />
        <CustomButton label={t('Home:locationButtonLabel')} onClick={handleLocationsOnClick} />
      </div>
    </div>
  );
}

export default Home;
