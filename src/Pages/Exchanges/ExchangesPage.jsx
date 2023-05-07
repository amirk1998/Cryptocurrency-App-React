import Layout from '../../Layout/Layout';
import Exchange from '../../components/Exchange/Exchange';

const ExchangesPage = () => {
  return (
    <Layout>
      <div className='w-full p-4'>
        <h1 className='text-3xl font-semibold mb-8'>All Exchanges</h1>
        <Exchange />
      </div>
    </Layout>
  );
};

export default ExchangesPage;
