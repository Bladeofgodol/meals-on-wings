"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Partners = () => {
  return (
    <div className="w-screen flex justify-center py-16 flex-col  items-center">
      <div className="text-4xl md:text-6xl font-bold text-gray-700">
        PARTNERS
      </div>

      <div className="w-full flex md:px-10 lg:px-20 py-10">
        <Marquee className="marquee" autoFill>
          <div className="w-full md:w-fit h-fit relative md:px-10 bg-slate-600">
            <Image
              src="/image/icon.png"
              alt="Description of image"
              width={400}
              height={20}
              objectFit="cover"
              quality={100}
            />
            </div>
            <div className="w-fit h-40 relative px-10">
            <Image
              src="/image/icon.png"
              alt="Description of image"
              width={400}
              height={20}
              objectFit="cover"
              quality={100}
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
