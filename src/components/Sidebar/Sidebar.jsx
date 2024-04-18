import React from 'react'
import Togglebutton from './ToggleButton/Togglebutton'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './Links/Links'

export default function Sidebar() {

  const[open,setOpen] = useState(false)
    
  const variants = {
    open:{
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        type:'spring',
        stiffness:400,
      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay:0.2,
        type:'spring',
        stiffness:400,
        damping:40
      }
    }
  }


  return (
    <motion.div animate={open ? "open":"closed"} className=' bg-white sidebar text-black' >
        <motion.div variants={variants} className=' fixed top-0 left-0 bottom-0 bg-white z-[999] w-[200px] lg:w-[400px]'>
          <Links/>
        </motion.div>
        <Togglebutton  setOpen={setOpen}/>
    </motion.div>
  )
}
