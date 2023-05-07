import { useState, useEffect } from 'react';
import axios from 'axios';

const Exchange = () => {
  const apiKey = import.meta.env.VITE_CRYPTO_EXCHANGES_API_KEY;
  const exchangeData = [
    { id: 270, name: 'binance', rank: 1 },
    { id: 89, name: 'coinbase', rank: 2 },
    { id: 24, name: 'kraken', rank: 3 },
    { id: 331, name: 'kucoin', rank: 4 },
    { id: 521, name: 'bybit', rank: 5 },
    { id: 70, name: 'bitstamp', rank: 6 },
    { id: 294, name: 'okx', rank: 7 },
    { id: 37, name: 'bitfinex', rank: 8 },
    { id: 302, name: 'gate.io', rank: 9 },
    { id: 513, name: 'bitget', rank: 10 },
    { id: 630, name: 'binance.us', rank: 11 },
    { id: 139, name: 'bitflyer', rank: 12 },
    { id: 333, name: 'lbank', rank: 13 },
    { id: 102, name: 'huobi', rank: 14 },
    { id: 200, name: 'bithumb', rank: 15 },
    { id: 151, name: 'gemini', rank: 16 },
    { id: 544, name: 'mexc', rank: 17 },
    { id: 106, name: 'coincheck', rank: 18 },
    { id: 1149, name: 'crypto.com', rank: 19 },
    { id: 403, name: 'bitforex', rank: 20 },
  ];

  const exchangeId = exchangeData.map((item) => item.id);

  useEffect(() => {
    fetch(`/api/exchange?ids=${exchangeId}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Exchanges
              </th>
              <th scope='col' className='px-6 py-3'>
                24h Trade Volume
              </th>
              <th scope='col' className='px-6 py-3'>
                Markets
              </th>
              <th scope='col' className='px-6 py-3'>
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Apple MacBook Pro 17
              </th>
              <td className='px-6 py-4'>Silver</td>
              <td className='px-6 py-4'>Laptop</td>
              <td className='px-6 py-4'>$2999</td>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Microsoft Surface Pro
              </th>
              <td className='px-6 py-4'>White</td>
              <td className='px-6 py-4'>Laptop PC</td>
              <td className='px-6 py-4'>$1999</td>
            </tr>
            <tr className='bg-white dark:bg-gray-800'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                Magic Mouse 2
              </th>
              <td className='px-6 py-4'>Black</td>
              <td className='px-6 py-4'>Accessories</td>
              <td className='px-6 py-4'>$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exchange;
