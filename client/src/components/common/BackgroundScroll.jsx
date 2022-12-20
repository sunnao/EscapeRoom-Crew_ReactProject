import React from 'react';

const BackgroundScroll = ({ img, children }) => {
  return (
    <div
      className='w-full h-[200vh] flex justify-start flex-col bg-cover'
      style={{ backgroundImage: `url(/images/backgrounds/${img}.png)` }}>
      {children}
    </div>
  );
};

export default BackgroundScroll;
