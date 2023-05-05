import Layout from '../../Layout/Layout';
import CryptoDetails from '../../components/Cryptocurrencies/CryptoDetails';
import Footer from '../../components/Footer/Footer';

const CryptoDetailsPage = () => {
  return (
    <Layout>
      <div className='flex flex-col overflow-y-auto w-full'>
        <div className='p-4'>
          {/* <h1 className='text-3xl font-semibold mb-4'>Crypto Details</h1> */}
          <CryptoDetails />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default CryptoDetailsPage;
