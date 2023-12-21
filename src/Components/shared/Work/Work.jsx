import img from "../../../assets/Screenshot 2023-12-21 144805.png";
import img2 from "../../../assets/Screenshot 2023-12-21 144835.png";
import img3 from "../../../assets/Screenshot 2023-12-21 144905.png";
import { TiArrowForwardOutline } from "react-icons/ti";
const Work = () => {
  return (
    <div className="container mx-auto my-24">
      <div className="border shadow-xl rounded-xl mx-10 py-10 px-10">
        <h1 className="text-5xl font-bold text-center">How it works</h1>
        <p className="text-xl font-medium text-center mt-2">
          Premium designs, unlimited requests, super fast delivery, for one flat
          monthly fee.
        </p>
        <div className="flex items-center mt-28">
          <div className="">
            <img src={img} alt="" className="mx-auto" />
          </div>
          <div className="mx-auto">
            <TiArrowForwardOutline className="mx-auto text-6xl" />
          </div>
          <div>
            <img src={img2} alt="" className="mx-auto" />
          </div>
          <div>
            <TiArrowForwardOutline className="mx-auto text-6xl" />
          </div>
          <div>
            <img src={img3} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
