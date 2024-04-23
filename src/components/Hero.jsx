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
      className="h-[87vh] mb-[-200px]  bg-gradient-to-b from-bgs to to-bgs1  dark:bg-gradient-to-b dark:from-white dark:to-gray-300 overflow-hidden z-10 relative"
      initial="initial"
      animate="animate"
    >
      <motion.div className="m-auto lg:px-16 max-w-[1366px] dark:bg-transparent h-[100%]">
        <motion.div
          className="flex flex-col gap-[20px] w-[100%] lg:w-[60%] mt-36 text-center lg:text-left h-[50%] justify-center lg:mt-36"
          variants={textVariant}
        >
          <motion.h2
            className=" lg:text-[29px] text-[23px] font-bold text-gray-300 tracking-[0.3rem]"
            variants={textVariant}
          >
            <code className="text-purple-800 lg:whitespace-nowrap">
              {" "}
              <code className="text-white">OGHENEVWAIRE ONOBRUDU</code>{" "}
              &lt;Frontend Developer/&gt;
            </code>
          </motion.h2>

          <motion.div className=" lg:text-lg  lg:bg-bgs lg:p-4 px-5 lg:rounded-xl lg:shadow-cus lg:mt-5 ">
            <code className="lg:hidden">
              I'm Oghenevwaire, a frontend developer passionate about creating
              great web experiences. With 2 years of experience focused on
              building fast and responsive client interface to meet the need of
              businesses and users using technologies like html, css and js. I
              stay updated on tech like React and Next.js and love
              collaborating. Let's build together!
            </code>
            <code className="lg:block hidden">
              Hey there, I'm Oghenevwaire, a frontend developer who loves
              crafting awesome web experiences. With 2 years of experience, I
              specialize in HTML, CSS, and JavaScript, always exploring new ways
              to make websites shine. I'm all about building sites that work
              seamlessly on any device and load lightning fast. I'm constantly
              learning, keeping up with cool tech like React and Next.js. I'm a
              team player, detail-oriented, and ready to collaborate on
              something awesome. Let's build something together!.
            </code>
          </motion.div>
          {/* <motion.p className=" lg:text-[80px] text-[36px] font-bold" variants={textVariant}>
            Frontend Web <br></br> Developer
          </motion.p> */}
          <motion.div
            className="flex gap-[100px] px-5 lg:px-0"
            variants={textVariant}
          >
            <motion.button
              className=" lg:text-xl text-purple-700  mr-[20px] font-bold cursor-pointer"
              variants={textVariant}
            >
              <code> Download Resume</code>
            </motion.button>
            <motion.a
              className="lg:text-xl rounded-xl text-purple-700 dark:text-white font-bold cursor-pointer"
              variants={textVariant}
              href="#Portfolio"
            >
              <code>My Works</code>
            </motion.a>
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
          className="absolute lg:text-[50vh] text-[20vh]  lg:bottom-[-100px] dark:text-gray-400 -z-10 feint whitespace-nowrap w-[50%] font-bold"
          variants={sliderVariant}
          initial="initial"
          animate="animate"
        >
          Oghenevwaire David Onobrudu Frontend Developer
        </motion.div>
        <motion.div className="absolute lg:top-[0px] right-0 lg:h-[100%] h-[50%] hidden unset bottom-0">
          <motion.img src="/hero.png" alt="My image" className="w-[800px]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
