import clsx from 'clsx';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

import NextImage from '@/components/NextImage';
import PercentPill from '@/components/pill/Percent';
import Symbol from '@/components/pill/Symbol';
import TimePill from '@/components/pill/Time';

const CoinBreakdown = ({ data, loading }) => {
  // Return a loading state skeleton on loading
  if (loading) return null;

  const {
    id,
    name,
    symbol,
    high_24_hour,
    low_24_hour,
    price_change_24_hr,
    percent_change_usd_last_24_hours,
    percent_change_usd_last_1_hour,
    real_volume_last_24_hours,
    percent_change_volume_last_24_hours,
    price_usd,
    tagline,
  } = data;

  const isNegativeLastHour = percent_change_usd_last_1_hour?.charAt(0) === '-';

  return (
    <div className='m-7 max-w-5xl bg-zinc-50 shadow-lg'>
      <div className='flex flex-row items-center justify-between p-7'>
        <div className='flex flex-row items-center'>
          <NextImage
            useSkeleton
            className='w-32'
            src={`https://messari.io/asset-images/${id}/128.png?v=2`}
            width='128'
            height='128'
            alt='Icon'
          />

          <div className='ml-6 flex basis-auto flex-col'>
            <div className='flex flex-row flex-wrap items-end'>
              <h3>{name}</h3>
              <Symbol value={symbol} />
              <p className='text-lg font-medium tracking-wide text-gray-500'>
                {price_usd}
              </p>
              <p
                className={clsx(
                  'ml-2 text-lg font-medium text-red-500',
                  isNegativeLastHour ? 'text-red-500' : 'text-green-500'
                )}
              >
                ({percent_change_usd_last_1_hour})
              </p>
            </div>

            <p className='text-sm font-medium text-gray-500'>{tagline}</p>
          </div>
        </div>

        <div className='flex basis-auto gap-2'>
          <a href='#'>
            <AiOutlineTwitter className='h-6 w-6 text-gray-500' />
          </a>

          <a href='#'>
            <AiFillGithub className='h-6 w-6 text-gray-500' />
          </a>
        </div>
      </div>

      <div className='bg-white p-7 pt-14 md:-mt-14'>
        <div className='flex flex-col flex-wrap justify-between divide-y rounded-lg bg-zinc-50 shadow-md md:flex-row md:divide-y-0 md:divide-x'>
          <div className='flex flex-col p-7 md:basis-1/3'>
            <p>Price Change</p>

            <div className='flex justify-between'>
              <div className='flex items-end'>
                <p className='text-xl font-semibold tracking-wide text-violet-900'>
                  {price_change_24_hr}
                </p>

                <div className='m-1 text-xs text-gray-500'>24h</div>
              </div>

              <PercentPill value={percent_change_usd_last_24_hours} />
            </div>
          </div>

          <div className='flex flex-col p-7 md:basis-1/3'>
            <p>24h Low / 24h High</p>

            <div className='flex'>
              <p className='text-xl font-semibold'>
                <span className='tracking-wide  text-red-400'>
                  {low_24_hour}
                </span>
                <span className='font-medium text-gray-500'> / </span>
                <span className='tracking-wide  text-emerald-400'>
                  {' '}
                  {high_24_hour}
                </span>
              </p>
            </div>
          </div>

          <div className='flex flex-col p-7 md:basis-1/3'>
            <div className='flex items-end'>
              <p className='mr-2'>Trading Volume</p>

              <TimePill value='24h' />
            </div>

            <div className='flex justify-between'>
              <p className='text-xl font-semibold tracking-wide text-violet-900'>
                {real_volume_last_24_hours}
              </p>

              <PercentPill value={percent_change_volume_last_24_hours} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinBreakdown;
