"use client";
import Marquee from "react-fast-marquee";
import "../../../public/styles/marquee.css";
const Partners = () => {
  return (
    <div className="w-screen flex justify-center p-20 flex-col  items-center">
      <div className="text-4xl md:text-6xl font-bold text-gray-700">
        PARTNERS
      </div>
      <div className="w-full flex p-40">
        <Marquee className="marquee" autoFill>
          <div>hi</div>
          <div>bye</div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
