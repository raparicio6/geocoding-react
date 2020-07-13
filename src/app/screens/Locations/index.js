import React, { useEffect, useCallback } from 'react';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import GeocodingRedux from '../../../redux/GeocodingRedux';
import {
  INVALID_LOCATIONS_ERROR,
  LOCATIONS_NOT_MATCHED_ERROR,
  LOCATION_NOT_MATCHED_ERROR
} from '../../constants';

import styles from './styles.module.scss';

const LOCATION_REGEX = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;

function Locations() {
  const history = useHistory();
  const requesting = useSelector(state => state.geocoding.requesting);
  const error = useSelector(state => state.geocoding.error);
  const dispatch = useDispatch();
  const getReverseGeocodes = useCallback(
    locations => dispatch(GeocodingRedux.getReverseGeocodesRequest(locations, history)),
    [dispatch, history]
  );
  const cleanError = useCallback(() => dispatch(GeocodingRedux.cleanError()), [dispatch]);
  const setError = useCallback(err => dispatch(GeocodingRedux.setError(err)), [dispatch]);

  const { register, handleSubmit, setValue, watch } = useForm();
  const values = watch();
  useEffect(() => {
    register({ name: 'latOne' }, { required: true });
    register({ name: 'lngOne' }, { required: true });
    register({ name: 'latTwo' }, { required: true });
    register({ name: 'lngTwo' }, { required: true });
  }, [register]);

  const handleLatOneOnChange = useCallback(event => setValue('latOne', event.target.value), [setValue]);
  const handleLngOneOnChange = useCallback(event => setValue('lngOne', event.target.value), [setValue]);
  const handleLatTwoOnChange = useCallback(event => setValue('latTwo', event.target.value), [setValue]);
  const handleLngTwoOnChange = useCallback(event => setValue('lngTwo', event.target.value), [setValue]);

  const handleOnSubmit = useCallback(
    data => {
      const locationOne = `${data.latOne.trim()},${data.lngOne.trim()}`;
      const locationTwo = `${data.latTwo.trim()},${data.lngTwo.trim()}`;
      if (!locationOne.match(LOCATION_REGEX) || !locationTwo.match(LOCATION_REGEX)) {
        setError(INVALID_LOCATIONS_ERROR);
        return;
      }
      getReverseGeocodes([locationOne, locationTwo]);
    },
    [setError, getReverseGeocodes]
  );

  return (
    <>
      <h1 className="title">{t('Locations:title')}</h1>
      <h2 className={`${styles.subtitle} m-top-7`}>{t('Locations:subtitle')}</h2>
      <form className={`column center ${styles.form}`} onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={`row ${styles.locationOne}`}>
          <div className="column center m-right-2">
            <span className={styles.latLng}>{t('Locations:lat')}</span>
            <CustomInput
              className={`m-top-2 ${styles.input}`}
              name="latOne"
              onChange={handleLatOneOnChange}
              placeholder="34.03695"
            />
          </div>
          <div className="column center m-left-2">
            <span className={styles.latLng}>{t('Locations:long')}</span>
            <CustomInput
              className={`m-top-2 ${styles.input}`}
              name="lngOne"
              onChange={handleLngOneOnChange}
              placeholder="-118.44266"
            />
          </div>
        </div>
        <div className={`row ${styles.locationTwo}`}>
          <div className="column center m-right-2">
            <span className={styles.latLng}>{t('Locations:lat')}</span>
            <CustomInput
              className={`m-top-2 ${styles.input}`}
              name="latTwo"
              onChange={handleLatTwoOnChange}
              placeholder="51.53354"
            />
          </div>
          <div className="column center m-left-2">
            <span className={styles.latLng}>{t('Locations:long')}</span>
            <CustomInput
              className={`m-top-2 ${styles.input}`}
              name="lngTwo"
              onChange={handleLngTwoOnChange}
              placeholder="-0.17932"
            />
          </div>
        </div>
        <CustomButton
          disabled={!values.latOne || !values.lngOne || !values.latTwo || !values.lngTwo}
          loading={requesting}
          className={`m-top-5 ${styles.distanceButton}`}
          label={t('Locations:distanceButton')}
          type="submit"
        />
      </form>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={cleanError} className={styles.snackbarError}>
        <Alert variant="filled" color="error" severity="error" onClose={cleanError}>
          {error === INVALID_LOCATIONS_ERROR && t('Locations:invalidLocationsError')}
          {error === LOCATIONS_NOT_MATCHED_ERROR && t('Locations:locationsNotMatchedError')}
          {error.split(',')[0] === LOCATION_NOT_MATCHED_ERROR &&
            `${t('Locations:theLocation')} ${error.split(',')[1]},${error.split(',')[2]} ${t(
              'Locations:locationNotMatchedError'
            )}`}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Locations;
