import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";

export default function Navbar() {
  return (
    <div className="h-[100px]">
      <Sidebar />
      <div className=" max-w-[1366px] m-auto flex justify-end lg:justify-between rapper h-[100%] px-5 lg:px-16 ">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" font-bold lg:block hidden"
        >
          Y-ray Tech
        </motion.span>
        <div className=" flex gap-5">
          <a href="">
            <img src="/facebook.png" className="w-[18px] h-[18px]" />
          </a>
          <a href="">
            <img src="/instagram.png" className="w-[18px] h-[18px]" />
          </a>
          <a href="">
            <img src="/youtube.png" className="w-[18px] h-[18px]" />
          </a>
          <a href="">
            <img src="/facebook.png" className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
