import { PDFDownloadLink } from "@react-pdf/renderer";
import bgImage10 from "../assets/layouts/bgImage10.png";
import CVDocument from "./CDDocument";
import Template1 from "../components/templatesDesigns/template1";
import Template2 from "../components/templatesDesigns/template2";
import Template3 from "../components/templatesDesigns/template3";
import { useCv } from "../context/CvContext";
import { motion } from "framer-motion";

export default function FinalPreview() {
  const { selectedTemplate, cvData, templateSettings } = useCv();

  return ( 
    <div
      className="min-h-screen w-full flex flex-col items-center px-6 py-16 "
                       style={{
                         backgroundImage: `url(${bgImage10})`,
                         backgroundSize: "100% auto",
                         imageRendering: "high-quality",
                         backgroundColor: "#f6eee8",
                       }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-black mb-10 tracking-wide 
                   drop-shadow-sm"
      >
        Your Final CV
      </motion.h1>


<motion.div
  initial={{ opacity: 0, scale: 0.97 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="
    bg-white shadow-xl rounded-2xl p-10 mb-12
    border border-[#e7d8c8]
    relative flex items-start justify-center
  "
  style={{
    width: "100%",
    maxWidth: "900px",
    height: "85vh",          
    minHeight: "85vh",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  }}
>
  
  <div
    style={{
      transform: "scale(0.78)",     
      transformOrigin: "top center",
      width: "210mm",
      minHeight: "297mm",
      height: "100%",               
    }}
  >
    {selectedTemplate === "template1" && <Template1 />}
    {selectedTemplate === "template2" && <Template2 />}
    {selectedTemplate === "template3" && <Template3 />}
  </div>
</motion.div>
        <PDFDownloadLink
          document={<CVDocument cvData={cvData} templateSettings={templateSettings} />}
          fileName="cv.pdf"
        >
          {({ loading }) =>
            loading ? (
              <button
                className="
                  px-8 py-3 rounded-full bg-[#C25569]/60 text-white 
                  font-medium shadow-md hover:opacity-90 transition
                "
              >
                Preparing PDF…
              </button>
            ) : (
              <button
                className="
                  px-10 py-3 rounded-full bg-[#C25569] text-white 
                  font-semibold text-lg shadow-lg 
                  hover:bg-[#a84557] hover:shadow-xl 
                  transition-all duration-300
                "
              >
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink>   
    </div>
  );
}
