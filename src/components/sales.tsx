
import React from "react";

interface List {
  back:string,
  title: string;
  description: string;
  price: string;
  per:string
}

const sales = (props: List) => {
  return (
    <div className={`w-[100%] md:w-[45%] lg:w-[25%] xl:w-[25%] bg-${props.back} h-[80vh] bg-center bg-cover bg-no-repeat relative text-white rounded-[28px]`}>
      <div className="absolute bottom-0 bg-slate-500 rounded-[28px]  py-2 px-5 pt-5">
        <h1 className="font-bold text-[22px]">{props.title}</h1>
        <p className="font-light lg:font-thin lg:text-xs text-[15px]">
         {props.description}
        </p>
        <div className="flex justify-between py-3 pt-10  ">
          <button className="font-semibold  px-4 md:px-6   bg-[#D8D8D8] rounded-[14px]">Add to Bag</button>
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
