"use client";
import Image from "next/image";
import CustomTypewriter from "../effects/typewriter";
import "/public/styles/typewriter.css";
const Greeter = () => {
  return (
    <div className="h-96 md:h-screen w-full relative">
      <Image
        src="/image/sample 1.webp"
        alt="Description of image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="hidden h-96 md:flex"
      />
      <Image
        src="/image/sample 1.webp"
        alt="Description of image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div
        className="relative h-full bg-black/50 w-full lg:flex justify-center p-1 items-center flex-col font-bold hidden text-white  "
        style={{ fontSize: "5rem" }}
      >
        <h1>IT&#39;S A BIRD...</h1>
        <h1>IT&#39;S A PLANE...</h1>
        <div className="flex gap-5">
          <h1>IT&#39;S</h1>
          <CustomTypewriter
            onInit={(typewriter) =>
              typewriter
                .typeString("Breakfast!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Lunch!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Dinner!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Food!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Meals On Wings!")
                .pauseFor(1000)
                .deleteAll()
                .start()
            }
          />
        </div>
      </div>
      <div
        className="relative h-full bg-black/50 w-full flex justify-center p-1 items-center flex-col font-bold md:hidden text-white"
        style={{ fontSize: "30px" }}
      >
        <h1>IT&#39;S A BIRD...</h1>
        <h1>IT&#39;S A PLANE...</h1>
        <div className="flex gap-5">
          <h1>IT&#39;S</h1>
          <CustomTypewriter
            onInit={(typewriter) =>
              typewriter
                .typeString("Breakfast!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Lunch!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Dinner!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Food!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Meals On Wings!")
                .pauseFor(1000)
                .deleteAll()
                .start()
            }
          />
        </div>
      </div>
      <div
        className="relative h-full bg-black/50 w-full md:flex hidden justify-center p-1 items-center flex-col font-bold lg:hidden text-white"
        style={{ fontSize: "4rem" }}
      >
        <h1>IT&#39;S A BIRD...</h1>
        <h1>IT&#39;S A PLANE...</h1>
        <div className="flex gap-5">
          <h1>IT&#39;S</h1>
          <CustomTypewriter
            onInit={(typewriter) =>
              typewriter
                .typeString("Breakfast!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Lunch!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Dinner!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Food!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Meals On Wings!")
                .pauseFor(1000)
                .deleteAll()
                .start()
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Greeter;
