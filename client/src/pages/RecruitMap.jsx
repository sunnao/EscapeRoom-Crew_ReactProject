import React from 'react';
import tw from 'tailwind-styled-components';
import Background from '../components/common/Background';
import RecruitTypeIcon from '../components/recruit/RecruitTypeIcon';
import { RegionButton } from '../components/buttons/Buttons';
import markerBw from '../assets/images/icon/marker-bw.png';
import markerColor from '../assets/images/icon/marker-color.png';

const RecruitMap = () => {
  return (
    <Background img={'bg3'}>
      <UpperPart className=' flex flex-col'>
        <RecruitTypeIcon></RecruitTypeIcon>
        <RegionButtonsContainer>
          <RegionButton title={'홍대'}></RegionButton>
          <RegionButton title={'강남'}></RegionButton>
          <RegionButton title={'건대'}></RegionButton>
        </RegionButtonsContainer>
      </UpperPart>
      <LowerPart className='flex flex-col px-[10vw]'>
        <MarkerDescriptions className='flex ml-auto mt-4 mb-8 drop-shadow-md'>
          <Marker src={markerColor} alt='marker-color' description={'모집중'}></Marker>
          <Marker src={markerBw} alt='marker-bw' description={'모집완료'}></Marker>
        </MarkerDescriptions>
        <MapContainer></MapContainer>
        <BanggaCharacter />
      </LowerPart>
    </Background>
  );
};

const Marker = (props) => {
  return (
    <div className='flex flex-col mx-1 h-10'>
      <img src={props.src} alt={props.alt} className='w-10 m-auto'></img>
      <div>{props.description}</div>
    </div>
  );
};

const MapContainer = () => {
  return <div className='w-[1250px] h-[700px] bg-white opacity-60 rounded-2xl'>지도입니다</div>;
};

const BanggaCharacter = () => {
  return (
    <div>
      <img></img>
    </div>
  );
};

const UpperPart = tw.div`
  px-[10vw]
`;

const LowerPart = tw.div`
  px-[10vw]
`;

const MarkerDescriptions = tw.div`
  flex-row
`;

const RegionButtonsContainer = tw.div`
  m-auto
`;

export default RecruitMap;
