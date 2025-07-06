
import { OurServices, WhySelectUs } from "../components";
import TitleProvider from "../providers/TitleProvider";

const AboutUs = () => {
  
  return (
    <>
    <TitleProvider title="About" />
      <WhySelectUs />
      <OurServices />
    </>
  );
};

export default AboutUs;
