"use client";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InfoIcon from "@mui/icons-material/Info";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Image from "next/image";
import { useState } from "react";
import Drone from "../..//public/image/drone.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/75 to-transparent z-50  flex text-white">
      <nav className="w-full justify-around h-20 items-center hidden lg:flex px-16">
        <div>
          <Image
            src="/image/icon.png"
            alt="Description of image"
            width={1000}
            height={20}
            objectFit="cover"
            quality={100}
          />
        </div>
        <a
          href="/"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 flex gap-5">
            <Image
              src={Drone}
              alt="Description of image"
              width={24}
              height={24}
              objectFit="cover"
              quality={100}
            />
            <h1>HOME</h1>
          </div>
        </a>
        <a
          href="/download"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 flex gap-5">
            <ArrowDownwardIcon />
            <h1>DOWNLOAD</h1>
          </div>
        </a>
        <a
          href="/join"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 flex gap-5">
            <HandshakeIcon />
            <h1>JOIN US</h1>
          </div>
        </a>
        <a
          href="/about"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 gap-5 flex">
            <InfoIcon />
            <h1>ABOUT</h1>
          </div>
        </a>
        <a
          href="/contact"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 flex gap-5">
            <QuestionAnswerIcon />
            <h1 className="whitespace-nowrap">CONTACT US</h1>
          </div>
        </a>
      </nav>
      <nav className="w-full h-20 flex lg:hidden items-start py-5 justify-between px-2 md:px-2">
        <div className="md:hidden">
          <Image
            src="/image/icon.png"
            alt="Description of image"
            width={150}
            height={20}
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="px-5 hidden md:flex">
          <Image
            src="/image/icon.png"
            alt="Description of image"
            width={200}
            height={20}
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="lg:hidden flex flex-col items-end">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={"M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transform transition-transform duration-300 fixed top-0 right-0 h-fit w-fit bg-gradient-to-b bg-gray-900/90 from-black flex flex-col items-end`}
          >
            <button
              className="text-white focus:outline-none hover:bg-black w-fit"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={"M6 18L18 6M6 6l12 12"}
                ></path>
              </svg>
            </button>
            <a
              href="/"
              className="relative w-full lg:w-auto flex justify-center items-center h-12 lg:h-full transform hover:bg-black/75 duration-200 group "
            >
              <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 flex gap-5">
                <Image
                  src={Drone}
                  alt="Description of image"
                  width={20}
                  height={20}
                  objectFit="cover"
                  quality={100}
                />
                <h1>HOME</h1>
              </div>
            </a>
            <a
              href="/download"
              className="relative w-full lg:w-auto flex justify-center items-center p-4 h-12 lg:h-full transform hover:bg-black/75 duration-200 group"
            >
              <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 flex gap-5">
                <ArrowDownwardIcon />
                <h1>DOWNLOAD</h1>
              </div>
            </a>
            <a
              href="/join"
              className="relative w-full lg:w-auto flex justify-center items-center h-12 lg:h-full transform hover:bg-black/75 duration-200 group"
            >
              <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 flex gap-5">
                <HandshakeIcon />
                <h1>JOIN US</h1>
              </div>
            </a>
            <a
              href="/about"
              className="relative w-full lg:w-auto flex justify-center items-center h-12 lg:h-full transform hover:bg-black/75 duration-200 group"
            >
              <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 gap-5 flex">
                <InfoIcon />
                <h1>ABOUT</h1>
              </div>
            </a>
            <a
              href="/contact"
              className="relative w-full lg:w-auto flex justify-center items-center h-12 lg:h-full transform hover:bg-black/75 duration-200 group"
            >
              <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 flex gap-5">
                <QuestionAnswerIcon />
                <h1>CONTACT US</h1>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
