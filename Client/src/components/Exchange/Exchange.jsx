import { useState, useEffect } from 'react';
import axios from 'axios';
import ExchangeDetails from './ExchangeDetails';
import millify from 'millify';

const Exchange = () => {
  const [metaData, setMetaData] = useState([]);
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
  const sortMetaData = [];

  useEffect(() => {
    fetch(`/api/exchange?ids=${exchangeId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.data.length; i++) {
          sortMetaData.push(data.data[exchangeId[i]]);
        }
        setMetaData(sortMetaData);
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(metaData);

  if (!metaData) {
    return (
      <h1 className='text-slate-800 font-semibold text-center'>Loading...</h1>
    );
  }

  return (
    <div className='w-full'>
      <div className='flex flex-col w-full'>
        {metaData.length &&
          metaData.map((item, index) => {
            return (
              <ExchangeDetails
                name={item.name}
                volume={millify(item.spot_volume_usd)}
                weeklyVisits={item.weekly_visits}
                rank={exchangeData[index].rank}
                description={item.description}
                key={item.id}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Exchange;
