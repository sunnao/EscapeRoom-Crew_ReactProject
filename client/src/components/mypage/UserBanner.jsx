import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import { ApiUrl } from '../../constants/ApiUrl';
import Review from '../../modals/Review';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const UserBanner = ({ matchingList }) => {
  const [visible, setVisible] = useState(false);
  const [reviewData, setReviewData] = useState([]);
  const navigate = useNavigate();

  const fetchReviewData = async () => {
    const data = await api.get(ApiUrl.SHORT_EVALUATE_INFO);
    setReviewData(data.reverse());
  };

  useEffect(() => {
    fetchReviewData();
  }, []);

  return (
    <>
      <Container>
        <Wrapper onClick={() => navigate('/matching-list')}>
          <Title>매칭 횟수</Title>
          <Count>{matchingList.length}회</Count>
        </Wrapper>
        <div className='border-l-[1px] border-l-slate-800 h-[80%]'></div>
        <Wrapper onClick={() => setVisible(!visible)}>
          <Title>받은 매너 평가</Title>
          <Count>{reviewData.length}개</Count>
        </Wrapper>
      </Container>
      {visible && <Review setVisible={setVisible} reviewData={reviewData} />}
    </>
  );
};

export default UserBanner;

const Container = tw.div`
  w-[700px]
  h-[15vh]
  bg-white
  bg-opacity-50
  rounded-[15px]
  mb-[30px]

  flex
  items-center
`;

const Wrapper = tw.div`
  cursor-pointer
  w-full

  flex
  flex-col
  items-center
`;

const Title = tw.h3`
  text-2xl
`;

const Count = tw.span`
  text-3xl
`;
