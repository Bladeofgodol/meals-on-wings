const About = () => {
  return (
    <div className=" w-screen lg:h-screen flex pt-12 px-5 flex-col  items-center justify-end">
      <div className="text-4xl md:text-6xl font-bold text-gray-700">
        ABOUT US
      </div>
      <div className="w-full flex flex-col gap-10 md:px-10 lg:px-20 py-10 text-md lg:text-xl justify-center">
        <div className="w-full flex">
          <p className="w-1/2 text-justify">
            At Meals on Wings, we're redefining the way you experience food
            delivery. Founded with a passion for innovation and a love for good
            food, we're a team of tech enthusiasts, foodies, and dreamers who
            believe that the future of delivery is airborne.
          </p>
          <div className="w-1/2 flex justify-center">image</div>
        </div>
        <div className="w-full flex flex-row-reverse">
          <p className="w-1/2 text-justify">
            <div className="Bold text-lg lg:text-2xl font-bold text-slate-800">Our mission?</div>To get your meals from your favorite restaurants to
            your doorstep in record time, while making the process as seamless
            and exciting as possible. Whether you’re in the middle of a busy
            workday or just relaxing at home, we’re here to ensure your food
            arrives fresh, fast, and with a touch of futuristic flair.
          </p>
          <div className="w-1/2 flex justify-center">image</div>
        </div>
        <div className="w-full flex ">
          <p className="w-1/2 text-justify">
          <div className="Bold text-lg lg:text-2xl font-bold text-slate-800">What sets us apart?</div> Our cutting-edge drones and a commitment to
            sustainability. We’re not just delivering meals; we’re also reducing
            our carbon footprint and helping to create a greener planet. We’re
            proud to be at the forefront of a new era in food delivery—one where
            convenience, speed, and sustainability come together.
          </p>
          <div className="w-1/2 flex justify-center">image</div>
        </div>
        <div className="w-full flex justify-center">
          Join us as we take delivery to new heights—literally!
        </div>
      </div>
    </div>
  );
};

export default About;
