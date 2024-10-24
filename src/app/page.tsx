"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function Home() {
  return (
    <motion.div
      variants={fadeIn("right", 1)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bg-user1 bg-center w-full h-[70vh] lg:h-[90vh] xl:h-[100vh] bg-no-repeat bg-cover flex justify-center  items-center"
    >
      <div className="flex flex-col items-center mt-[60%] md:mt-[20%] lg:mt-52 xl:mt-72">
        <h1 className="text-[80px] md:text-[170px] lg:text-[230px] xl:text-[280px] leading-[31px] lg:leading-[98px] font-outline">
          JUST
        </h1>
        <h1 className="text-[80px] md:text-[170px] lg:text-[230px] xl:text-[280px]  font-stretch">
          DO IT
        </h1>
      </div>
    </motion.div>
  );
}
