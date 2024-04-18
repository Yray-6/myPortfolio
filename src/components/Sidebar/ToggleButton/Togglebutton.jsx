import React from 'react'
import { motion } from 'framer-motion'

export default function Togglebutton({setOpen}) {
  return (
    <div>
        <button onClick={()=>setOpen(prev =>!prev)} className='w-[50px] h-[50px] fixed rounded-[50px] z-[9999] left-[35px] top-[25px] bg-transparent'>
            <svg width="25" height="23" viewBox='0 0 23 23'>
                <motion.path strokeWidth="3" stroke='black' strokeLinecap='round'
                variants={{
                    closed:{d:"M 2 2.5 L 20 2.5"},
                    open:{d:"M 3 16.5 L 17 2.5"}
                }}
                />
                <motion.path strokeWidth="3" stroke='black' strokeLinecap='round'
                d="M 3 9.423 L 20  9.423"
                variants={{
                    closed:{opacity:1},
                    open:{opacity:0}
                }}/>
                <motion.path strokeWidth="3" stroke='black' strokeLinecap='round'
                variants={{
                    closed:{d:"M 2 16.346 L 20 16.346"},
                    open:{d:"M 3 2.5 L 17 16.346"}
                }}/>
            </svg>
        </button>
    </div>
  )
}