import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";
import {Outlet} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="h-[100px]">
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
          <a href="">
            <img src="/linkedin.png" className="w-[30px] h-[30px]" />
          </a>
          <a href="">
            <img src="/github.png" className="w-[30px] h-[30px]" />
          </a>
          <a href="">
            <img src="/mails.png" className="w-[30px] h-[30px]" />
          </a>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
