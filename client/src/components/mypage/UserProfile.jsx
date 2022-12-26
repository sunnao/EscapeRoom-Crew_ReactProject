import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileWithHat from '../common/ProfileWithHat';
import userImg from '../../assets/images/user-profile/지현.jpeg';

const UserProfile = ({ userData }) => {
  const nickName = userData.nickName;
  const userIntro = userData.userIntro;
  const navigate = useNavigate();

  return (
    <div>
      <ProfileWithHat img={userImg} />
      <div className='pl-[15px]'>
        <h2 className='font-bold text-3xl'>{nickName}</h2>
        <div className='font-medium text-xl mb-[3px]'>{userIntro}</div>
        <button
          onClick={() => navigate('/mypage/edit')}
          className='font-semibold text-white border-4 bg-amber-500 shadow-lg shadow-gray-500/50 my-[10px] px-[15px] py-[5px] rounded-lg'>
          회원정보 수정
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
