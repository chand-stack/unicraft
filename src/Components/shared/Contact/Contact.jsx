import bg from "../../../assets/Gradient.png";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${bg})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-center text-5xl md:text-7xl mt-20 pt-14 font-bold">
        No long-term contracts. <br /> No catches. Simple.
      </h1>
      <p className="font-medium text-xl text-[#667085] text-center pt-4">
        Start your 30-day free trial. Cancel anytime.
      </p>
      <div className="text-center pt-6">
        <button className="btn bg-[#1F2937] font-bold text-xl text-white">
          Contact us
        </button>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
