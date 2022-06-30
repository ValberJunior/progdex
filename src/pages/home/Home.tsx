import { Loading } from 'components';
import { Suspense, lazy } from 'react';
import "./_Home.scss";

const CardList = lazy(() => import('components/cardList/CardList'))

const Home = () => {

  return (
    <section className="container">
       <Suspense fallback={<Loading/>}>
          <CardList />
        </Suspense>
    </section>
  )
}

export default Home