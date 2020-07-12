import React, { useCallback } from 'react';
import { t } from 'i18next';

import Map from '../../components/Map';

function MapScreen() {
  return (
    <Map
      locations={[
        {
          lat: -34.6037,
          lng: -58.3816
        },
        {
          lat: 35.8617,
          lng: 104.1954
        }
      ]}
    />
  );
}

export default MapScreen;
