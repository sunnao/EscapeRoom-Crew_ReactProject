import { React, Fragment, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Background from '../components/common/Background';
import Navigators from '../components/common/Navigators';
import { RegionButton } from '../components/buttons/Buttons';
// import CafeData from '../mocks/cafeData.json';
// import Paging from '../components/common/Pagination';
import * as Api from '../utils/api';
import { useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CafeList = () => {
  const REGION_DATA = ['전체', '홍대', '강남', '건대'];
  // const [list, setList] = useState(CafeData);
  // const [list, setList] = useState(null);
  const [list, setList] = useState([]);
  //여기서 initial Value를 빈 객체로 줘야했는데 제가 실수했네요 ㅎㅎ😅죄송

  /**원래 작성하신 코드 */
  // useEffect(() => {
  //   const CafeData = async () => {
  //     const data = await Api.get('/api/all');
  //     console.log(data);
  //     setList(data);
  //   };
  // });

  /** 원래 작성하신 코드인 위 부분에서 문제가 되었던 부분을 정리해 드릴게요
   1. CafeData라는 함수를 선언만 하시고 실행을 안하셨습니다. (+컴포넌트 말고 함수명은 소문자로 작성해야해요)
   2. server dev브랜치의 app.js파일을 확인해보니 api요청 주소가 /api/cafe-infos/all이라서 잘못되었습니다.
   3. 함수 선언은 useEffect 바깥, CafeList 컴포넌트 내부에 선언해주셔야합니다. 
   4. useEffect의 dependency를 안 주셨습니다

   useEffect는 한번 잘 공부해서 이해해보셔야할 것 같아요. 
   useEffect를 사용하는 목적이 특정 상황에 따라서 useEffect내부의 함수를 실행시키고 싶은건데
   useEffect 내부에 함수를 선언하시면 useEffect가 실행하는 dependency 조건에 해당될 때마다
   함수가 계속 반복적으로 선언되서 메모리 낭비 등 성능 문제가 발생해요.
   dependency는 useEffect가 2개의 인자를 받는데 첫번째 인자가 callback이고 2번째 인자로는 배열을 받아요
   배열안에 [] 이렇게 비워주면 참조할 dependency(보통 state를 넣어주는걸로 알고있습니다)가 없으니까
   컴포넌트가 mount될때 실행, unmount될때 이렇게 총 2번실행됩니다
   근데 dependency를 안 넣어주시면 아마도 그냥 무한으로 실행될거에요
   그래서 3,4번의 문제를 합친 상태에서라면 useEffect내부에 함수선언+dependency없음
   계속해서 함수가 선언되어서 심각한 문제가 생길거에요
   함수선언을 줄이기 위해서 useCallback이라는 hook도 있는데 이것도 이미 알고 계신가요?? 
   나중에 react components hooks 중요한 것들만 한번 정리해보시면 좋을 것 같아요
   */
  const getCafeData = async () => {
    const data = await Api.get('http://localhost:3008/api/cafe-infos/all');
    console.log(data);
    setList(data);
  };
  useEffect(() => {
    getCafeData();
  }, []);

  const sortByStarRate = () => {
    const newList = [...list];
    newList.sort((a, b) => b.starRate - a.starRate);
    setList(newList);
  };
  const sortByReviewsSum = () => {
    const newList = [...list];
    newList.sort((a, b) => b.reviewsSum - a.reviewsSum);
    setList(newList);
  };
  const [selected, setSelected] = useState('정렬기준');

  return (
    <Background img={'bg2'}>
      <Navigators />
      <ul className='flex flex-row justify-center mx-auto my-5'>
        {REGION_DATA.map((region, index) => (
          <li key={index}>
            <RegionButton title={region} />
          </li>
        ))}
      </ul>

      <div className='border-4 border-blue-500 w-[1200px] h-[600px] flex flex-col '>
        <div className='w-[1200px] h-[50px] flex items-start justify-end'>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className='relative w-40'>
                  <Listbox.Button className='relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'>
                    <span className='flex items-center'>
                      <span className='ml-3 block truncate'>{selected}</span>
                    </span>
                    <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                      <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      <Listbox.Option
                        // key={index}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                          )
                        }
                        value='평점순'
                        onClick={() => {
                          sortByStarRate();
                        }}>
                        {({ selected, active }) => (
                          <>
                            <div className='flex items-center'>
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'ml-3 block truncate',
                                )}>
                                {'평점순'}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                )}>
                                <CheckIcon className='h-5 w-5' aria-hidden='true' />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                      <Listbox.Option
                        // key={index}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                          )
                        }
                        value='리뷰 많은 순'
                        onClick={() => {
                          sortByReviewsSum();
                        }}>
                        {({ selected, active }) => (
                          <>
                            <div className='flex items-center'>
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'ml-3 block truncate',
                                )}>
                                {'리뷰 많은 순'}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                )}>
                                <CheckIcon className='h-5 w-5' aria-hidden='true' />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        <div className='border border-red-600 w-[1200px] h-[500px] grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-6'>
          {list.map((data) => {
            return (
              <div className='border flex px-[27px] items-center' key={data.cafeId}>
                <div className='border w-[100px] h-[100px]'>
                  <img></img>
                </div>
                <div className='ml-3'>
                  <p className='flex w-full justify-start align-center'>
                    <div>{data.cafeName}</div>
                    <a
                      href={`https://search.naver.com/search.naver?&query=${data.cafeName}`}
                      target='_blank'
                      rel='noopener noreferrer nofollow'>
                      <img
                        className='w-5 h-5 rounded-[4px] ml-2'
                        src={process.env.PUBLIC_URL + '/images/icon/naver-icon.png'}
                      />
                    </a>
                  </p>
                  <p>{data.address}</p>
                  <p>{data.homePage}</p>
                  <p>
                    평점 {data.starRate}/10 | 리뷰 {data.reviewsSum}개
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='border w-[1200px] h-[50px] flex justify-center items-center'>
          <button className='w-[25px] h-[25px] text-sm mx-1 text-white bg-blue-1 border-solid border-[0.5px] rounded border-white'>
            1
          </button>
          <button className='w-[25px] h-[25px] text-sm mx-1 text-white bg-blue-1 border-solid border-[0.5px] rounded border-white'>
            2
          </button>
        </div>
        {/* <Paging></Paging> */}
      </div>
    </Background>
  );
};

export default CafeList;
