import React from "react";
import img1 from "./images/9.jpg";
import img2 from "./images/10.jpg";
import img3 from "./images/11.jpg";
import img4 from "./images/12.jpg";
import img5 from "./images/13.jpg";
import img6 from "./images/14.jpg";
function Portfolio() {
  let images = [img1, img2, img3, img4, img5, img6];
  return (
    <div
      id="portfolio"
      className="portfolio container m-auto px-6 sm:px-0 my-40 "
    >
      <div className="info flex flex-col items-center text-center mb-20">
        <h5 className="text-[#ed92ae]  text-2xl mb-6 ">Portfolio </h5>
        <h2 className="font-bold text-4xl sm:text-5xl w-[600px] max-w-full ">
          We are nominated to Agency of Year
        </h2>
      </div>
      <div className="images grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((i) => (
          <div className="img overflow-hidden h-[400px] sm:h-[300px] ">
            <img
              className=" w-full h-full hover:scale-150 duration-300 hover:rotate-6 "
              src={i}
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
