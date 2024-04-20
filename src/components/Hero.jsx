import React from "react";
import { motion } from "framer-motion";
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export default function Hero() {
  return (
    <motion.div
      className="h-[90vh] mb-[-200px] bgt overflow-hidden -z-10 relative"
      initial="initial"
      animate="animate"
    >
      <motion.div className="m-auto lg:px-16 max-w-[1366px] h-[100%]">
        <motion.div
          className="flex flex-col gap-[20px] w-[100%] text-center lg:text-left h-[50%] justify-center mt-10 lg:mt-36"
          variants={textVariant}
        >
          <motion.h2
            className=" lg:text-[30px] text-[25px] font-bold text-purple-800 tracking-[0.6rem]"
            variants={textVariant}
          >
            OGHENEVWAIRE ONOBRUDU
          </motion.h2>
          <motion.p className=" lg:text-[80px] text-[36px] font-bold" variants={textVariant}>
            Frontend Web <br></br> Developer
          </motion.p>
          <motion.div className="" variants={textVariant}>
            <motion.button
              className="lg:p-[20px] p-[10px] border rounded-xl mr-[20px] cursor-pointer"
              variants={textVariant}
            >
              See My Latest Work
            </motion.button>
            <motion.button
              className="lg:p-[20px] p-[10px] bg-purple-800 rounded-xl cursor-pointer"
              variants={textVariant}
            >
              contact me
            </motion.button>
          </motion.div>
          
          <motion.img
            src="/scroll.png"
            alt="scroll"
            className="w-[50px] m-auto lg:m-0"
            variants={textVariant}
            animate="scrollButton"
          />
        </motion.div>
        <motion.div
          className="absolute lg:text-[50vh] text-[20vh]  lg:bottom-[-100px] feint whitespace-nowrap w-[50%] font-bold"
          variants={sliderVariant}
          initial="initial"
          animate="animate"
        >
          Oghenevwaire David Onobrudu Frontend Developer
        </motion.div>
        <motion.div className="absolute lg:top-[0px] right-0 lg:h-[100%] h-[50%] unset bottom-0">
          <motion.img src="/hero.png" alt="My image" className="w-[800px]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
