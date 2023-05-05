import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useEffect, useState } from 'react';

const Cryptocurrencies = ({ isSimplified }) => {
  const count = isSimplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (cryptoList) {
      setCryptos(cryptoList.data.coins);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cryptoList) {
      const filteredData = cryptoList.data.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCryptos(filteredData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  console.log(cryptos);

  if (isFetching)
    return (
      <h1 className='text-slate-800 font-semibold text-center'>Loading...</h1>
    );

  return (
    <div className='flex flex-col w-full'>
      {/* Search Input */}
      {!isSimplified && (
        <div className='relative w-full mb-8 px-4'>
          <div className='absolute inset-y-0 left-4 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
          <input
            type='text'
            id='simple-search'
            onChange={(e) => setSearchValue(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search'
            required
          />
        </div>
      )}

      {/* Crypto List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6 px-4 overflow-y-auto'>
        {cryptos &&
          cryptos.map((currency) => {
            return (
              <div key={currency.uuid}>
                <Link to={`/crypto/${currency.uuid}`}>
                  <div className='border border-slate-200 rounded-xl hover:shadow-2xl hover:border-slate-400 py-4 w-full h-72 lg:h-64'>
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
                        Market Cap:{' '}
                        {millify(currency.marketCap, { space: true })}$
                      </p>
                      <p className='font-normal text-gray-700 dark:text-gray-400'>
                        Daily Change:{' '}
                        {millify(currency.change, { space: true })}%
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
