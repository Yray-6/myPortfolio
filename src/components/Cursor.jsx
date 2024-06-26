import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })};

      window.addEventListener("mousemove", mouseMove);
      return () => window.removeEventListener("mousemove", mouseMove);
    
  }, []);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      className="z-[9999] w-[50px] h-[50px] rounded-full border fixed lg:block hidden"
    ></motion.div>
  );
}
