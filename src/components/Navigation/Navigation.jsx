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
      icon: <AiOutlineHome />,
      text: 'Home',
    },
    {
      to: '/cryptocurrencies',
      icon: <AiOutlineFund />,
      text: 'Cryptocurrencies',
    },
    {
      to: '/exchanges',
      icon: <AiOutlineMoneyCollect />,
      text: 'Exchanges',
    },
    {
      to: '/news',
      icon: <AiOutlineBulb />,
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
      <div className='bg-slate-700 h-screen pt-4 flex flex-col md:hidden px-4'>
        <div className='flex items-center text-white gap-x-2 mb-8'>
          <Link to='/'>
            <img className='w-8 h-8' src={logo} alt='Logo' />
            {/* <h2 className='text-2xl text-blue-400'>Crypto Master</h2> */}
          </Link>
        </div>
        <div className='flex flex-col items-center w-full gap-y-4'>
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
                {/* <p>{item.text}</p> */}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
