"use client";
import Image from "next/image";
import CustomTypewriter from "./typewriter";
import '/public/styles/typewriter.css';
const Greeter = () => {
    return (
        <div className="h-screen w-full">
        <Image
          src="/image/sample 1.webp"
          alt="Description of image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div
          className="relative h-screen bg-black/50 w-full flex justify-center items-center flex-col font-bold"
          style={{ fontSize: "4rem" }}
        >
          <h1>IT'S A BIRD...</h1>
          <h1>IT'S A PLANE...</h1>
          <div className="flex gap-5">
            <h1>IT'S</h1>
            <CustomTypewriter
              onInit={(typewriter) =>
                typewriter
                  .typeString("Breakfast")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Lunch")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Dinner")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Food")
                  .pauseFor(2500)
                  .deleteAll()
                  .start()
              }
            />
          </div>
        </div>
      </div>
    )
}

export default Greeter;