import Layout from '../../Layout/Layout';
import millify from 'millify';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { Link } from 'react-router-dom';
import Cryptocurrencies from '../../components/Cryptocurrencies/Cryptocurrencies';
import News from '../../components/News/News';

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
        <div className='mt-10 mb-4 flex items-center justify-between'>
          <h1 className='text-2xl font-semibold '>
            Top 10 Cryptocurrencies in the world
          </h1>
          <Link
            to='/cryptocurrencies'
            className='text-blue-500 hover:text-blue-700 font-medium text-base'
          >
            Show more
          </Link>
        </div>
        <Cryptocurrencies />

        <div className='mt-10 mb-4 flex items-center justify-between'>
          <h1 className='text-2xl font-semibold '>Latest Crypto News</h1>
          <Link
            to='/news'
            className='text-blue-500 hover:text-blue-700 font-medium text-base'
          >
            Show more
          </Link>
        </div>
        <News />
      </div>
    </Layout>
  );
};

export default HomePage;
