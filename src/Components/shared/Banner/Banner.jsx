const Banner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-7xl font-black">
          Elevate Your Presence with
        </h1>
        <h1 className="text-4xl md:text-7xl font-black">
          Seamless Design and Innovation.
        </h1>
        <p className=" text-center text-xl font-medium text-[#4B5563]">
          From strategic planning to digital presence, we&lsquo;re your
          dedicated partner in achieving solo success.
        </p>
        <div>
          <button className="btn bg-[#1F2937] text-white text-xl">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
