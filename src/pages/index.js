import React from 'react';

import useTopCoins from '@/hooks/useTopCoins';

import CoinBreakdown from '@/components/CoinBreakdown';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const [coins, { loading, error }] = useTopCoins();

  return (
    <Layout>
      <Seo />

      {error && <p>Error loading top crypto coins</p>}

      {coins.map((data) => (
        <CoinBreakdown data={data} key={data.id} loading={loading} />
      ))}
    </Layout>
  );
}
