import img from "../../../assets/Logomark.svg";
import img2 from "../../../assets/Logotype.svg";
import avatar from "../../../assets/Avatar.png";
const Testimonial = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="bg-gray-50 py-14 px-10 container mx-auto">
        <div className="flex justify-center items-center gap-2">
          <img src={img} alt="" />
          <img src={img2} alt="" />
        </div>
        <h1 className="font-bold text-3xl text-center md:text-5xl my-10">
          We’ve been with unicraft to kick start every new project and can’t
          imagine working without it.
        </h1>
        <img className="mx-auto" src={avatar} alt="" />
        <h1 className="text-lg font-medium text-center my-4">Candice Wu</h1>
        <p className="text-center">Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Testimonial;
