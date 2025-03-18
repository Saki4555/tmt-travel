import React, { useEffect } from 'react';
import {  ChooseUs, DealsAndOffers,  Testimonial } from '../components';

import HomeSliderTwo from '../components/home/hero/HomeSliderTwo';








const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component loads
    }, []);
    return (
       <>
       {/* <HomeBanner /> */}
       {/* <MockUp /> */}
       <HomeSliderTwo />
       <DealsAndOffers />
      
     
       <ChooseUs />
       <Testimonial />
      
  
      
 
      
       </>
    );
};

export default Home;