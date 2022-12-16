import React from 'react';
import tw from 'tailwind-styled-components';

const BackGround = tw.div`
  w-screen h-screen flex justify-center items-center
`;

const RecruitMap = () => {
  return (
    <div>
      <BackGround
        style={{ backgroundImage: 'url(/images/bg1.png)' }}></BackGround>
      <LocationSelectionBar />
      <MarkerDescription />
      <ViewSelectionBar />
      <BanggaCharacter />
      <MapContainer />
    </div>
  );
};

const LocationSelectionBar = () => {
  <div>
    <button>홍대</button>
    <button>강남</button>
    <button>건대</button>
  </div>;
};

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
  </div>;
};

const MapContainer = () => {
  <div>
    <div>
      <div></div>
      <div></div>
    </div>
    <div></div>
  </div>;
};

const BanggaCharacter = () => {
  <div>
    <img></img>
  </div>;
};

const MarkerDescription = () => {
  <div>
    <div>
      <img></img>
      <div>모집중</div>
    </div>
    <div>
      <img></img>
      <div>모집완료</div>
    </div>
  </div>;
};

export default RecruitMap;
