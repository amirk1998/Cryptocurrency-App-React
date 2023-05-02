import CryptoDetailsPage from './Pages/Crypto/CryptoDetailsPage';
import CryptoPage from './Pages/Crypto/CryptoPage';
import ExchangesPage from './Pages/Exchanges/ExchangesPage';
import HomePage from './Pages/Home/HomePage';
import NewsPage from './Pages/News/NewsPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/cryptocurrencies', element: <CryptoPage /> },
  { path: '/cryptodetails', element: <CryptoDetailsPage /> },
  { path: '/exchanges', element: <ExchangesPage /> },
  { path: '/news', element: <NewsPage /> },
  // { path: '/', element: <HomePage /> },
  // { path: '*', element: <NotFound /> },
];

export default routes;
