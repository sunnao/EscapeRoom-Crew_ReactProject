import React from 'react';
import tw from 'tailwind-styled-components';
import Footer from '../components/common/Footer';
import Navigators from '../components/common/Navigators';
import BackgroundScroll from '../components/common/BackgroundScroll';
import { useNavigate, Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const onScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  const onScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const audioRef = useRef(null);
  useEffect(() => {
    if (localStorage.getItem('isMusicPlaying') === 'true') {
      audioRef.current.play();
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      localStorage.setItem('isMusicPlaying', true);
    } else {
      audioRef.current.pause();
      localStorage.setItem('isMusicPlaying', false);
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('isMusicPlaying', !audioRef.current.paused);
    });
  }, []);

  return (
    <BackgroundScroll img={'bg1'}>
      <Navigators />
      <div className='h-full w-full pb-[7%] '>
        <div className='h-full w-full flex flex-col '>
          <div className='w-full h-2/5 flex justify-center'>
            <사다리꼴2>
              <사다리꼴
                onClick={() => {
                  navigate('/login');
                }}>
                <div className='absolute top-[-110px] left-[60px]'>매칭 리스트 보기!</div>
              </사다리꼴>
            </사다리꼴2>
          </div>
          <div className='w-full h-2/5 flex justify-center items-center'>
            <Link to='/login'>
              <SmallBtn className='bg-[#3F51A2]'>로그인</SmallBtn>
            </Link>
            <Link to='/register'>
              <SmallBtn className='bg-[#4497D4]'>회원가입</SmallBtn>
            </Link>
          </div>
          <div className='w-[90%] mx-auto h-[10%] flex justify-end'>
            <audio ref={audioRef} src='/sounds/EverybodyFalls.mp3'></audio>
            <SmallBtn className='h-16 bg-[#DBB2E6]' onClick={toggleMusic}>
              BGM
            </SmallBtn>
          </div>
          <button
            onClick={onScrollDown}
            className='w-[90%] text-xl font-semibold  mx-auto h-[10%] flex justify-end items-center'>
            이용규칙 보기
          </button>
        </div>
      </div>
      <NoticeDiv>
        <div className='flex w-full'>
          <p className='w-[10%] h-full'></p>
          <p className='text-4xl font-semibold mx-auto'>NOTICE</p>
          <button onClick={onScrollUp} className='w-[10%] text-xl font-semibold '>
            메인화면으로
          </button>
        </div>
        <p className='mt-[20px] mb-[20px]'>아래 내용으로 3번 이상 신고된 계정은 이용이 제한될 수 있습니다.</p>
        <div className='flex flex-row space-x-10'>
          <NoticeCard className='border w-[230px] h-[400px] p-10 flex flex-col items-center'>
            <div className='border w-[150px] h-[150px]'></div>
            <div className='mt-6'>노쇼 금지</div>
            <div className='w-[150px] h-[120px] text-center flex justify-center items-center'>
              매칭된 팀원들과의 약속을 꼭 지켜주세요
            </div>
          </NoticeCard>
          <div className='border w-[230px] h-[400px] p-10 flex flex-col  items-center'>
            <div className='border w-[150px] h-[150px]'></div>
            <div className='mt-6'>지각 금지</div>
            <div className='w-[150px] h-[120px] text-center flex justify-center items-center'>
              원활한 게임 진행을 위해 게임 시작 최소 10분 전에 약속장소에 도착하셔야 합니다
            </div>
          </div>
          <div className='border w-[230px] h-[400px] p-10 flex flex-col  items-center'>
            <div className='border w-[150px] h-[150px]'></div>
            <div className='mt-6'>매너 필수</div>
            <div className='w-[150px] h-[120px] text-center flex justify-center items-center'>
              즐거운 게임을 위해 팀원들에게 매너를 지켜주세요
            </div>
          </div>
        </div>
      </NoticeDiv>
      <Footer />
    </BackgroundScroll>
  );
};

const NoticeDiv = tw.div` 
  w-[1300px] 
  h-[550px] 
  mb-[160px] 
  flex 
  flex-col 
  justify-center 
  items-center 
`;

const NoticeCard = tw.div`
  border 
  w-[230px] 
  h-[400px] 
  p-10 
  flex flex-col items-center
`;

const 사다리꼴 = tw.button`
  w-[640px]
  border-t-[120px] 
  border-t-[#E150A9]
  border-l-[25px] 
  border-r-[25px] 
  border-x-transparent
  text-white
  text-[70px]
  top-[-130px]
  left-[-2.5%]
  absolute
  hover:border-t-white
  hover:text-[#E150A9]
`;
const 사다리꼴2 = tw.div`
  w-[660px]
  border-t-[140px] 
  border-t-white
  border-l-[25px] 
  border-r-[25px] 
  border-x-transparent
  mt-[18%]
  relative
`;
const SmallBtn = tw.button`
  px-4 py-2 border-8 rounded-3xl border-white
  text-white text-2xl font-bold ml-4
`;

export default Home;
