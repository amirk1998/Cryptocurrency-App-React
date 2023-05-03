import Layout from '../../Layout/Layout';
import Cryptocurrencies from '../../components/Cryptocurrencies/Cryptocurrencies';

const CryptoPage = () => {
  return (
    <Layout>
      <div className='flex flex-col p-4'>
        <h1 className='text-3xl font-semibold mb-8'>All Cryptocurrencies</h1>
        <Cryptocurrencies />
      </div>
    </Layout>
  );
};

export default CryptoPage;
