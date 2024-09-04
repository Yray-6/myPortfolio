import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";
import {Outlet} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="h-[13vh]">
      <div className="dark:bg-white bg-bgs max-w-[1366px] m-auto flex justify-end lg:justify-between rapper h-[100%] px-5 lg:px-16 ">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" font-bold lg:block hidden"
        >
          Y-ray Tech
        </motion.span>
        <div className=" flex lg:gap-8 gap-5">
          <a href="https://linkedin.com/in/oghenevwaire-onobrudu-b56908262" target="_blank">
            <img src="/linkedin.png" className="w-[30px] h-[30px] max-[390px]:h-[20px] max-[390px]:w-[20px]" />
          </a>
          <a >
            <img src="/github.png" className="w-[30px] h-[30px] max-[390px]:h-[20px] max-[390px]:w-[20px]" />
          </a>
          <a href="mailto:vwaireonobrudu@gmail.com">
            <img src="/gmail.png" className="w-[30px] h-[30px] max-[390px]:h-[20px] max-[390px]:w-[20px]" />
          </a>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
