import React, { useEffect } from 'react';

const { kakao } = window;

let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

const MapContainer = ({ searchPlace }) => {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.55698559918365, 126.92444391816313),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
    const ps = new kakao.maps.services.Places();

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
      });
    }

    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
      }
    }
    ps.keywordSearch(searchPlace, placesSearchCB);
  }, [searchPlace]);

  return (
    <div
      id='myMap'
      style={{
        width: '800px',
        height: '700px',
      }}></div>
  );
};

export default MapContainer;
