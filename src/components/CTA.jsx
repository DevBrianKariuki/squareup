import React, { useEffect } from "react";
import { LogoIcon } from "../assets";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CTA = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="zoom-out"
      className={`border-b-[1px] justify-center flex flex-col border-r-[1px] relative md:mx-0 border-l-[1px] border-active w-full`}
    >
      <div
        id="calltoaction"
        className="flex bg-cover w-full py-16 px-5 flex-col justify-center items-center"
      >
        <img data-aos="zoom-out" src={LogoIcon} />
        <h1
          data-aos="fade-right"
          className="font-barlow text-white font-semibold items-center hover:text-primary text-center py-4 text-3xl"
        >
          Let us Bring your Ideas to Life in the Digital World.
        </h1>
        <p
          data-aos="fade-left"
          className="text-neutral-300 font-barlow  text-center md:w-[80%] pb-3 text-lg"
        >
          No matter which services you choose, we are committed to delivering
          exceptional results that exceed your expectations. Our
          multidisciplinary team works closely together to ensure seamless
          collaboration and a unified vision for your digital product.
        </p>
        <Link
          data-aos="fade-up"
          className="w-full flex items-center justify-center"
          to={"/contact"}
        >
          <button className="bg-primary sm:w-[20%] font-barlow py-4 mt-4 rounded-lg font-semibold w-full ">
            Start Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
