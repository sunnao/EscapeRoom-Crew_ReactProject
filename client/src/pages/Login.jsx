import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { showForgotAtom } from '../recoil/login';
import Forgot from '../modals/Forgot';
import Background from '../components/common/Background';
import Navigators from '../components/common/Navigators';
import { Keys } from '../constants/Keys';
import { setCookie } from '../utils/cookie';
import { post } from '../utils/api';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgot, setShowForgot] = useRecoilState(showForgotAtom);
  const onForgotBtn = (e) => {
    e.preventDefault();
    setShowForgot(true);
  };
  const onClickregister = (e) => {
    e.preventDefault();
    navigate('/register');
  };
  const loginRequest = async () => {
    try {
      const response = await post('/api/Users/login', { email, password });
      const accessToken = response.accessToken;
      const userId = jwt_decode(accessToken).userId;
      setCookie(Keys.LOGIN_TOKEN, accessToken);
      setCookie(Keys.USER_ID, userId);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    loginRequest();
  };

  return (
    <Background img={'bg2'}>
      <Navigators />
      <div className='w-full flex h-[70%] justify-center items-center'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={onSubmit}>
          <label>
            이메일:
            <input
              className='
            shadow
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            '
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            비밀번호:
            <input
              className='
            shadow
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            '
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <div className='flex items-center justify-between'>
            <button
              className='mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              type='submit'>
              로그인
            </button>
          </div>
          <div className='flex items-center justify-between text-sm text-[#878787]'>
            <button onClick={onClickregister}>회원가입</button>
            <button onClick={onForgotBtn}>비밀번호 분실</button>
          </div>
        </form>
        {showForgot && <Forgot />}
      </div>
    </Background>
  );
};

export default Login;
