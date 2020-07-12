import React, { useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import { arrayOf, shape, number } from 'prop-types';

import Marker from './Marker';

const EMOTIVE_LOCATION = {
  lat: 34.03695,
  lng: -118.44266
};

const fitBounds = (map, maps, bounds) =>
  maps.event.addDomListenerOnce(map, 'idle', () =>
    maps.event.addDomListener(window, 'resize', () => map.fitBounds(bounds))
  );

const getBounds = (maps, locations) => {
  const bounds = new maps.LatLngBounds();
  locations.forEach(location => bounds.extend(new maps.LatLng(location.lat, location.lng)));
  return bounds;
};

const addLocations = (map, maps, locations) => {
  const bounds = getBounds(maps, locations);
  map.fitBounds(bounds);
  fitBounds(map, maps, bounds);
};

function Map({ locations }) {
  const handleOnGoogleApiLoaded = useCallback(
    ({ map, maps }) => locations && addLocations(map, maps, locations),
    [locations]
  );

  return (
    <div style={{ height: '75vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={EMOTIVE_LOCATION}
        defaultZoom={1}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleOnGoogleApiLoaded}
        resetBoundsOnResize
      >
        {locations &&
          locations.map((location, index) => (
            <Marker
              key={`key${location.lat}${location.lng}`}
              lat={location.lat}
              lng={location.lng}
              id={index}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
}

Map.propTypes = {
  locations: arrayOf(
    shape({
      lat: number,
      lng: number
    })
  )
};

export default Map;
