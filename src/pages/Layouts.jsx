
import Slider from "../utils/slider";
import { useCv } from "../context/CvContext";

import { useEffect} from "react";
export default function Layouts() {
  useEffect(() => {
    
   }, []);
  const {resetCv,resetTemplate}=useCv();
  resetCv();
  const {updateTemplate,templateSettings}=useCv();

  return (  
    <div className="flex items-center justify-center">
      <div id="customize-side" className="w-full 
        max-[999px]:w-full
        min-[1000px]:w-1/2
        flex-shrink-0  
        min-w-[350px]
        mt-10">
      <Slider/>  
           
    </div>
    </div>
    
    
  
    
   
  
  );
}