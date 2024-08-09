import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/75 to-transparent z-50 px-20 flex">
     
      <nav className="w-full flex justify-around h-20 items-center">
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
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10">HOME</div>
        </a>
        <a
          href="/download"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10">DOWNLOAD</div>
          
        </a>
        <a
          href="/join"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10">JOIN US</div>
          
        </a>
        <a
          href="/about"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10">ABOUT</div>
          
        </a>
        <a
          href="/contact"
          className="relative w-full flex justify-center items-center h-full overflow-hidden transform hover:bg-black/75  duration-200 group"
        >
          <div className="text-white transform group-hover:scale-110 transition-transform duration-200 relative z-10">CONTACT US</div>
          
        </a>
      </nav>
    </header>
  );
};

export default Header;
