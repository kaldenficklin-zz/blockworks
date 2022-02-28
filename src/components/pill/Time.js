import React from 'react';

const TimePill = ({ value }) => {
  if (!value) return null;

  return (
    <div className='m-1 flex h-4 items-center justify-center rounded-full bg-gray-100 px-2 text-xs font-medium leading-6 text-gray-800'>
      {value}
    </div>
  );
};

export default TimePill;
