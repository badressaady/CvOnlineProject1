
import Slider from "../utils/slider";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useCv } from "../context/CvContext";
import Template1 from "../components/templatesDesigns/template1";
import Template2 from "../components/templatesDesigns/template2";
import Template3 from "../components/templatesDesigns/template3";
import { templateDefaults } from "../utils/templateDefaults";
import { useEffect,useRef } from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
export default function Templates() {
  useEffect(() => {
    
   }, []);
  const {resetCv,resetTemplate,selectedTemplate}=useCv();
  resetCv();
  const {updateTemplate,templateSettings}=useCv();
  
  function randomColors(){
    updateTemplate({
      backgroundColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`,
      inputColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`,
      headerColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`,
      sideColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`,
      titleColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    }
        
    );
  }
  function removePhoto(){
    updateTemplate({
      showPhoto:false
    })
  }function showPhoto(){
    updateTemplate({
      showPhoto:true
    })
  }
function resetDefault() {
 resetTemplate();
}
const cvRef = useRef(null);
  function renderSelectedTemplate() {
    if (selectedTemplate === "template1") return <Template1 />;
    if (selectedTemplate === "template2") return <Template2 />;
    if (selectedTemplate === "template3") return <Template3 />;
    return (
      <div className="text-center text-gray-500 p-6 border border-dashed border-gray-300 rounded-md">
        Veuillez sélectionner un template pour prévisualiser votre CV.
      </div>
    );
  }

  return (  
  <div  id="editContainer" className="flex relative  
        gap-4
        justify-center
        max-[999px]:flex-col       
        min-[1000px]:flex-row 
        min-[1000px]:items-start
        bg-[#FAF7F2] pb-10 
        min-w-[600px]">
    <div className=" w-full                  
        max-[999px]:w-[700px]       
        min-[1000px]:w-1/2       
        flex-shrink-0            
        min-w-[350px] ">
          <BackgroundGradient>
                  <div id="container" className="flex flex-col gap-10 mt-10 ml-10  p-10 overflow-hidden">
        <div className="text-3xl font-bold mb-4"><p>Customize your Cv</p></div> 

          <div className="grid grid-cols-[1fr_200px_50px] gap-y-6 w-full">
            <p>Choose a color for the Titles</p>
            <input type="text" className="border w-full" placeholder="#00000" value={templateSettings.titleColor} onChange={(e)=>updateTemplate({titleColor:e.target.value})}/>
            <input type="color" className="w-8 h-8" value={templateSettings.titleColor} onChange={(e)=>updateTemplate({titleColor:e.target.value})}/>

            <p>Choose a color for the inputs</p>
            <input type="text" className="border w-full" placeholder="#00000" value={templateSettings.inputColor} onChange={(e)=>updateTemplate({inputColor:e.target.value})} />
            <input type="color" className="w-8 h-8" value={templateSettings.inputColor} onChange={(e)=>updateTemplate({inputColor:e.target.value})} />

            <p>Choose a color for the background</p>
            <input type="text" className="border w-full" placeholder="#00000" value={templateSettings.backgroundColor} onChange={(e)=>updateTemplate({backgroundColor:e.target.value})} />
            <input type="color" className="w-8 h-8" value={templateSettings.backgroundColor} onChange={(e)=>updateTemplate({backgroundColor:e.target.value})} />

            <p>Choose a color for the HeaderLayout</p>
            <input type="text" className="border w-full" placeholder="#00000" value={templateSettings.headerColor} onChange={(e)=>updateTemplate({headerColor:e.target.value})} />
            <input type="color" className="w-8 h-8" value={templateSettings.headerColor} onChange={(e)=>updateTemplate({headerColor:e.target.value})} />

            <p>Choose a color for the side layout</p>
            <input type="text" className="border w-full" placeholder="#00000" value={templateSettings.sideColor} onChange={(e)=>updateTemplate({sideColor:e.target.value})} />
            <input type="color" className="w-8 h-8" value={templateSettings.sideColor} onChange={(e)=>updateTemplate({sideColor:e.target.value})}/>
          </div>


        <div className="w-full flex justify-between mt-6 p-4">
          <button onClick={randomColors} className="rounded-4 border-1 p-4 hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out cursor-pointer">Generate Random Colors</button>
          <button onClick={removePhoto} className="rounded-4 border-1 p-4  hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out cursor-pointer">Remove Photo</button>
          <button onClick={showPhoto} className="rounded-4 border-1 p-4  hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out cursor-pointer">Add Photo</button>
          <button  className="rounded-4 border-1 p-4  hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out cursor-pointer " onClick={resetDefault} >Reset Default</button>
        </div>
          
      </div>
          </BackgroundGradient>

    </div>
    <div id="customize-side" className="w-full
        max-[999px]:w-full
        min-[1000px]:w-1/2
        flex-shrink-0
        min-w-[350px]
        mt-10">
      <div 
                  ref={cvRef} 
                  id="cv-to-print" 
                  style={{ width: '150mm', padding: '15mm' }} 
                  className="mx-auto min-h-[800px] h-[800px] overflow-auto" 
              >
                  {renderSelectedTemplate()}
              </div>  
    </div>
    
  </div>
    
   
  
  );
}