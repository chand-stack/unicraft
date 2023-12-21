import Banner from "../../shared/Banner/Banner";
import Contact from "../../shared/Contact/Contact";
import Faq from "../../shared/Faq/Faq";

import Pricing from "../../shared/Pricing/Pricing";
import RecentWork from "../../shared/RecentWork/RecentWork";
import Testimonial from "../../shared/Testimonial/Testimonial";
import Work from "../../shared/Work/Work";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <RecentWork></RecentWork>
      <Work></Work>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;
