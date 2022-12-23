import React from 'react';
import BackgroundScroll from '../../components/common/BackgroundScroll';
import tw from 'tailwind-styled-components';
import Withdraw from '../../modals/Withdraw';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { profileImgAtom } from '../../recoil/register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Navigators from '../../components/common/Navigators';
import { useImmer } from 'use-immer';
import { patch } from '../../utils/api';

const EditUserInfo = () => {
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showAddProfileIcon, setShowAddProfileIcon] = useState(false);
  const USER_BASIC_DATA = [
    { inputName: '이름', placeHolder: '김탈출', type: 'text', name: 'userName' },
    { inputName: '닉네임', placeHolder: '위기탈출넘버원', type: 'text', name: 'nickName' },
    { inputName: '휴대전화 번호', placeHolder: '010-1234-5678', type: 'text', name: 'mobileNumber' },
    { inputName: '이메일', placeHolder: 'example@escape.elice', type: 'email', name: 'email' },
    { inputName: '새 비밀번호', placeHolder: '영문, 숫자, 특수문자 조합 최소 8자', type: 'password', name: 'password' },
    {
      inputName: '비밀번호 확인',
      placeHolder: '비밀번호를 다시 한번 입력해주세요',
      type: 'password',
    },
  ];
  const USER_ADD_DATA = [
    { inputName: '한줄소개', placeHolder: '한 줄 소개', type: 'text', name: 'userIntro' },
    { inputName: '성별', options: ['남자', '여자'], type: 'radio', name: 'gender' },
    { inputName: '나이', options: ['10대', '20대', '30대 이상'], type: 'radio', name: 'age' },
    { inputName: '선호 지역', options: ['강남', '건대', '홍대'], type: 'radio', name: 'preferenceLocation' },
    {
      inputName: 'MBTI',
      options: [
        '선택',
        'ISTJ',
        'ISFJ',
        'INFJ',
        'INTJ',
        'ISTP',
        'ISFP',
        'INFP',
        'INTP',
        'ESTP',
        'ESFP',
        'ENFP',
        'ENTP',
        'ESTJ',
        'ESFJ',
        'ENFJ',
        'ENTJ',
      ],
      type: 'select',
      name: 'mbti',
    },
    {
      inputName: '선호 테마',
      options: [
        '없음',
        '추리',
        '미스테리',
        '공포',
        '판타지',
        'SF',
        '모험',
        '로맨스',
        '드라마',
        '감성',
        '범죄',
        '스릴러',
        '액션',
        '19금',
      ],
      type: 'select',
      name: 'preferenceTheme',
    },
    {
      inputName: '비선호 테마',
      options: [
        '없음',
        '추리',
        '미스테리',
        '공포',
        '판타지',
        'SF',
        '모험',
        '로맨스',
        '드라마',
        '감성',
        '범죄',
        '스릴러',
        '액션',
        '19금',
      ],
      type: 'select',
      name: 'nonPreferenceTheme',
    },
  ];

  const [userBasicData, setUserBasicData] = useImmer({});
  const [userAddData, setUserAddData] = useImmer({});

  //token에서 userId를 꺼내서 넣어주기
  const editBasicInfo = () => {
    patch('localhost:3008/api/Users/1', { ...userBasicData, userId: null });
  };
  const editAddInfo = () => {
    patch('localhost:3008/api/Users/1', { ...userAddData, userId: null });
  };
  return (
    <BackgroundScroll img={'bg3'} className='relative'>
      <Navigators />
      <div className='h-[15%] justify-center items-center flex flex-col'>
        <EditProfileIcon showAddProfileIcon={showAddProfileIcon} setShowAddProfileIcon={setShowAddProfileIcon} />
        <UserProfile setShowAddProfileIcon={setShowAddProfileIcon} />
      </div>
      {showWithdraw && <Withdraw setShowWithdraw={setShowWithdraw} />}

      <div className='h-[80%] w-1/2 flex flex-col mx-auto justify-center items-center'>
        <EditBox title={'기본정보 수정'} data={USER_BASIC_DATA} setData={setUserBasicData} userData={userBasicData}>
          <button className='text-gray-500 underline hover:text-black' onClick={() => setShowWithdraw(true)}>
            탈퇴하기
          </button>
          <EditBtn onClick={editBasicInfo}>변경</EditBtn>
        </EditBox>
        <EditBox title={'추가정보 수정'} data={USER_ADD_DATA} setData={setUserAddData} userData={userAddData}>
          <EditBtn onClick={editAddInfo}>변경</EditBtn>
        </EditBox>
      </div>
    </BackgroundScroll>
  );
};

const UserProfile = ({ setShowAddProfileIcon }) => {
  const [profileImg, setProfileImg] = useRecoilState(profileImgAtom);
  return (
    <>
      <div className='w-[160px] h-[160px] rounded-full bg-gray-300 relative'>
        {profileImg && (
          <img className='w-full h-full rounded-full' src={URL.createObjectURL(profileImg)} alt='uploaded image' />
        )}
        <div className='absolute w-10 h-10  top-0 left-[90%]'>
          <button onClick={() => setShowAddProfileIcon(true)}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>
      </div>

      <div>유저닉네임</div>
    </>
  );
};
const EditProfileIcon = ({ showAddProfileIcon, setShowAddProfileIcon }) => {
  const modalStyle = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '26%',
      height: '62%',
      'border-radius': '50px',
      background: '#D0DBF6',
    },
  };
  const [tempProfileImg, setTempProfileImg] = useState(false);
  return (
    <Modal style={modalStyle} isOpen={showAddProfileIcon} onRequestClose={() => setShowAddProfileIcon(false)}>
      <h2 className='text-center text-xl'>프로필 사진을 업로드하세요</h2>
      <div className='w-3/4 h-3/4 flex items-center mx-auto'>
        {tempProfileImg ? (
          <img className='rounded-full w-full h-3/4' src={URL.createObjectURL(tempProfileImg)} alt='uploaded image' />
        ) : (
          <div className='rounded-full bg-gray-400 w-full h-3/4'></div>
        )}
      </div>
      <form>
        <input type='file' onChange={(e) => setTempProfileImg(e.target.files[0])} />
        <div className='w-full flex justify-center mt-4'>
          <EditBtn type='submit'>저장하기</EditBtn>
          <EditBtn>취소하기</EditBtn>
        </div>
      </form>
    </Modal>
  );
};
const EditInput = ({ inputData, setData, userData }) => {
  return (
    <div className='w-full h-8 mb-6 flex'>
      <div className='w-1/5 flex justify-start items-center text-gray-500'>{inputData.inputName}</div>
      <div className='w-[80%] flex'>
        {inputData.options ? (
          inputData.type === 'radio' ? (
            inputData.options.map((option) => (
              <div className='ml-2 text-center' key={inputData.name + option}>
                <label value={option}>{option}</label>
                <input
                  type='radio'
                  name={inputData.inputName}
                  value={option}
                  onChange={(e) => {
                    setData((data) => {
                      data[inputData.name] = e.target.value;
                      console.log(userData);
                    });
                  }}
                />
              </div>
            ))
          ) : (
            <select
              className='border border-black'
              name={inputData.name}
              onChange={(e) => {
                setData((data) => {
                  data[inputData.name] = e.target.value;
                  console.log(userData);
                });
              }}>
              {inputData.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )
        ) : (
          <input
            className='w-full h-full rounded-full pl-3'
            type={inputData.type}
            placeholder={inputData.placeHolder}
            onChange={(e) => {
              setData((data) => {
                data[inputData.name] = e.target.value;
                console.log(userData);
              });
            }}
          />
        )}
      </div>
    </div>
  );
};
const EditBox = ({ data, children, title, setData, userData }) => {
  return (
    <div className='flex flex-col w-full h-1/2 '>
      <div className='border-b-2 border-black  text-2xl'>{title}</div>
      <div className='w-4/5 px-[5%] h-3/4 my-auto bg-red-100 mx-auto rounded-3xl flex flex-col justify-center'>
        {data.map((inputData) => (
          <EditInput key={inputData.name} inputData={inputData} setData={setData} userData={userData} />
        ))}
        <div className='flex justify-end'>{children}</div>
      </div>
    </div>
  );
};

const EditBtn = tw.button`
  text-gray-500 ml-4 bg-white px-5 py-1 rounded-md shadow-lg
`;

export default EditUserInfo;
