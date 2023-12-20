import img from "../../../assets/Logo (1).svg";
import img1 from "../../../assets/Logo (2).svg";
import img2 from "../../../assets/Logo (3).svg";
import img3 from "../../../assets/Logo (4).svg";
import img4 from "../../../assets/Logo (5).svg";
import img5 from "../../../assets/Logo (6).svg";
const Banner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center space-y-5">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black">
          Elevate Your Presence with
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black">
          Seamless Design and Innovation.
        </h1>
        <p className=" text-center text-xl font-medium text-[#4B5563]">
          From strategic planning to digital presence, we&lsquo;re your
          dedicated partner in achieving solo success.
        </p>
        <div className="pb-20">
          <button className="btn bg-[#1F2937] text-white text-xl">
            View Pricing
          </button>
        </div>
        <p className="text-sm font-medium text-[#9CA3AF]">
          Trusted By 250+ Companies
        </p>
        <div className="md:flex flex-wrap justify-evenly items-center">
          <div className="transition-transform transform origin-center hover:scale-110">
            <img className="mx-auto" src={img} alt="" />
          </div>
          <div className="transition-transform transform origin-center hover:scale-110">
            <img className="mx-auto" src={img1} alt="" />
          </div>
          <div className="transition-transform transform origin-center hover:scale-110">
            <img className="mx-auto" src={img2} alt="" />
          </div>
          <div className="transition-transform transform origin-center hover:scale-110">
            <img className="mx-auto" src={img3} alt="" />
          </div>
          <div className="transition-transform transform origin-center hover:scale-110">
            <img className="mx-auto" src={img4} alt="" />
          </div>
          <div className="transition-transform transform origin-center hover:scale-110">
            <img className="mx-auto" src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
