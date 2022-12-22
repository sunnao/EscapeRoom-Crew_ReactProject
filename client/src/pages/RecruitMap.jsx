import React from 'react';
import { useRecoilValue } from 'recoil';
import tw from 'tailwind-styled-components';

import { regionAtom } from '../recoil/recruit-map';
import Background from '../components/common/Background';
import Navigators from '../components/common/Navigators';
import { RegionButton } from '../components/buttons/Buttons';
import KakaoMap from '../components/recruit-map/KakaoMap';

const RecruitMap = () => {
  const region = useRecoilValue(regionAtom);

  return (
    <Background img={'bg3'}>
      <Navigators />
      <UpperPart className='flex flex-col'>
        <RegionButtonsContainer>
          <RegionButton title={'홍대'}></RegionButton>
          <RegionButton title={'강남'}></RegionButton>
          <RegionButton title={'건대'}></RegionButton>
        </RegionButtonsContainer>
      </UpperPart>
      <LowerPart className='flex flex-col px-[10vw] mt-6'>
        <ViewSection className='overflow-hidden'>
          <KakaoMap region={region}></KakaoMap>
        </ViewSection>
      </LowerPart>
    </Background>
  );
};

const ViewSection = tw.div`
  w-[1250px] h-[700px] bg-white bg-opacity-60 rounded-2xl
`;

const UpperPart = tw.div`
  px-[10vw]
`;

const LowerPart = tw.div`
  px-[10vw]
`;

const RegionButtonsContainer = tw.div`
  m-auto
`;

export default RecruitMap;
