import React from "react";
import img from "./images/2.jpg";
function Studio() {
  return (
    <div id="studio" className="studio   | sm:px-0 sm:grid sm:grid-cols-2">
      <div className="image w-full h-[500px] | sm:h-auto  "></div>
      <div className="info container m-auto  py-20 flex flex-col gap-5 px-6">
        <h5 className="text-[#ed92ae] relative pl-20 font-bold text-lg   ">
          DIGITAL STUDIO
        </h5>
        <h2 className=" pl-20 font-bold max-w-full text-5xl  ">
          We develop Digital Strategies
        </h2>
        <p className="pl-20 opacity-40 text-lg max-w-full ">
          Our core clients are from the Europe countries metus hendrerit
          bibendum. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. In scelerisque nisl nec ornare euismod.
        </p>
        <button className="-500 w-fit px-6 py-2 border-4 border-[#ed92ae] font-bold text-lg hover:bg-[#ed92ae] hover:text-white duration-300 uppercase">
          view more
        </button>
      </div>
    </div>
  );
}

export default Studio;
