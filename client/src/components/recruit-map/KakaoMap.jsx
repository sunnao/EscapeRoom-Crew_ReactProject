import React, { useState } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';
import { cafeMockData } from '../../constants/cafeMockData';
import { regionCoordinate } from '../../constants/regionCoordinate';
import markerColor from '../../assets/images/icon/marker-color.png';

export default function KakaoMap({ region }) {
  const MarkerContainer = ({ position, content }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position}
        image={{
          src: markerColor,
          size: {
            width: 35,
            height: 35,
          },
        }}
        clickable={true}
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}>
        {isVisible && content}
      </MapMarker>
    );
  };

  return (
    <Map
      center={regionCoordinate[region]}
      style={{
        width: '800px',
        height: '700px',
      }}
      level={5}>
      {cafeMockData.map((cafe) => (
        <MarkerContainer
          key={`${cafe.title}-${cafe.lat}-${cafe.lng}`}
          position={{ lat: cafe.lat, lng: cafe.lng }}
          content={cafe.title}
        />
      ))}
    </Map>
  );
}
