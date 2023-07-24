import React from "react";
import img1 from "./images/16.png";
import img2 from "./images/17.png";
import img3 from "./images/18.png";
import img4 from "./images/19.png";
function Work() {
  let data = [
    {
      img: img1,
      text: "DEVELOPMENT",
      background: "#61d4e7",
    },
    {
      img: img2,
      text: "DESIGN",
      background: "#f6d427",
    },
    {
      img: img3,
      text: "EDITING",
      background: "#ed92ae",
    },
    {
      img: img4,
      text: "STRATEGY",
      background: "#61d4e7",
    },
  ];

  return (
    <div className="work container px-6 sm:px-0 m-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-white mb-40 ">
      {data.map((e) => (
        <div
          className="flex flex-col items-center py-20 gap-10 md:py-10 relative lg:hover:-translate-y-10 duration-300"
          style={{ background: e.background }}
        >
          <img className="w-20" src={e.img} alt="" />
          <h5 className=" text-lg font-medium">{e.text}</h5>
        </div>
      ))}
    </div>
  );
}

export default Work;
