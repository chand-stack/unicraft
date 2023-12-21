import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import bg from "../../../assets/Gradient.png";
const Pricing = () => {
  return (
    <div
      id="pricing"
      className="mt-28 pb-10"
      style={{
        backgroundImage: `url(${bg})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="font-bold text-3xl pt-10 text-center md:text-5xl my-10">
        Pricing made for collaborative support.
      </h1>
      <p className="text-center mt-3">
        Plain is made for your entire company. Only pay for users that actually{" "}
        <br /> message customers. Everyone else is free, forever.
      </p>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center gap-1 lg:px-20 mt-12">
          {/* first card */}
          <div className="card w-[378px] lg:w-96 group bg-base-100 hover:shadow-xl hover:bg-[#1F2937] hover:text-white hover:duration-500 mx-auto border">
            <div className="card-body">
              <h2 className="card-title">Freebie</h2>
              <p>
                Ideal for individuals who need quick access to basic features.
              </p>
              <div className="flex items-center gap-2">
                <div className="text-5xl font-medium">$0</div>
                <div>/month</div>
              </div>
              <div>
                <button className="btn btn-outline w-full mb-10 mt-6  group-hover:bg-white group-hover:text-[#1F2937]">
                  Get Started Now
                </button>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> 20,000+ of PNG & SVG graphics</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Access to 100 million stock images</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-gray-400" />
                <p className="text-gray-400"> Upload custom icons and fonts</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-gray-400" />
                <p className="text-gray-400"> Unlimited Sharing</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-gray-400" />
                <p className="text-gray-400">
                  {" "}
                  Upload graphics & video in up to 4k
                </p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-gray-400" />
                <p className="text-gray-400"> Unlimited Projects</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-gray-400" />
                <p className="text-gray-400">
                  {" "}
                  Instant Access to our design system
                </p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-gray-400" />
                <p className="text-gray-400">
                  {" "}
                  Create teams to collaborate on designs
                </p>
              </div>
            </div>
          </div>

          {/* second card */}
          <div className="card w-[378px] lg:w-96 group bg-base-100 hover:shadow-xl hover:bg-[#1F2937] hover:text-white hover:duration-500 mx-auto border">
            <div className="card-body">
              <h2 className="card-title">Professional</h2>
              <p>
                Ideal for individuals who need quick access to basic features.
              </p>
              <div className="flex items-center gap-2">
                <div className="text-5xl font-medium">$25</div>
                <div>/month</div>
              </div>
              <div>
                <button className="btn btn-outline w-full mb-10 mt-6 group-hover:bg-white group-hover:text-[#1F2937]">
                  Get Started Now
                </button>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> 20,000+ of PNG & SVG graphics</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Access to 100 million stock images</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Upload custom icons and fonts</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Unlimited Sharing</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Upload graphics & video in up to 4k</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-gray-400" />
                <p className="text-gray-400"> Unlimited Projects</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-gray-400" />
                <p className="text-gray-400">
                  {" "}
                  Instant Access to our design system
                </p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-gray-400" />
                <p className="text-gray-400">
                  {" "}
                  Create teams to collaborate on designs
                </p>
              </div>
            </div>
          </div>

          {/* third card */}
          <div className="card w-[378px] lg:w-96 group bg-base-100 hover:shadow-xl hover:bg-[#1F2937] hover:text-white hover:duration-500 mx-auto border">
            <div className="card-body">
              <h2 className="card-title">Enterprise</h2>
              <p>
                Ideal for individuals who need quick access to basic features.
              </p>
              <div className="flex items-center gap-2">
                <div className="text-5xl font-medium">$100</div>
                <div>/month</div>
              </div>
              <div>
                <button className="btn btn-outline w-full mb-10 mt-6 group-hover:bg-white group-hover:text-[#1F2937]">
                  Get Started Now
                </button>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> 20,000+ of PNG & SVG graphics</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Access to 100 million stock images</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Upload custom icons and fonts</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Unlimited Sharing</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Upload graphics & video in up to 4k</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Unlimited Projects</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Instant Access to our design system</p>
              </div>
              <div className="text-base font-medium flex items-center gap-1">
                <IoMdCheckmarkCircleOutline />
                <p> Create teams to collaborate on designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
