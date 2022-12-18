import React from 'react';
import tw from 'tailwind-styled-components';
import Profile from '../components/common/Profile';
import { useNavigate } from 'react-router-dom';

// border-trbl
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BackGround style={{ backgroundImage: 'url(images/backgrounds/bg1.png)' }}>
        <div>
          <Container>
            <ProfileImg src={process.env.PUBLIC_URL + '/images/user-profile/지현.jpeg'} alt='프로필 사진' />
          </Container>
        </div>
        <NavbarBg />
        <div className='flex justify-center space-x-3 fixed z-10 top-2'>
          <button
            type='button'
            className='px-1 py-1 border-2 bg-skyblue-1 border-white text-gray-200 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
            onClick={() => navigate('/')}>
            🏚
          </button>
          <button
            type='button'
            className=' px-1 py-1 border-2 bg-skyblue-1 border-white text-gray-200 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
            🏚
          </button>
          <button
            type='button'
            className=' px-1 py-1 border-2 bg-skyblue-1 border-white text-gray-200 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
            🏚
          </button>
          <button
            type='button'
            className=' px-1 py-1 border-2 bg-skyblue-1 border-white text-gray-200 font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
            🏚
          </button>
        </div>
        <ContentBox className='flex-col'>
          <p>홈화면1</p>
          <p>홈화면2</p>
          <p>홈화면3</p>
          <button className='border-white border-solid border-2 mt-16 mb-40' onClick={() => navigate('/recruit-list')}>
            매칭리스트보기
          </button>
          <div>
            <button className='border-white border-solid border-2 mx-1' onClick={() => navigate('/login')}>
              로그인
            </button>
            <button className='border-white border-solid border-2' onClick={() => navigate('/register')}>
              회원가입
            </button>
          </div>
        </ContentBox>
      </BackGround>
    </div>
  );
};
// w-screen h-screen flex justify-center items-center bg-no-repeat

const BackGround = tw.div`
w-screen h-screen flex flex-col justify-center items-center bg-cover
`;
const ContentBox = tw.div`
  mx-auto
  flex
  justify-center
  items-center
  font-bold
  mt-0
  w-[300px]
  h-[400px] 
  border-4
`;
const NavbarBg = tw.div`
  fixed 
  top-0

  w-[300px] 
  h-[40px]
  
  border-solid 
  border-t-[40px] 
  border-t-black 
  border-l-8 
  border-r-8 
  border-x-transparent
`;
const Container = tw.div`
  fixed
  top-4
  w-[40px]
  h-[40px]
  right-8
`;

const ProfileImg = tw.img`
  absolute
  top-0
  left-0
  w-full
  h-full
  rounded-[50%]
  border-2
  border-cyan-500
  object-cover
`;

export default Home;
