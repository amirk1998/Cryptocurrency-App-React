import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useState } from 'react';

const Cryptocurrencies = () => {
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  console.log(cryptos);

  return <div>Cryptocurrencies</div>;
};

export default Cryptocurrencies;
