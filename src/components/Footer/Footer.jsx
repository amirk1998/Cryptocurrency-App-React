import { Link } from 'react-router-dom';

const Footer = () => {
  const linkItems = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/exchanges',
      text: 'Exchanges',
    },
    {
      to: '/nes',
      text: 'News',
    },
  ];
  return (
    <footer className='bg-slate-700 w-full h-[86px] absolute bottom-0'>
      <div className='flex flex-col items-center '>
        <p className='text-white font-semibold text-xl'>Crypto Master</p>
        <p className='text-white text-lg'>All Rights Reserved</p>
        <div className='flex items-center gap-x-4'>
          {linkItems.map((item) => {
            return (
              <Link
                key={item.to}
                to={item.to}
                className='text-blue-500 hover:text-blue-700'
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
