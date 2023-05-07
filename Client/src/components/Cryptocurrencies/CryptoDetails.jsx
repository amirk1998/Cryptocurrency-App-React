import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../../services/cryptoApi';
import LineChart from '../LineChart/LineChart';
import millify from 'millify';
import {
  AiOutlineMoneyCollect,
  AiOutlineDollarCircle,
  AiOutlineFund,
  AiOutlineExclamationCircle,
  AiOutlineStop,
  AiOutlineTrophy,
  AiOutlineThunderbolt,
  AiOutlineCheck,
  AiOutlineNumber,
} from 'react-icons/ai';

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });

  const cryptoDetails = data && data.data.coin;

  const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];
  const timeOptions = time.map((t) => ({ label: t, value: t }));

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <AiOutlineDollarCircle className='w-6 h-6' />,
    },
    {
      title: 'Rank',
      value: cryptoDetails?.rank,
      icon: <AiOutlineNumber className='w-6 h-6' />,
    },
    {
      title: '24h Volume',
      value: `$ ${
        cryptoDetails &&
        cryptoDetails['24hVolume'] &&
        millify(cryptoDetails['24hVolume'])
      }`,
      icon: <AiOutlineThunderbolt className='w-6 h-6' />,
    },
    {
      title: 'Market Cap',
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <AiOutlineDollarCircle className='w-6 h-6' />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy className='w-6 h-6' />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <AiOutlineFund className='w-6 h-6' />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect className='w-6 h-6' />,
    },
    {
      title: 'Approved Supply',
      value: cryptoDetails?.supply?.confirmed ? (
        <AiOutlineCheck className='w-6 h-6' />
      ) : (
        <AiOutlineStop className='w-6 h-6' />
      ),
      icon: <AiOutlineExclamationCircle className='w-6 h-6' />,
    },
    {
      title: 'Total Supply',
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <AiOutlineExclamationCircle className='w-6 h-6' />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamationCircle className='w-6 h-6' />,
    },
  ];

  if (isFetching) {
    return (
      <h2 className='text-slate-800 font-semibold text-4xl mb-2 text-center'>
        Loading...
      </h2>
    );
  }

  return (
    <div className='flex flex-col w-full'>
      <h2 className='text-blue-600 font-semibold text-4xl mb-2'>
        {cryptoDetails.name} ({cryptoDetails.symbol} Price)
      </h2>
      <p className='text-base text-slate-600'>
        {cryptoDetails.name} live price in US Dollar (USD). View value
        statistics, market cap and supply.
      </p>
      <div className='w-1/4 mt-4'>
        <select
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
        >
          {timeOptions.map((t) => {
            return (
              <option value={t.value} key={t.value}>
                {t.label}
              </option>
            );
          })}
        </select>
      </div>
      {/* Line Chart (Will Do later) */}
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price, { space: true })}
        coinName={cryptoDetails.name}
        timePeriod={timePeriod}
      />
      <div className='grid grid-cols-2 gap-x-12 mt-4'>
        <p className='font-semibold text-slate-800 text-3xl col-span-2 mb-4'>
          Details
        </p>
        {/* Stats */}
        <div className='flex flex-col'>
          <div className='flex flex-col items-center'>
            <p className='font-semibold text-slate-800 text-xl'>
              {cryptoDetails.name} Value Statistics
            </p>
            <p className='font-normal text-slate-600'>
              An overview showing the stats of {cryptoDetails.name}
            </p>
          </div>
          {stats.map(({ title, value, icon }) => {
            return (
              <div
                key={crypto.randomUUID()}
                className='flex items-center justify-between py-6 px-8 border-b border-b-slate-200 hover:shadow-2xl '
              >
                <div className='flex gap-x-1 items-center'>
                  {icon}
                  <p>{title}</p>
                </div>
                <p className='font-semibold'>{value}</p>
              </div>
            );
          })}
        </div>
        {/* Other Stats */}
        <div className='flex flex-col'>
          <div className='flex flex-col items-center'>
            <p className='font-semibold text-slate-800 text-xl'>
              Other Statistics
            </p>
            <p className='font-normal text-slate-600'>
              An overview showing the stats of all Cryptocurrencies
            </p>
          </div>
          {genericStats.map(({ title, value, icon }) => {
            return (
              <div
                key={crypto.randomUUID()}
                className='flex items-center justify-between py-6 px-8 border-b border-b-slate-200 hover:shadow-2xl '
              >
                <div className='flex gap-x-1 items-center'>
                  {icon}
                  <p>{title}</p>
                </div>
                <p className='font-semibold'>{value}</p>
              </div>
            );
          })}
        </div>
        {/* Coin Description */}
        <div className='flex flex-col mt-8 '>
          <p className='font-semibold text-slate-800 text-3xl'>
            {cryptoDetails.name} Links
          </p>
          {cryptoDetails.links.map((link) => {
            return (
              <div
                key={crypto.randomUUID()}
                className='flex items-center justify-between py-6 px-8 border-b border-b-slate-200 hover:shadow-2xl mt-4'
              >
                <p>{link.type}</p>
                <p className='font-semibold text-blue-500 hover:text-blue-700'>
                  <a href={link.url}>{link.name}</a>
                </p>
              </div>
            );
          })}
        </div>
        <div className='px-4 flex flex-col mt-8'>
          <p className='text-3xl font-semibold text-slate-800 mb-4'>
            What is {cryptoDetails.name} ?
          </p>
          <p>{cryptoDetails.description}</p>
          {/* Button Read more */}
          <button className='mt-8 px-8 py-4 bg-stone-100 rounded-xl text-slate-800 hover:bg-stone-300'>
            <a href={`${cryptoDetails.coinrankingUrl}/about`}>
              Read more about {cryptoDetails.name}
            </a>
          </button>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default CryptoDetails;
