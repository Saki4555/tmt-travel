import React from 'react';
import  { useEffect } from 'react';

;
import TitleProvider from '../providers/TitleProvider';


const HomeSliderTwo = React.lazy(() => import('../components/home/hero/HomeSliderTwo'));
const DealsAndOffers = React.lazy(() => import('../components/home/deals-and-offers/DealsAndOffers'));
const ChooseUs = React.lazy(() => import('../components/home/choose-us/ChooseUs'));
const Testimonial = React.lazy(() => import('../components/home/testimonial/Testimonial'));







const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component loads
    }, []);
    return (
       <>
      <TitleProvider title="Home"/>
      
       <HomeSliderTwo />
       <DealsAndOffers />
      
     
       <ChooseUs />
       <Testimonial />
      
  
      
 
      
       </>
    );
};

export default Home;