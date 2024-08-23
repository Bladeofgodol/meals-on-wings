import Image from "next/image";
import Bag from "../../../public/image/delivery bag.jpg";
import Drone from "../../../public/image/drone 1.jpg";
import Food from "../../../public/image/food.jpg";

const Footages = ({ source }:any) => {
  return (
    <div className="lg:w-1/3 justify-center relative hidden md:flex">
      <Image
        src={source}
        layout="fill"
        objectFit="cover"
        alt="Drone Footage"
        className="px-10"
      />
    </div>
  );
};

const About = () => {
  return (
    <div className="w-screen lg:h-screen py-10 md:py-0 flex px-5 flex-col items-center justify-end">
      <div className="text-4xl md:text-6xl font-bold text-gray-700">
        ABOUT US
      </div>
      <div className="w-full flex flex-col md:px-10 lg:px-20 py-10 gap-5 text-md lg:text-sm justify-center">
        <div className="w-full flex justify-evenly">
          <div className="w-1/3 hidden lg:flex" />
          <div className="lg:w-1/3 md:text-justify">
            <div className="Bold text-lg lg:text-2xl font-bold text-slate-800">
              At Meals on Wings
            </div>
            we&#39;re redefining the way you experience food delivery. Founded with
            a passion for innovation and a love for good food, we&#39;re a team of
            tech enthusiasts, foodies, and dreamers who believe that the future
            of delivery is airborne.
          </div>
          <Footages source={Drone} />
        </div>
        <div className="w-full flex flex-col lg:flex-row-reverse justify-evenly">
          <div className="w-1/3 hidden lg:flex" />
          <div className="lg:w-1/3 md:text-justify">
            <div className="Bold text-lg lg:text-2xl font-bold text-slate-800">
              Our mission?
            </div>
            To get your meals from your favorite restaurants to your doorstep in
            record time, while making the process as seamless and exciting as
            possible. Whether you’re in the middle of a busy workday or just
            relaxing at home, we’re here to ensure your food arrives fresh,
            fast, and with a touch of futuristic flair.
          </div>
          <Footages source={Food} />
        </div>
        <div className="w-full flex justify-evenly">
          <div className="w-1/3 hidden lg:flex" />
          <div className="lg:w-1/3 md:text-justify">
            <div className="Bold text-lg lg:text-2xl font-bold text-slate-800">
              What sets us apart?
            </div>
            Our cutting-edge drones and a commitment to sustainability. We’re
            not just delivering meals; we’re also reducing our carbon footprint
            and helping to create a greener planet. We’re proud to be at the
            forefront of a new era in food delivery—one where convenience,
            speed, and sustainability come together.
          </div>
          <Footages source={Bag} />
        </div>
        <div className="w-full flex justify-center p-3">
          Join us as we take delivery to new heights—literally!
        </div>
      </div>
    </div>
  );
};

export default About;
