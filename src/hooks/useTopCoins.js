import useFetch from 'use-http';

import formatCompactUSD from '@/utils/formatCompactUSD';
import formatPercent from '@/utils/formatPercent';
import formatUSD from '@/utils/formatUSD';

const formatCoinData = ({ id, name, profile, symbol, metrics }) => {
  const {
    ohlcv_last_24_hour,
    percent_change_usd_last_24_hours,
    percent_change_usd_last_1_hour,
    price_usd,
    real_volume_last_24_hours,
  } = metrics?.market_data;

  const coinData = {
    id,
    name,
    symbol,
    high_24_hour: formatUSD.format(ohlcv_last_24_hour.high),
    low_24_hour: formatUSD.format(ohlcv_last_24_hour.low),
    price_change_24_hr: formatUSD.format(
      ohlcv_last_24_hour.open * (percent_change_usd_last_24_hours / 100)
    ),
    percent_change_usd_last_24_hours: formatPercent.format(
      percent_change_usd_last_24_hours / 100
    ),
    percent_change_usd_last_1_hour: formatPercent.format(
      percent_change_usd_last_1_hour / 100
    ),
    real_volume_last_24_hours: formatCompactUSD.format(
      real_volume_last_24_hours
    ),
    percent_change_volume_last_24_hours: formatPercent.format(
      percent_change_usd_last_24_hours / 100 -
        percent_change_usd_last_1_hour / 100
    ),
    price_usd: formatUSD.format(price_usd),
    tagline: profile.general.overview.tagline,
  };

  return coinData;
};

const useTopCoins = (limit = 1) => {
  const options = {}; // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  const { data, error, loading } = useFetch(
    `https://data.messari.io/api/v2/assets?limit=${limit}`,
    options,
    []
  );

  const coins = data?.data.map(formatCoinData) || [];

  return [coins, { loading, error }];
};

export default useTopCoins;
