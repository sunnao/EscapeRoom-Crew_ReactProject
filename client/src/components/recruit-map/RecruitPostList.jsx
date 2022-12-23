import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { targetCafeAtom } from '../../recoil/recruit-map';

import { ApiUrl } from '../../constants/ApiUrl';
import * as api from '../../utils/api';
import RecuitPostContainer from '../recruit/RecruitPostContainer';

async function getRecruitingInfo(cafeId) {
  try {
    const cafeRecruitingArr = await api.get(ApiUrl.RECRUITING_INFO, cafeId);
    return cafeRecruitingArr;
  } catch (err) {
    alert(err.message);
  }
}

export default function RecruitPostList() {
  const targetCafe = useRecoilValue(targetCafeAtom);
  const [recruitingInfo, setRecruitingInfo] = useState({});
  const addRecruitingData = async (cafeId) => {
    const cafeRecruitingArr = await getRecruitingInfo(cafeId);
    setRecruitingInfo({ ...recruitingInfo, [cafeId]: cafeRecruitingArr });
  };
  if (targetCafe && !recruitingInfo[targetCafe]) addRecruitingData(targetCafe);

  return (
    <div>
      <div>{recruitingInfo[targetCafe] && recruitingInfo[targetCafe][0].address}</div>
      {recruitingInfo[targetCafe] &&
        recruitingInfo[targetCafe].map((recruitPost) => (
          <RecuitPostContainer key={recruitPost.matchingPostsId} postData={recruitPost} />
        ))}
    </div>
  );
}
