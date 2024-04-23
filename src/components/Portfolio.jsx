import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project1",
    description: "lorem hdch d dhvchd jdvcdshc dc dhdvsdh dhs jsdhvh",
    img: "/mck.png",
  },
  {
    id: 2,
    title: "Project2",
    description: "lorem hdch d dhvchd jdvcdshc dc dhdvsdh dhs jsdhvh",
    img: "/mock.png",
  },
  {
    id: 3,
    title: "Project311",
    description: "lorem hdch d dhvchd jdvcdshc dc dhdvsdh dhs jsdhvh",
    img: "/mock.png",
  },
  {
    id: 4,
    title: "Project4",
    description: "lorem hdch d dhvchd jdvcdshc dc dhdvsdh dhs jsdhvh",
    img: "/people.webp",
  },
];

export default function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div ref={ref} className="relative bg-bgs">
      <div className="sticky top-0 left-0  my-4  lg:p-[30px] text-center text-orange-500 text-[35px] lg:text-[70px] font-bold">
        Featured Works
        <motion.div
          style={{ scaleX }}
          className="h-[10px] bg-white dark:bg-bgs rounded"
        ></motion.div>
      </div>
      {items.map((item) => (
        <SingleChild item={item} key={item.id} />
      ))}
    </div>
  );
}

function SingleChild({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section>
      <div className="flex justify-center items-center overflow-hidden w-full h-full dark:bg-gradient-to-b dark:from-white dark:to-gray-300">
        <div className=" max-w-[1366px] h-[100%] lg:justify-center flex flex-col lg:flex-row  lg:px-10 px-2 lg:gap-[50px] gap-[50px] lg:m-auto items-center">
          <div ref={ref} className="lg:h-[50%] max-h-[300px] w-full lg:basis-1/2">
            <img
              src={item.img}
              alt="portfolio-img"
              className="lg:w-[700px] w-full object-cover"
            />
          </div>

          <motion.div
            style={{ y }}
            className=" flex flex-col lg:gap-[30px] gap-[30px] lg:text-left text-center lg:basis-1/2 transn"
          >
            <p className="lg:text-[72px] text-[40px]">{item.title}</p>
            <p className=" text-gray-500 dark:text-bgs text-[20px]">{item.description}</p>
            <button className="lg:self-start self-center bg-orange-500 px-[30px] lg:py-[20px] py-[10px] w-[180px] text-black text-[20px] font-bold rounded">
              Check
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
