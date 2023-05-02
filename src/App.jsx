import { Route, Routes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className='App w-full h-screen flex'>
      <Routes>
        <Route>
          {routes.map((route) => {
            return <Route {...route} key={crypto.randomUUID()} />;
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
