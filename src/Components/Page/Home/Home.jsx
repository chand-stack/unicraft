import Banner from "../../shared/Banner/Banner";
import Faq from "../../shared/Faq/Faq";
import Navbar from "../../shared/Navbar/Navbar";
import Pricing from "../../shared/Pricing/Pricing";
import RecentWork from "../../shared/RecentWork/RecentWork";
import Testimonial from "../../shared/Testimonial/Testimonial";
import Work from "../../shared/Work/Work";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: `linear-gradient(0deg, #FFF 32.26%, rgba(255, 255, 255, 0.00) 79.75%)`,
        }}
      >
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <RecentWork></RecentWork>
      <Work></Work>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <Faq></Faq>
    </div>
  );
};

export default Home;
