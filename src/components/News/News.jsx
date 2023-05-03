import moment from 'moment';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';

const News = ({ isSimplified }) => {
  const count = isSimplified ? 10 : 100;

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count,
  });

  console.log(cryptoNews);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6 px-4'>
      {/* {cryptoNews.value.map((news) => {
        return (
          <div key={crypto.randomUUID()}>
           
          </div>
        );
      })} */}
    </div>
  );
};

export default News;
