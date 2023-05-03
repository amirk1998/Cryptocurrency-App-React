import Layout from '../../Layout/Layout';
import Cryptocurrencies from '../../components/Cryptocurrencies/Cryptocurrencies';
import Footer from '../../components/Footer/Footer';

const CryptoPage = () => {
  return (
    <Layout>
      <div className='flex flex-col overflow-y-auto'>
        <div className='p-4'>
          <h1 className='text-3xl font-semibold mb-8'>All Cryptocurrencies</h1>
          <Cryptocurrencies />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default CryptoPage;
