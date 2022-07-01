import { Loading } from 'components';
import { Suspense, lazy, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import "./_Home.scss";

const CardList = lazy(() => import('components/cardList/CardList'))
//scroll function
const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  }); 
};

const Home = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) return setVisible(true);
    if (scrolled <= 800) return setVisible(false)
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <section className="container">
       <Suspense fallback={<Loading/>}>
          <CardList />
        </Suspense>
        <button
         onClick={scrollToTop}
         style={{display: visible ? 'inline' : 'none'}}
         className="container__top"
         >
          <FaAngleUp/>
        </button>
    </section>
  )
}

export default Home