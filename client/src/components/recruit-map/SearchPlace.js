import React, { useState, useEffect } from 'react';
import MapContainer from './MapContainer';

const SearchPlace = ({ region }) => {
  const [place, setPlace] = useState('');

  useEffect(() => {
    setPlace(region);
  }, []);

  return <MapContainer searchPlace={place + '역 방탈출 카페'} />;
};

export default SearchPlace;
