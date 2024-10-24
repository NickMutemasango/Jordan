"use client"

import React from "react";
import Sales from "../../components/sales";
import user1 from "../../Images/user1.svg";
import user2 from "../../Images/user2.svg";
import user3 from "../../Images/user3.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const page = () => {
  return (
    <motion.div
      variants={fadeIn("down", 1)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="container mx-auto flex flex-col py-5 px-8 md:flex-row md:flex-wrap md:justify-center md:space-x-6 xl:space-x-10"
    >
      <Sales
        back={user1}
        title="SWEAT SHIRT"
        description="Zip up, head out and stay fresh in this sleek hoodie. Its full-length zipper extends up to the hood, keeping wind and chill at bay."
        price="35%"
        per="OFF"
      />
      <Sales
        back={user2}
        title="JORDAN JACKET"
        description="Nike Forward catapults your classic Jacket into the future.  A lighter future is a brighter future. Join us for the journey Forward, and let’s experience it together."
        price="$199"
        per="ONLY"
      />
      <Sales
        back={user3}
        title="JORDAN FLIGHT"
        description="The Flight Suit has been fundamental to Jordan Brand ever since MJ first showed it off in the '80s, classic Jacket into the future. "
        price="$349"
        per="ONLY"
      />
    </motion.div>
  );
};

export default page;
