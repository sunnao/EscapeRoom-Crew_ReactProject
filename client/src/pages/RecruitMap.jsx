import React from 'react';
import tw from 'tailwind-styled-components';

const RecruitMap = () => {
  return (
    <div>
      <LocationSelectionBar />
      <ViewSelectionBar />
    </div>
  );
};

const LocationSelectionBar = () => {
    <div>
      <button>홍대</button>
      <button>강남</button>
      <button>건대</button>
    </div>
}

const ViewSelectionBar = () => {
  <div>
    <div>
      <img></img>
      <div>List</div>
    </div>
    <div>
      <img></img>
      <div>Map</div>
    </div>
  </div>
}

const MapContainer = () => {
  <div>
    <div>
      <div></div>
      <div></div>
    </div>
    <div></div>
  </div>
}

export default RecruitMap;
