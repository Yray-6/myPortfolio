import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      className="w-[100%] h-[100%] relative justify-center items-center flex overflow-hidden"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} className=" lg:text-[100px] text-[70px] text-center font-bold">
        {type === "services" ? "What We Do?" : "What We've Done?"}
      </motion.h1>
      <motion.div className="mountains lg:bg-cover bg-contain bg-bottom bg-no-repeat absolute"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets  absolute"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars absolute"></motion.div>
    </div>
  );
}
