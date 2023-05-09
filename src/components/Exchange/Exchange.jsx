import { useState } from 'react';
import {
  useGetExchangesQuery,
  useGetIconsQuery,
} from '../../services/cryptoExchangesApi';
import millify from 'millify';

const Exchange = () => {
  const { data: exchangeIcons } = useGetIconsQuery();
  const { data: exchangesDetails } = useGetExchangesQuery();

  const exchangesName = [
    'BINANCE',
    'COINBASE',
    'KRAKEN',
    'KUCOIN',
    'BITSTAMP',
    'OKX',
    'BITFINEX',
    'BITGET',
    'BINANCE.US',
    'LBANK',
    'BITHUMB',
    'GEMINI',
    'MEXC',
    'BITFOREX',
  ];

  const exchangesData =
    exchangesDetails &&
    exchangesDetails.map((item) => {
      const icon = exchangeIcons.find(
        (icon) => icon.exchange_id === item.exchange_id
      );
      return { icon: icon, data: item };
    });

  const filteredData =
    exchangesData &&
    exchangesData.filter((item) =>
      exchangesName.includes(item.data.exchange_id)
    );
  console.log(filteredData);

  return (
    <div>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-base text-left text-gray-500 rounded-xl'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-200 '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Exchanges
              </th>
              <th scope='col' className='px-6 py-3'>
                24h Trade Volume
              </th>
              <th scope='col' className='px-6 py-3'>
                1h Trade Volume
              </th>
              <th scope='col' className='px-6 py-3'>
                Total Symbols
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData &&
              filteredData.map((exchange, index) => {
                return (
                  <tr
                    key={exchange.data.exchange_id}
                    scope='row'
                    className='bg-slate-100 hover:bg-slate-200 text-slate-800 border-b '
                  >
                    <td className='flex items-center'>
                      <span className='px-6 py-4'>{index + 1}.</span>

                      <img
                        className='w-8 h-8 mr-2'
                        src={exchange.icon.url}
                        alt={exchange.icon.exchange_id}
                      />

                      <span className='px-2 py-4 font-semibold text-slate-800 text-lg'>
                        {exchange.data.name}
                      </span>
                    </td>
                    <td className='px-6 py-4'>
                      $
                      {millify(exchange.data.volume_1day_usd, {
                        precision: 2,
                        space: true,
                      })}
                    </td>
                    <td className='px-6 py-4'>
                      $
                      {millify(exchange.data.volume_1hrs_usd, {
                        precision: 2,
                        space: true,
                      })}
                    </td>
                    <td className='px-6 py-4'>
                      {exchange.data.data_symbols_count}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exchange;
