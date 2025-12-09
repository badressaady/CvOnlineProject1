
import bgImage10 from "../assets/layouts/bgImage10.png";

import Slider from "../utils/slider";
import { useCv } from "../context/CvContext";

import { useEffect } from "react";
import { motion } from "framer-motion";   // <-- ADD THIS

export default function Layouts() {
  useEffect(() => {}, []);

  const { resetCv } = useCv();
  resetCv();

  return (
<div
  className="min-h-screen w-full bg-no-repeat bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url(${bgImage10})`,
    backgroundSize: "100% auto",       // fills width without vertical stretch
    imageRendering: "high-quality",
    backgroundColor: "#f6eee8",
  }}
>


      <motion.div
        id="customize-side"
        className="w-full 
          max-[999px]:w-full
          min-[1000px]:w-1/2
          flex-shrink-0  
          min-w-[350px]
          mt-10
          itemflow-hidden"
        
        initial={{ scale: 0.7, opacity: 0 }}         // start small + hidden
        animate={{ scale: 1, opacity: 1 }}           // animate to normal size
        transition={{ duration: 0.7, ease: "easeOut" }}  // smooth entrance
      >
        <Slider />
      </motion.div>
    </div>
  );
}
