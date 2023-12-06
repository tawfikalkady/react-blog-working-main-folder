// import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto ">
      <div className="text-white text-center ">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          welcome to our blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie,
          leo sed pulvinar sollicitudin, nulla tortor pretium tellus, eu
          placerat ante justo sed odio. In euismod iaculis ex id eleifend.
          Suspendisse vehicula metus ac nisl tempus, vitae dapibus{" "}
        </p>
        <div>
          <Link
            to="/"
            className="font-medium hover:text-orange-500 inline-flex items-center py-1"
          >
            Learn more
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
