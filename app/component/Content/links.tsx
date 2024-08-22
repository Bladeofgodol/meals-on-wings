const Links = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 justify-evenly h-auto">
      <a
        href="/download-app"
        className="bg-blue-500 text-white py-3 px-6 rounded-lg text-center hover:bg-blue-600 transition duration-300"
      >
        Download Our App
      </a>
      <a
        href="/join-partners"
        className="bg-slate-700 text-white py-3 px-6 rounded-lg text-center hover:bg-green-600 transition duration-300"
      >
        Request A Demo
      </a>
    </div>
  );
};

export default Links;
