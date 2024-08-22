"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Partner1 from "../../../public/image/partner 1.png"
import Partner2 from "../../../public/image/partner 2.png"
import Partner3 from "../../../public/image/partner 3.png"
import Partner4 from "../../../public/image/partner 4.png"


const Partner = ({ Source }: any) => {
  return(<div className="w-80 h-40 relative ">
    <Image  
      src={Source}
      alt="Partner"
      layout="fill"
      objectFit="contain"
      className="flex justify-center"
    />
  </div>)
}
const Partners = () => {
  return (
    <div className="w-screen flex h-1/2 justify-center pt-12 flex-col  items-center">
      <div className="text-4xl md:text-6xl font-bold text-gray-700">
        PARTNERS
      </div>

      <div className="w-full flex md:px-10 lg:px-20 py-10">
        <Marquee className="marquee" autoFill>
          <Partner Source={Partner1} />
          <Partner Source={Partner2} />
          <Partner Source={Partner3} />
          <Partner Source={Partner4} />
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
