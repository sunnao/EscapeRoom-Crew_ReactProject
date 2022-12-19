import React from 'react';
import tw from 'tailwind-styled-components';
import RecruitTypeIcon from '../components/recruit/RecruitTypeIcon';
import { RegionButton } from '../components/buttons/Buttons';
import markerBw from '../assets/images/icon/marker-bw.png';
import markerColor from '../assets/images/icon/marker-color.png';

const BackGround = tw.div`
  w-screen h-screen flex justify-center items-center flex-col bg-cover
`;

const RecruitMap = () => {
  return (
    <BackGround className='flex-col' style={{ backgroundImage: 'url(images/backgrounds/bg3.png)' }}>
      <UpperPart>
        <RecruitTypeIcon></RecruitTypeIcon>
        <RegionButtonsContainer>
          <RegionButton title={'홍대'}></RegionButton>
          <RegionButton title={'강남'}></RegionButton>
          <RegionButton title={'건대'}></RegionButton>
        </RegionButtonsContainer>
        <MarkerDescriptions className='flex'>
          <Marker src={markerColor} alt='marker-color' description={'모집중'}></Marker>
          <Marker src={markerBw} alt='marker-bw' description={'모집완료'}></Marker>
        </MarkerDescriptions>
      </UpperPart>
      <LowerPart className='flex'>
        <BanggaCharacter />
        <MapContainer />
        <InputContainer>지도입니다</InputContainer>
      </LowerPart>
    </BackGround>
  );
};

const Marker = (props) => {
  return (
    <div className='flex flex-col mx-1 h-10'>
      <img src={props.src} alt={props.alt} className='w-10'></img>
      <div>{props.description}</div>
    </div>
  );
};

const MapContainer = () => {
  return (
    <div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

const BanggaCharacter = () => {
  return (
    <div>
      <img></img>
    </div>
  );
};

const UpperPart = tw.div`
  flex
`;

const LowerPart = tw.div`
  flex
`;

const MarkerDescriptions = tw.div`
  flex-row
`;

const RegionButtonsContainer = tw.div`
  flex
`;

const InputContainer = tw.div`
  w-[500px] h-[500px] bg-white
`;

export default RecruitMap;
