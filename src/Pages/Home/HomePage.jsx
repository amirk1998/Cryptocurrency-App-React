import Layout from '../../Layout/Layout';
import millify from 'millify';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);

  const globalStats = data?.data?.stats;

  {
    isFetching && <p>Loading...</p>;
  }

  return (
    <Layout>
      <div className='py-4 w-full'>
        <h1 className='text-3xl font-semibold'>Global Crypto State</h1>
        <div className='grid grid-cols-2 w-full mt-4 px-4 gap-y-4'>
          <div className='flex flex-col gap-y-1'>
            <p className='text-neutral-400 text-base'>Total Cryptocurrencies</p>
            <p className='text-neutral-800 text-xl'>{globalStats.total}</p>
          </div>
          <div className='flex flex-col gap-y-1'>
            <p className='text-neutral-400 text-base'>Total Exchanges</p>
            <p className='text-neutral-800 text-xl'>
              {millify(globalStats.totalExchanges, { space: true })}
            </p>
          </div>
          <div className='flex flex-col gap-y-1'>
            <p className='text-neutral-400 text-base'>Total Market Cap</p>
            <p className='text-neutral-800 text-xl'>
              {millify(globalStats.totalMarketCap, { space: true })} $
            </p>
          </div>
          <div className='flex flex-col gap-y-1'>
            <p className='text-neutral-400 text-base'>Total 24h Volume</p>
            <p className='text-neutral-800 text-xl'>
              {millify(globalStats.total24hVolume, { space: true })} $
            </p>
          </div>
          <div className='flex flex-col gap-y-1'>
            <p className='text-neutral-400 text-base'>Total Markets</p>
            <p className='text-neutral-800 text-xl'>
              {millify(globalStats.totalMarkets, { space: true })} $
            </p>
          </div>
        </div>
        {/*  */}
        <div></div>
      </div>
    </Layout>
  );
};

export default HomePage;
