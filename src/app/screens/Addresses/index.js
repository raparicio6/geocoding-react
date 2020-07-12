import React, { useEffect, useCallback } from 'react';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

import styles from './styles.module.scss';

function Addresses() {
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

  const handleOnSubmit = useCallback(data => console.log(data), []);

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
          className={`m-top-5 ${styles.distanceButton}`}
          label="See distance"
          type="submit"
        />
      </form>
    </>
  );
}

export default Addresses;
