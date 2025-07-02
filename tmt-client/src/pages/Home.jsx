import  { useEffect } from 'react';
import {  ChooseUs, DealsAndOffers,  Testimonial } from '../components';

import HomeSliderTwo from '../components/home/hero/HomeSliderTwo';
import TitleProvider from '../providers/TitleProvider';








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