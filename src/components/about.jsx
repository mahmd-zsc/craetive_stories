import React from "react";
import img from "./images/2.jpg";
function About() {
  return (
    <div id="about" className="about   | sm:px-0 sm:grid sm:grid-cols-2">
      <div className="image w-full h-[500px] | sm:h-auto  "></div>
      <div className="info container m-auto  py-20 flex flex-col gap-5 px-6">
        <h5 className="text-[#61d4e7] relative pl-20 font-bold text-lg   ">
          ABOUT US
        </h5>
        <h2 className=" pl-20 font-bold max-w-full text-5xl  ">
          Time to Make a Difference
        </h2>
        <p className="pl-20 opacity-40 text-lg max-w-full ">
          Phasellus scelerisque arcu vestibulum tempor tempor. Donec vulputate
          leo et metus hendrerit bibendum. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. In scelerisque nisl nec ornare euismod.
        </p>
        <button className="-500 w-fit px-6 py-2 border-4 border-[#61d4e7] font-bold text-lg hover:bg-[#61d4e7] hover:text-white duration-300 uppercase">
          view more
        </button>
      </div>
    </div>
  );
}

export default About;
