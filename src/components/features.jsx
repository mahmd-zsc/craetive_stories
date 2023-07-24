import React from "react";
import img from "./images/2.jpg";
function Features() {
  return (
    <div id="features" className="features   | sm:px-0 sm:grid sm:grid-cols-2">
      <div className="info container m-auto  py-20 flex flex-col gap-5 px-6 w-full">
        <h5 className="text-[#f6d427] relative pl-20 font-bold text-lg   ">
          Features US
        </h5>
        <h2 className=" pl-20 font-bold max-w-full text-5xl  ">
          Create Your Visual Style
        </h2>
        <p className="pl-20 opacity-40 text-lg max-w-full ">
          Maecenas non ipsum sollicitudin, sollicitudin ligula et, pharetra
          enim. Praesent rhoncus, lorem eget auctor finibus, turpis turpis
          feugiat orci, non porta nisi augue quis ligula. Pellentesque dictum
          nulla in massa ornare, porttitor
        </p>
        <button className="-500 w-fit px-6 py-2 border-4 border-[#f6d427] font-bold text-lg hover:bg-[#f6d427] hover:text-white duration-300 uppercase">
          view more
        </button>
      </div>
      <div className="image w-full h-[500px] | sm:h-auto   "></div>
    </div>
  );
}

export default Features;
