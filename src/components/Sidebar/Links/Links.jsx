import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Links({setOpen}) {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="absolute w-full h-full flex flex-col justify-center gap-[20px] items-center"
      variants={variants}
    >
      <motion.div
        onClick={()=>setOpen(prev =>!prev)}
        className="lg:text-[40px] text-[20px]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        variants={itemVariants}
      >
        <NavLink to="/">Home</NavLink>
      </motion.div>
      <motion.div
        onClick={()=>setOpen(prev =>!prev)}
        className="lg:text-[40px] text-[20px]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        variants={itemVariants}
      >
        <NavLink to="Portfolio">Portfolio</NavLink>
      </motion.div>
    </motion.div>
  );
}
