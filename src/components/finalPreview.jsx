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
      className="min-h-screen w-full flex flex-col items-center px-6 py-16 
                 bg-gradient-to-b from-[#F7ECE2] to-[#F2DED0]
                 bg-no-repeat bg-center "
                       style={{
                         backgroundImage: `url(${bgImage10})`,
                         backgroundSize: "100% auto",
                         imageRendering: "high-quality",
                         backgroundColor: "#f6eee8",
                       }}
    >

      {/* HEADER SECTION */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-black mb-10 tracking-wide 
                   drop-shadow-sm"
      >
        Your Final CV
      </motion.h1>

      {/* CARD WRAPPER */}
{/* CARD WRAPPER (Scaled CV) */}
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
    height: "85vh",          // CV fully visible
    minHeight: "85vh",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  }}
>
  {/* SCALE WRAPPER — ONLY new addition */}
  <div
    style={{
      transform: "scale(0.78)",     // CV smaller
      transformOrigin: "top center",
      width: "210mm",
      minHeight: "297mm",
      height: "100%",               // full height of container
    }}
  >
    {/* Decorative top accent stays the same */}
    <div
      className="absolute top-0 left-0 w-full h-3 rounded-t-2xl"
      style={{
        background:
          "linear-gradient(90deg, #C25569, #d77a89, #C25569)",
      }}
    />

    {/* LIVE TEMPLATE */}
    {selectedTemplate === "template1" && <Template1 />}
    {selectedTemplate === "template2" && <Template2 />}
    {selectedTemplate === "template3" && <Template3 />}
  </div>
</motion.div>


      {/* DOWNLOAD BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
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
      </motion.div>
    </div>
  );
}
