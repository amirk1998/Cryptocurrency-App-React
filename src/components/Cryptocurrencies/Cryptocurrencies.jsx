import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';

const Cryptocurrencies = ({ isSimplified }) => {
  const count = isSimplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(null);

  useEffect(() => {
    if (cryptoList) {
      setCryptos(cryptoList.data.coins);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(cryptos);

  if (isFetching)
    return (
      <h1 className='text-slate-800 font-semibold text-center'>Loading...</h1>
    );

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 px-4'>
      {cryptos &&
        cryptos.map((currency) => {
          return (
            <div key={currency.uuid}>
              <Link to={`/crypto/${currency.rank}`} className=''>
                <div className='border border-slate-200 rounded-xl hover:shadow-2xl hover:border-slate-400 py-4 w-full h-64'>
                  <h5 className='mb-8 text-lg font-medium border-b-2 border-slate-200 tracking-tight text-gray-800 dark:text-white flex items-center justify-between w-full pb-4 px-4'>
                    {`${currency.rank}. ${currency.name}`}
                    <img
                      className='w-8 h-8'
                      src={currency.iconUrl}
                      alt={currency.symbol}
                    />
                  </h5>
                  <div className='flex flex-col gap-y-6 px-4'>
                    <p className='font-normal text-gray-700 dark:text-gray-400'>
                      Price: {millify(currency.price, { space: true })}$
                    </p>
                    <p className='font-normal text-gray-700 dark:text-gray-400'>
                      Market Cap: {millify(currency.marketCap, { space: true })}
                      $
                    </p>
                    <p className='font-normal text-gray-700 dark:text-gray-400'>
                      Daily Change: {millify(currency.change, { space: true })}%
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Cryptocurrencies;
