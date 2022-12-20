import React from 'react';
import MapContainer from './MapContainer';

const SearchPlace = ({ region }) => {
  return <MapContainer searchPlace={region + '역 방탈출 카페'} />;
};

export default SearchPlace;
