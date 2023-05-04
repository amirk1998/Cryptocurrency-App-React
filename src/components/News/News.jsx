import moment from 'moment';
import Select from 'react-select';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import Footer from '../Footer/Footer';
import { useState } from 'react';

const News = ({ isSimplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: isSimplified ? 10 : 100,
  });

  const { data } = useGetCryptosQuery(100);
  const selectOptions =
    data &&
    data?.data?.coins?.map((coin) => ({
      value: coin.name,
      label: coin.name,
    }));

  const demoImage = '/src/assets/images/demoImage.jpg';
  // const demoImage =
  //   'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

  console.log(cryptoNews);
  return (
    <div className='flex flex-col overflow-y-auto '>
      {/* <Select */}
      <div className='mt-4 px-8 w-1/2 mb-8'>
        <Select
          className='basic-single'
          classNamePrefix='select'
          defaultValue={newsCategory}
          isDisabled={false}
          isLoading={true}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name='newsCategory'
          options={selectOptions}
          onChange={(selectOption) => setNewsCategory(selectOption.value)}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-6 px-4'>
        {cryptoNews &&
          cryptoNews.value.map((news) => {
            return (
              <a
                href={news.url}
                target='_blank'
                rel='noreferrer'
                key={crypto.randomUUID()}
              >
                <div className='flex flex-col w-full px-4 border border-slate-200 rounded-xl hover:shadow-2xl hover:border-slate-400 py-4 '>
                  <img
                    className='w-60 h-60 lg:w-72 lg:h-72 rounded-lg mb-2'
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt='Image'
                  />
                  <div className='lg:h-48'>
                    <h5 className='text-base lg:text-lg font-medium text-gray-800 mb-2'>
                      {news.name}
                    </h5>

                    <p className='font-normal text-gray-700 dark:text-gray-400 mt-4'>
                      {news.description.length > 100
                        ? `${news.description.substring(0, 100)}...`
                        : news.description}
                    </p>
                  </div>
                  <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-x-2'>
                      <img
                        className='rounded-full w-8 h-8'
                        src={
                          news?.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                      />
                      <p className='font-normal text-xs text-gray-700'>
                        {news?.provider[0]?.name.length > 20
                          ? `${news?.provider[0]?.name.substring(0, 15)}`
                          : news?.provider[0]?.name}
                      </p>
                    </div>
                    <p className='font-normal text-xs text-gray-700'>
                      {moment(news.datePublished).startOf('ss').fromNow()}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
      {!isSimplified && <Footer />}
    </div>
  );
};

export default News;
