import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { t } from 'i18next';
import { Replay } from '@material-ui/icons';
import { Tooltip, Fab } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Map from '../../components/Map';
import LocalStorageService from '../../../services/LocalStorageService';
import { Routes } from '../../constants';

import styles from './styles.module.scss';

function MapScreen() {
  const history = useHistory();
  const locations = useSelector(state => state.geocoding.locations);
  const distance = useSelector(state => state.geocoding.distance);
  const requesting = useSelector(state => state.geocoding.requesting);
  const error = useSelector(state => state.geocoding.error);

  const handleReplayOnClick = useCallback(() => history.push(Routes.HOME), [history]);

  return (
    <>
      <Map locations={locations.length ? locations : LocalStorageService.getLocations()} />
      <div className="row middle center m-top-9">
        {!requesting && (
          <span className={styles.distanceText}>
            {error ? (
              <span className={styles.errorMessage}>{t('Map:distanceCalculationError')}</span>
            ) : (
              <>
                {(distance || LocalStorageService.getDistance()) && (
                  <>
                    {t('Map:distanceBetweenAddresses')}
                    <strong className={styles.distanceNumber}>
                      {` ${distance ? distance.km : LocalStorageService.getDistance().km}km - ${
                        distance ? distance.mi : LocalStorageService.getDistance().mi
                      }mi.`}
                    </strong>
                  </>
                )}
              </>
            )}
          </span>
        )}
        <Tooltip title={t('Map:tryAgain')} className={styles.tooltip} onClick={handleReplayOnClick}>
          <Fab color="primary">
            <Replay className={styles.replayIcon} />
          </Fab>
        </Tooltip>
      </div>
    </>
  );
}

export default MapScreen;
