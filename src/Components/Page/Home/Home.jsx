import Banner from "../../shared/Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor:
            "linear-gradient(0deg, #FFF 32.26%, rgba(255, 255, 255, 0.00) 79.75%)",
        }}
      >
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
