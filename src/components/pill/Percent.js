import clsx from 'clsx';
import React from 'react';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';

const PercentPill = ({ value }) => {
  if (!value) return null;

  const isNegative = value.charAt(0) === '-';

  return (
    <div
      className={clsx(
        'flex h-6 items-center justify-center rounded-full px-3 text-xs font-medium leading-6',
        isNegative ? 'bg-red-100  text-red-800' : 'bg-green-100 text-green-800'
      )}
    >
      {isNegative ? (
        <HiArrowNarrowDown className='text-red-500' />
      ) : (
        <HiArrowNarrowUp />
      )}
      {value}
    </div>
  );
};

export default PercentPill;
