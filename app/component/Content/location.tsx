import MapChart from "../effects/mapchart";

const Locations = () => {
  return (
    <div className="w-screen h-full lg:h-screen flex justify-end flex-col items-center lg:px-40">
      <div className="text-4xl md:text-6xl font-bold text-gray-700">
        LOCATIONS
      </div>
      <div className="w-full h-auto flex md:px-10 lg:px-20 pt-10">
        <MapChart />
      </div>
    </div>
  );
};

export default Locations;
