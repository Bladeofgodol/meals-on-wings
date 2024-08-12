"use client";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import Image from "next/image";
import { RefObject, useRef } from "react";
import Drone from "../../../public/image/drone-fill-blue.png";
import useScrollTriggeredCountUp from "../effects/useScrollToCountUp";

// custom type
function NumberCounterAbbreviator(
  number: number,
  referance: RefObject<HTMLDivElement>
) {
  var abbreviatednum: number = number;
  var abbreviatedchar: string = " ";
  const digit = number.toString().length;
  if (digit / 3 <= 1) {
    abbreviatedchar = "";
    abbreviatednum = number;
  } else if (digit / 3 <= 2) {
    abbreviatedchar = "K";
    abbreviatednum = number / 10 ** 3;
  } else if (digit / 3 <= 3) {
    abbreviatedchar = "M";
    abbreviatednum = number / 10 ** 6;
  } else if (digit / 3 <= 4) {
    abbreviatedchar = "B";
    abbreviatednum = number / 10 ** 9;
  } else if (digit / 3 <= 5) {
    abbreviatedchar = "T";
    abbreviatednum = number / 10 ** 12;
  }

  abbreviatednum = Math.floor(abbreviatednum);

  return useScrollTriggeredCountUp(referance, abbreviatednum) + abbreviatedchar;
}
const Counter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const count_deliveries = NumberCounterAbbreviator(12345678910, ref); // 0 to 100 count-up
  const count_users = NumberCounterAbbreviator(12345678910, ref); // 0 to 100 count-up
  const count_drones = NumberCounterAbbreviator(9, ref); // 0 to 100 count-up
  const count_partners = NumberCounterAbbreviator(12345678910, ref); // 0 to 100 count-up
  const count_cities = NumberCounterAbbreviator(12345678910, ref); // 0 to 100 count-up

  return (
    <div className="w-screen flex justify-center px-10 md:px-0 lg:px-20">
      <div
        className="h-fit md:h-fit w-full flex-col justify-around flex gap-5 p-5 text-dodgerblue text-xl bg-gray-300 md:flex-col items-center md:justify-around shadow-lg rounded-lg md:p-10"
        ref={ref}
      >
      <div className="text-4xl md:text-6xl font-bold text-gray-700">NUMBERS</div>
        
        <div className="flex justify-around gap-5 flex-col items-stretch md:flex-row w-full px-10">
          <div className="md:w-60 w-full flex md:flex-col items-center">
            <FastfoodIcon className="size-20 md:size-40 p-5 " />

            <div className="flex flex-col justify-between md:items-center items-end w-full">
              <div className="md:text-3xl text-xl">{count_deliveries}</div>
              <div className="w-fit">DELIVERIES</div>
            </div>
          </div>
          <div className="md:w-60 w-full flex md:flex-col items-center">
            <PeopleIcon className="size-20 md:size-40 p-5" />
            <div className="flex flex-col justify-between md:items-center items-end w-full">
              <div className="md:text-3xl text-xl">{count_users}</div>
              <div className="w-fit">USERS</div>
            </div>
          </div>
          <div className="md:w-60 w-full flex md:flex-col justify-between items-center ">
            <Image
              src={Drone}
              alt="Description of image"
              width={160}
              height={160}
              objectFit="cover"
              quality={100}
              className="p-6 hidden md:inline-block static"
            />

            <Image
              src={Drone}
              alt="Description of image"
              width={70}
              height={70}
              objectFit="cover"
              quality={100}
              className="p-2 md:hidden static"
            />

            <div className="flex flex-col justify-between md:items-center items-end w-full">
              <div className="md:text-3xl text-xl">{count_drones}</div>

              <div className="w-fit">DRONES</div>
            </div>
          </div>
          <div className="md:w-60 w-full flex md:flex-col items-center">
            <HandshakeIcon className="size-20 md:size-40 p-5" />
            <div className="flex flex-col justify-between md:items-center items-end w-full">
              <div className="md:text-3xl text-xl">{count_partners}</div>

              <div className="w-fit">PARTNERS</div>
            </div>
          </div>
          <div className="md:w-60 w-full flex md:flex-col items-center">
            <LocationCityIcon className="size-20 md:size-40 p-5" />
            <div className="flex flex-col justify-between md:items-center items-end w-full">
              <div className="md:text-3xl text-xl">{count_cities}</div>
              <div className="w-fit">CITIES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
