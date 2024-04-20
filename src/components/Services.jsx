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
      className="bgt h-[100%] flex lg:mt-0 pt-5 flex-col gap-[50px] justify-between"
      variants={textVariant}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div
        className=" basis-1/5 lg:self-end self-center text-center flex-col lg:flex-row  lg:mx-0 lg:text-left flex items-center gap-[20px]"
        variants={textVariant}
      >
        <p className="lg:text-[20px] text-[18px] text-right px-10 font-light text-gray-500">
          I focus On Creating seamless User Experiences for your
          business
        </p>
        <hr className="w-[350px]  border-t-2  border-gray-500"></hr>
      </motion.div>
      <motion.div
        className=" basis-2/5 flex flex-col items-center mt-[10px]"
        variants={textVariant}
      >
        <motion.div
          className="flex lg:gap-[50px] gap-[10px] flex-col lg:flex-row text-center items-center lg:text-[60px] text-[30px]"
          variants={textVariant}
        >
          <img
            src="/people.webp"
            alt="image-services"
            className="lg:w-[250px] w-[200px] h-[50px] lg:h-[70px] object-cover rounded-[50px]"
          />
          <h1 className=" font-thin">
            <motion.b className="font-bold" whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </motion.div>
        <motion.div
          className="flex lg:gap-[50px] gap-[20px] lg:flex-row flex-col items-center"
          variants={textVariant}
        >
          <h1 className="lg:text-[60px] text-[30px] font-thin">
            <motion.b className="font-bold" whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button className="text-black bg-orange-500 lg:w-[250px] w-[200px] h-[50px] lg:h-[70px] rounded-[50px] lg:text-[20px] text-[15px] cursor-pointer ">
            WHAT WE DO?
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        className=" basis-2/5 flex flex-col lg:flex-row max-w-[1366px] m-auto "
        variants={textVariant}
      >
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="lg:pt-[50px] lg:px-[50px] lg:pb-[20px] px-10 pb-5 items-center lg:border lg:border-gray-500 flex-col justify-between lg:gap-[30px] gap-[20px] flex"
        >
          <h2 className="text-3xl font-bold">Branding</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aperiam labore voluptate culpa suscipit! Eligendi ut velit
        
          </p> */}
          <button className="lg:p-[7px] p-[10px] cursor-pointer lg:bg-orange-500 border border-orange-500  rounded">
            Reach Me
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="lg:pt-[50px] lg:px-[50px] lg:pb-[20px] px-10 pb-5 items-center lg:border lg:border-gray-500 flex-col justify-between lg:gap-[30px] gap-[20px] flex"
        >
          <h2 className="text-3xl font-bold">Branding</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aperiam labore voluptate culpa suscipit! Eligendi ut velit
        
          </p> */}
          <button className="lg:p-[7px] p-[10px] cursor-pointer lg:bg-orange-500 border border-orange-500  rounded">
            Reach Me
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="lg:pt-[50px] lg:px-[50px] lg:pb-[20px] px-10 pb-5 items-center lg:border lg:border-gray-500 flex-col justify-between lg:gap-[30px] gap-[20px] flex"
        >
          <h2 className="text-3xl font-bold">Branding</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aperiam labore voluptate culpa suscipit! Eligendi ut velit
        
          </p> */}
          <button className="lg:p-[7px] p-[10px] cursor-pointer lg:bg-orange-500 border border-orange-500  rounded">
            Reach Me
          </button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="lg:pt-[50px] lg:px-[50px] lg:pb-[20px] px-10 pb-5 items-center lg:border lg:border-gray-500 flex-col justify-between lg:gap-[30px] gap-[20px] flex"
        >
          <h2 className="text-3xl font-bold">Branding</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aperiam labore voluptate culpa suscipit! Eligendi ut velit
        
          </p> */}
          <button className="lg:p-[7px] p-[10px] cursor-pointer lg:bg-orange-500 border border-orange-500  rounded">
            Reach Me
          </button>
        </motion.div>
      
       
      </motion.div>
    </motion.div>
  );
}
