import { Disclosure } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import Markdown from 'markdown-to-jsx';

const ExchangeDetails = ({
  name,
  volume,
  rank,
  weeklyVisits,
  description,
  id,
}) => {
  return (
    <div className='w-full px-4 pt-4'>
      <Disclosure className='w-full'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <div className='flex items-center w-full justify-between'>
                <span>What is your refund policy?</span>
                <div className='flex items-center gap-x-1 w-full'>
                  <span>{rank}. </span>
                  <img
                    src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/${id}.png`}
                    alt={name}
                    className='w-8 h-8'
                  />
                  <span>{name}</span>
                </div>
                <p>{volume}</p>
                <p>{weeklyVisits}</p>
                <p>{rank}</p>
              </div>
              <HiOutlineChevronDown
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-slate-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-slate-600 w-full'>
              <Markdown>{description}</Markdown>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ExchangeDetails;
