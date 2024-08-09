import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InfoIcon from '@mui/icons-material/Info';
import Image from "next/image";
import Drone from "../..//public/image/drone.png";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/75 to-transparent z-50 px-20 flex">
      <nav className="w-full justify-around h-20 items-center hidden lg:flex">
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
            <InfoIcon/><h1>ABOUT</h1>
          </div>
        </a>
        <a
          href="/contact"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10 flex gap-5">
            <QuestionAnswerIcon/><h1>CONTACT US</h1>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
