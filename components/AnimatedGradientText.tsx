import { motion } from "framer-motion";
import React from "react";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className = "",
}) => (
  <motion.span
    initial={{ backgroundPosition: "0% 50%" }}
    animate={{ backgroundPosition: "100% 50%" }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
      ease: "linear",
    }}
    className={`inline-block px-3 py-1 rounded-xl border border-[#444] bg-black bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent font-medium text-base ${className}`}
    style={{
      border: "1px solid #444",
      backgroundColor: "#000",
    }}
  >
    {children}
  </motion.span>
);

export default AnimatedGradientText;
