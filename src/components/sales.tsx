import { StaticImageData } from "next/image";
import React from "react";

interface List {
  back: StaticImageData;
  title: string;
  description: string;
  price: string;
  per: string;
}

const sales = (props: List) => {
  return (
    <div
      className={`w-[100%] md:w-[45%] lg:w-[25%] mb-7 lg:mb-0 xl:w-[25%]  h-[650px] bg-center rounded-3xl bg-cover bg-no-repeat relative text-white `}
      style={{
        backgroundImage: `url(${props.back.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-0 rounded-3xl bg-blue/80   py-2 px-4 pt-5">
        <h1 className="font-bold text-[22px]">{props.title}</h1>
        <p className=" font-thin text-xs text-[15px]">{props.description}</p>
        <div className="flex justify-between items-center py-3 pt-10 lg:pt-5  ">
          <div>
            {" "}
            <button className="font-semibold px-6 py-3   bg-grey/50 rounded-[14px]">
              Add to Bag
            </button>
          </div>
          <div>
            <h3 className="font-bold text-2xl">{props.price}</h3>
            <p className="text-lg">{props.per}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sales;
