import React from 'react';

const MarkerDescription = (props) => {
  return (
    <div className='flex flex-col mx-1 h-10'>
      <img src={props.src} alt={props.alt} className='w-10 m-auto'></img>
      <div>{props.description}</div>
    </div>
  );
};

export default MarkerDescription;
