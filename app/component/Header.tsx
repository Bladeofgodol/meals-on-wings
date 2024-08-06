const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 z-50 px-20">
      <nav className="w-full flex justify-around h-20 items-center">
        <a
          href="/"
          className="relative w-full flex justify-center items-center h-full overflow-hidden group"
        >
          <div className="text-white relative z-10">HOME</div>
          <span className="absolute inset-0 bg-blue-600 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </a>
        <a
          href="/download"
          className="relative w-full flex justify-center items-center h-full overflow-hidden group"
        >
          <div className="text-white relative z-10">DOWNLOAD</div>
          <span className="absolute inset-0 bg-blue-600 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </a>
        <a
          href="/join"
          className="relative w-full flex justify-center items-center h-full overflow-hidden group"
        >
          <div className="text-white relative z-10">JOIN US</div>
          <span className="absolute inset-0 bg-blue-600 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </a>
        <a
          href="/about"
          className="relative w-full flex justify-center items-center h-full overflow-hidden group"
        >
          <div className="text-white relative z-10">ABOUT</div>
          <span className="absolute inset-0 bg-blue-600 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </a>
        <a
          href="/contact"
          className="relative w-full flex justify-center items-center h-full overflow-hidden group"
        >
          <div className="text-white relative z-10">CONTACT US</div>
          <span className="absolute inset-0 bg-blue-600 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
