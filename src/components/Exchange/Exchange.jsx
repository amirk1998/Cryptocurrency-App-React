import { useState, useEffect } from 'react';
import axios from 'axios';

const Exchange = () => {
  const apiKey = import.meta.env.VITE_CRYPTO_EXCHANGES_API_KEY;
  const [exchangeData, setExchangeData] = useState({});

  // const fetchExchangesData = async (id) => {
  //   const url = `/api/v1/exchange/info?id=${id}&CMC_PRO_API_KEY=${apiKey}`;
  //   try {
  //     const response = await axios.get(url);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchExchangesData(270);
  // }, []);

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
