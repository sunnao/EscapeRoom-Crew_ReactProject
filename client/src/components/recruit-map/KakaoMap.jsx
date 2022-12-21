import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { cafeMockData } from '../../constants/cafeMockData';
import { regionCoordinate } from '../../constants/regionCoordinate';
import markerColor from '../../assets/images/icon/marker-color.png';

export default function KakaoMap({ region }) {
  return (
    <Map
      center={regionCoordinate[region]}
      style={{
        width: '800px',
        height: '700px',
      }}
      level={5}>
      {cafeMockData.map((cafe) => (
        <MapMarker
          key={`${cafe.title}-${cafe.lat}-${cafe.lng}`}
          position={{ lat: cafe.lat, lng: cafe.lng }}
          image={{
            src: markerColor,
            size: {
              width: 35,
              height: 35,
            },
          }}
          title={cafe.title}
        />
      ))}
    </Map>
  );
}
