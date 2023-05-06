import { Link, NavLink } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
  AiOutlineFund,
  AiOutlineMenu,
} from 'react-icons/ai';

import logo from '/src/assets/eth.svg';

const Navigation = () => {
  const navItems = [
    {
      to: '/',
      icon: <AiOutlineHome className='w-6 h-6' />,
      text: 'Home',
    },
    {
      to: '/cryptocurrencies',
      icon: <AiOutlineFund className='w-6 h-6' />,
      text: 'Cryptocurrencies',
    },
    {
      to: '/exchanges',
      icon: <AiOutlineMoneyCollect className='w-6 h-6' />,
      text: 'Exchanges',
    },
    {
      to: '/news',
      icon: <AiOutlineBulb className='w-6 h-6' />,
      text: 'News',
    },
  ];

  return (
    <div>
      {/* Medium & Large Screens */}
      <div className='bg-slate-700 h-screen hidden md:w-64 lg:w-[300px] pt-4 md:flex flex-col px-4 rounded-tr-2xl '>
        <div className='flex items-center text-white gap-x-2 mb-8'>
          <img className='w-8 h-8' src={logo} alt='Logo' />
          <Link to='/'>
            <h2 className='text-2xl text-blue-400'>Crypto Master</h2>
          </Link>
        </div>
        <div className='flex flex-col w-full gap-y-4'>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={(navData) =>
                navData.isActive
                  ? ' bg-blue-600 w-full z-10 py-4 px-2 rounded-lg'
                  : 'text-white hover:bg-blue-400 z-10 py-4 px-2 rounded-lg'
              }
            >
              <div className='flex items-center text-white gap-x-2 text-xl'>
                {item.icon}
                <p>{item.text}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      {/* Small Screens */}
      <div className='bg-slate-700 w-full fixed bottom-0 pt-2 flex md:hidden px-4 rounded-tr-3xl rounded-tl-3xl'>
        {/* <div className='flex items-center text-white gap-x-2 mb-8'>
          <Link to='/'>
            <img className='w-8 h-8' src={logo} alt='Logo' />
          </Link>
        </div> */}
        <div className='flex items-center justify-between w-full gap-y-4'>
          {navItems.reverse().map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={(navData) =>
                navData.isActive
                  ? ' bg-blue-600 z-10 py-4 px-2 rounded-lg'
                  : 'text-white hover:bg-blue-400 z-10 py-4 px-2 rounded-lg'
              }
            >
              <div className='flex items-center text-white gap-x-2 text-xl'>
                {item.icon}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
