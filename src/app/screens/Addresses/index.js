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
import { ADDRESSES_NOT_MATCHED_ERROR, ADDRESS_NOT_MATCHED_ERROR, DEFAULT_ERROR } from '../../constants';

import styles from './styles.module.scss';

function Addresses() {
  const history = useHistory();
  const requesting = useSelector(state => state.geocoding.requesting);
  const error = useSelector(state => state.geocoding.error);
  const dispatch = useDispatch();
  const getGeocodes = useCallback(
    addresses => dispatch(GeocodingRedux.getGeocodesRequest(addresses, history)),
    [dispatch, history]
  );
  const cleanError = useCallback(() => dispatch(GeocodingRedux.cleanError()), [dispatch]);

  const { register, handleSubmit, setValue, watch } = useForm();
  const values = watch();
  useEffect(() => {
    register({ name: 'addressOne' }, { required: true });
    register({ name: 'addressTwo' }, { required: true });
  }, [register]);

  const handleAddressOneOnChange = useCallback(event => setValue('addressOne', event.target.value), [
    setValue
  ]);
  const handleAddressTwoOnChange = useCallback(event => setValue('addressTwo', event.target.value), [
    setValue
  ]);

  const handleOnSubmit = useCallback(data => getGeocodes([data.addressOne, data.addressTwo]), [getGeocodes]);

  return (
    <>
      <h1 className="title">{t('Addresses:title')}</h1>
      <form className={`column center ${styles.form}`} onSubmit={handleSubmit(handleOnSubmit)}>
        <CustomInput
          name="addressOne"
          onChange={handleAddressOneOnChange}
          placeholder={t('Addresses:addressOneExample')}
        />
        <CustomInput
          className="m-top-5"
          name="addressTwo"
          onChange={handleAddressTwoOnChange}
          placeholder={t('Addresses:addressTwoExample')}
        />
        <CustomButton
          disabled={!values.addressOne || !values.addressTwo}
          loading={requesting}
          className={`m-top-5 ${styles.distanceButton}`}
          label={t('Addresses:distanceButton')}
          type="submit"
        />
      </form>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={cleanError} className={styles.snackbarError}>
        <Alert
          variant="filled"
          color="error"
          severity="error"
          onClose={cleanError}
          className={styles.errorMessage}
        >
          {error === ADDRESSES_NOT_MATCHED_ERROR && t('Addresses:addressesNotMatchedError')}
          {error.split(',')[0] === ADDRESS_NOT_MATCHED_ERROR &&
            `${t('Addresses:theAddress')} ${error.split(',')[1]} ${t('Addresses:addressNotMatchedError')}`}
          {error === DEFAULT_ERROR && t('Addresses:defaultErrorMessage')}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Addresses;
