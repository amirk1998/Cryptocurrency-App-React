import Layout from '../../Layout/Layout';
import millify from 'millify';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { Link } from 'react-router-dom';
import Cryptocurrencies from '../../components/Cryptocurrencies/Cryptocurrencies';
import News from '../../components/News/News';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  // console.log(data);

  const globalStats = data ? data?.data?.stats : '';

  {
    isFetching && (
      <h1 className='text-slate-800 font-semibold text-center'>Loading...</h1>
    );
  }

  return (
    <Layout>
      <div className='pt-4 w-full overflow-y-auto '>
        <div className='pl-2'>
          <h1 className='text-3xl font-semibold'>Global Crypto State</h1>
          <div className='grid grid-cols-2 w-full mt-4 px-4 gap-y-4'>
            <div className='flex flex-col gap-y-1'>
              <p className='text-neutral-400 text-sm lg:text-base'>
                Total Cryptocurrencies
              </p>
              <p className='text-neutral-800 text-lg lg:text-xl'>
                {globalStats.total}
              </p>
            </div>
            <div className='flex flex-col gap-y-1'>
              <p className='text-neutral-400 text-sm lg:text-base'>
                Total Exchanges
              </p>
              <p className='text-neutral-800 text-lg lg:text-xl'>
                {globalStats.totalExchanges}
              </p>
            </div>
            <div className='flex flex-col gap-y-1'>
              <p className='text-neutral-400 text-sm lg:text-base'>
                Total Market Cap
              </p>
              <p className='text-neutral-800 text-lg lg:text-xl'>
                {millify(globalStats.totalMarketCap, { space: true })} $
              </p>
            </div>
            <div className='flex flex-col gap-y-1'>
              <p className='text-neutral-400 text-sm lg:text-base'>
                Total 24h Volume
              </p>
              <p className='text-neutral-800 text-lg lg:text-xl'>
                {millify(globalStats.total24hVolume, { space: true })} $
              </p>
            </div>
            <div className='flex flex-col gap-y-1'>
              <p className='text-neutral-400 text-sm lg:text-base'>
                Total Markets
              </p>
              <p className='text-neutral-800 text-lg lg:text-xl'>
                {millify(globalStats.totalMarkets, { space: true })} $
              </p>
            </div>
          </div>
          {/*  */}
          <div className='mt-10 mb-4 flex items-center justify-between pr-6'>
            <h1 className='text-lg lg:text-2xl font-semibold '>
              Top 10 Cryptocurrencies
            </h1>
            <Link
              to='/cryptocurrencies'
              className='text-blue-500 hover:text-blue-700 font-medium text-sm lg:text-base'
            >
              Show more
            </Link>
          </div>
          <Cryptocurrencies isSimplified={true} />

          <div className='mt-10 mb-4 flex items-center justify-between pr-6'>
            <h1 className='text-lg lg:text-2xl font-semibold '>
              Latest Crypto News
            </h1>
            <Link
              to='/news'
              className='text-blue-500 hover:text-blue-700 font-medium text-sm lg:text-base'
            >
              Show more
            </Link>
          </div>
          <News isSimplified={true} />
        </div>
        <div className='hidden md:block'>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
