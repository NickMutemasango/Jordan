import React from "react";
import Image from "next/image";
import Home from "../../Images/Home.svg";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <Image src={Home} alt="" />
      </div>
      <div className="px-4 md:w-1/2 md:pt-10 xl:pt-16 space-y-3">
        <h1 className="font-bold text-5xl">AIR JORDAN</h1>
        <h4 className="text-3xl font-medium">1 MID - RED</h4>
        <p className="font-medium text-sm xl:text-xl">
          Inspired by the original that debuted in 1985, the Air Jordan 1 Low
          offers a clean, classic look that's familiar yet always fresh. With an
          iconic design that pairs perfectly with any 'fit, these kicks ensure
          you'll always be on point.
        </p>
        <div className="flex space-x-6 xl:space-x-16 xl:pt-3">
          <h2 className="font-extrabold text-2xl">SIZE</h2>
          <div className="bg-gray px-6 py-2 rounded-lg">M8/W10</div>
          <div className="bg-gray px-6 py-2 rounded-lg">M9/W12</div>
        </div>
        <div className="flex justify-center pt-3 xl:w-[80%]">
          <div className="bg-gray px-6 py-2 rounded-lg">M9/W12</div>
        </div>
        <div className="flex justify-center pt-6">
          <button className="bg-black w-[90%] text-white py-2 xl:w-[80%] rounded-2xl">Add to Bag</button>
        </div>
      </div>
    </div>
  );
};

export default page;
