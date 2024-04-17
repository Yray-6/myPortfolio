import React from 'react'
import { motion } from 'framer-motion';

const variants = {
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1
    }
  }
}

export default function Contact() {
  return (
   <motion.div className='max-w-[1366px] flex justify-between items-center m-auto h-full' variants={variants} initial="initial" whileInView="animate">
    <motion.div className='basis-1/2 flex flex-col gap-[30px] ' variants={variants}>
      <motion.p className='text-[80px] font-bold leading-tight' variants={variants}> Lets Work Together</motion.p>
      <motion.div variants={variants}>
        <p className=' font-bold text-2xl mb-2'>Mail</p>
        <p className=' font-light text-lg'>vwaireonobrudu@gmail.com</p>
      </motion.div>
      <motion.div variants={variants}>
        <p className=' font-bold text-2xl mb-2'>Address</p>
        <p className=' font-light text-lg'>Delta State</p>
      </motion.div>
      <motion.div variants={variants}>
        <p className=' font-bold text-2xl mb-2'>Phone</p>
        <p className=' font-light text-lg'>+234 813 095 4077</p>
      </motion.div>
    </motion.div>
    <div className='basis-1/2 '>
      <form action="" className='flex flex-col gap-[20px]'>
        <input type="text" className='bg-transparent  border-gray-500 border-[0.5px] p-3 rounded' required placeholder='Name' />
        <input type="email" required placeholder='Email' className='bg-transparent rounded border-gray-500 border-[0.5px] p-3'/>
        <textarea  rows={8} placeholder='Message' className='bg-transparent rounded border-gray-500 border-[0.5px] p-3'></textarea>
        <button className=' bg-orange-500 p-3 text-black rounded font-bold cursor-pointer'> Submit</button>
      </form>
    </div>
   </motion.div>
  )
}
