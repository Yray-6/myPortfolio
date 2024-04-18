import React, { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
export default function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="bgt h-[100%] flex lg:mt-0 pt-5 flex-col justify-between"
      variants={textVariant}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div
        className=" basis-1/5 lg:self-end self-center text-center flex-col lg:flex-row  lg:mx-0 lg:text-left flex items-center gap-[20px]"
        variants={textVariant}
      >
        <p className="lg:text-[20px] text-[18px] text-right px-7 font-light text-gray-500">
          I focus On Creating seamless User Experiences for your
          business
        </p>
        <hr className="w-[300px]  border-t-2  border-gray-500"></hr>
      </motion.div>
      <motion.div
        className=" basis-2/5 flex flex-col items-center mt-[10px]"
        variants={textVariant}
      >
        <motion.div
          className="flex gap-[50px] items-center text-[60px]"
          variants={textVariant}
        >
          <img
            src="/people.webp"
            alt="image-services"
            className="w-[250px] h-[70px] object-cover rounded-[50px]"
          />
          <h1 className=" font-thin">
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </motion.div>
        <motion.div
          className="flex gap-[50px]  items-center"
          variants={textVariant}
        >
          <h1 className="text-[60px] font-thin">
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button className="text-black bg-orange-500 w-[250px] h-[70px] rounded-[50px] text-[20px] cursor-pointer ">
            WHAT WE DO?
          </button>
        </motion.div>
      </motion.div>
      {/* <motion.div
        className=" basis-2/5 flex max-w-[1366px] m-auto "
        variants={textVariant}
      >
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="pt-[50px] px-[50px] pb-[20px] border border-gray-500 flex-col justify-between gap-[30px] flex"
        >
          <h2 className="text-3xl font-bold">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aperiam labore voluptate culpa suscipit! Eligendi ut velit
            voluptatem illo nihil est iusto repudiandae illum inventore
            exercitationem. Ullam atque ducimus eaque?
          </p>
          <button className="p-[7px] cursor-pointer bg-orange-500 rounded">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="pt-[50px] px-[50px] pb-[20px] border border-gray-500 flex-col justify-between gap-[30px] flex"
        >
          <h2 className="text-3xl font-bold">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aperiam labore voluptate culpa suscipit! Eligendi ut velit
            voluptatem illo nihil est iusto repudiandae illum inventore
            exercitationem. Ullam atque ducimus eaque?
          </p>
          <button className="p-[7px] cursor-pointer bg-orange-500 rounded">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="pt-[50px] px-[50px] pb-[20px] border border-gray-500 flex-col justify-between gap-[30px] flex"
        >
          <h2 className="text-3xl font-bold">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aperiam labore voluptate culpa suscipit! Eligendi ut velit
            voluptatem illo nihil est iusto repudiandae illum inventore
            exercitationem. Ullam atque ducimus eaque?
          </p>
          <button className="p-[7px] cursor-pointer bg-orange-500 rounded">
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="pt-[50px] px-[50px] pb-[20px] border border-gray-500 flex-col justify-between gap-[30px] flex"
        >
          <h2 className="text-3xl font-bold">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aperiam labore voluptate culpa suscipit! Eligendi ut velit
            voluptatem illo nihil est iusto repudiandae illum inventore
            exercitationem. Ullam atque ducimus eaque?
          </p>
          <button className="p-[7px] cursor-pointer bg-orange-500 rounded">
            Go
          </button>
        </motion.div>
      </motion.div> */}
    </motion.div>
  );
}
