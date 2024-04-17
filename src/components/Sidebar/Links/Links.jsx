import { motion } from "framer-motion";


export default function Links() {

const variants = {
    
    open:{
            transition:{
                staggerChildren:0.1,
            },
        },
    closed: {
            transition:{
                staggerChildren:0.01,
                staggerDirection:-1,
            },
        },
    };

    const itemVariants = {
        open:{
                y:0,
                opacity:1
        },
        closed : {
           
            y:50,
            opacity:0
        ,
        },
        
    };
    
    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About",
    ]

  return (
    <motion.div  className='absolute w-full h-full flex flex-col justify-center gap-[20px] items-center'  variants={variants}>

        {items.map((link) =>( <motion.a href={`#${link}`} className='text-[40px]'  key={link} whileHover={{scale:1.1}} whileTap={{scale:0.5}} variants={itemVariants}>{link}</motion.a>))}

    </motion.div>
  )
}
