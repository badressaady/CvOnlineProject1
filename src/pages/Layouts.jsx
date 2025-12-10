
import bgImage10 from "../assets/layouts/bgImage10.png";

import Slider from "../utils/slider";
import { useCv } from "../context/CvContext";
import { useEffect } from "react";
import { motion } from "framer-motion";  

export default function Layouts() {
  useEffect(() => {}, []);

  const { resetCv } = useCv();
  resetCv();

  return (
<div
  className="min-h-screen w-full bg-no-repeat bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url(${bgImage10})`,
    backgroundSize: "100%",       
    imageRendering: "high-quality",
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
        
        initial={{ scale: 0.7, opacity: 0 }}         
        animate={{ scale: 1, opacity: 1 }}           
        transition={{ duration: 0.7, ease: "easeOut" }}  
      >
        <Slider />
      </motion.div>
</div>
  );
}
