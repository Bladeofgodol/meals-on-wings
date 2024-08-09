"use client";
import { useRef } from "react";
import useScrollTriggeredCountUp from "./effects/useScrollToCountUp";

// custom type

const Counter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const count_deliveries = useScrollTriggeredCountUp(ref, 9999999999); // 0 to 100 count-up
  const count_users = useScrollTriggeredCountUp(ref, 999999999999); // 0 to 100 count-up
  const count_partners = useScrollTriggeredCountUp(ref, 999999999999); // 0 to 100 count-up
  const count_cities = useScrollTriggeredCountUp(ref, 999999999999); // 0 to 100 count-up

  return (
    <div
      className="h-96 md:h-screen w-full relative flex flex-col md:flex-row justify-around items-center "
      ref={ref}
    >
      <div>{count_deliveries}</div>
      <div>{count_users}</div>
      <div>{count_partners}</div>
      <div>{count_cities}</div>
    </div>
  );
};

export default Counter;
