import img1 from "../../../assets/Frame 9.png";
import img2 from "../../../assets/Frame 10.png";
import img3 from "../../../assets/Frame 11.png";
// import img4 from "../../../assets/Frame 12.png";
// import img5 from "../../../assets/Frame 13.png";
const RecentWork = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel container mx-auto my-16">
        <div className="carousel-item">
          <img className="mx-3" src={img3} alt="work" />
        </div>
        <div className="carousel-item">
          <img className="mx-3" src={img2} alt="work" />
        </div>
        <div className="carousel-item">
          <img className="mx-3" src={img3} alt="work" />
        </div>
        <div className="carousel-item">
          <img className="mx-3" src={img1} alt="work" />
        </div>
        <div className="carousel-item">
          <img className="mx-3" src={img3} alt="work" />
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <button className="btn btn-outline border border-[#4B5563] text-[#4B5563]">
          View Recent Work
        </button>
      </div>
    </div>
  );
};

export default RecentWork;
