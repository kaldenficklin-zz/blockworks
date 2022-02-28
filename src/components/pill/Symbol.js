import React from 'react';

const Symbol = ({ value }) => {
  if (!value) return null;

  return (
    <div className='my-1 mx-3 flex h-5 items-center justify-center rounded-sm bg-violet-100 px-2 text-xs font-medium leading-6 text-violet-800'>
      {value}
    </div>
  );
};

export default Symbol;
