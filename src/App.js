import './App.css';
import { lazy,Suspense } from 'react';
import {useRoutes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ScrollToTop} from './components/ScrollToTop';
import { Loader } from './components/Loader';

const Home = lazy(() => import('./pages/home/Home'));
const Info = lazy(() => import('./pages/info/Info'));
const Characters = lazy(() => import('./pages/characters/Characters'));

function App() {

  const allRoutes = [{
      path: '/',
      element: <Home/>
    },
    {
      path: "/characters",
      element: <Characters/>
    },
    {
      path: "/info/:id",
      element: <Info/>
    }
  ]
  const routing = useRoutes(allRoutes);

  return (
    <>
    <ScrollToTop />
    <Suspense fallback={<Loader />}>

    {routing}
    </Suspense>
  </>

  );
}

export default App;