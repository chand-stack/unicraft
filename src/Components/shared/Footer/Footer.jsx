import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";
import { TbHandLittleFinger } from "react-icons/tb";
const Footer = () => {
  return (
    <div>
      <div className=" items-center p-4 bg-none container mx-auto px-10 mt-14">
        <h1 className="text-2xl font-bold text-[#374151] border-t pt-8">
          UniCraft
        </h1>
        <p className="text-lg font-medium text-[#9CA3AF] mt-3">
          Design amazing digital experiences that create more happy in the
          world.
        </p>
        <div className="flex items-center justify-between my-9">
          <div>
            <p className="text-[#98A2B3]">
              © 2077 Untitled UI. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 items-center">
            <FaTwitter className="text-gray-400 text-2xl" />
            <FaLinkedin className="text-gray-400 text-2xl" />
            <FaFacebook className="text-gray-400 text-2xl" />
            <FaGithub className="text-gray-400 text-2xl" />
            <RiBasketballLine className="text-gray-400 text-2xl" />
            <TbHandLittleFinger className="text-gray-400 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
