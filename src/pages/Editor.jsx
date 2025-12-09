import React, { useRef } from "react";
import { ExperienceForm } from "../components/form/experienceForm";
import { PersonalInfoForm } from "../components/form/PersonalInfoForm";
import { SummaryForm } from "../components/form/summaryForm";
import { LanguagesForm } from "../components/form/languagesForm";
import { SkillsForm } from "../components/form/skillsForm";
import { EducationForm } from "../components/form/educationForm";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CVDocument from "../components/CDDocument";
import html2pdf from "html2pdf.js";
import { Link } from "react-router-dom";
import Template1 from "../components/templatesDesigns/template1";
import Template2 from "../components/templatesDesigns/template2";
import Template3 from "../components/templatesDesigns/template3";
import { useCv } from "../context/CvContext";
import bgImage10 from "../assets/layouts/bgImage10.png";
import { motion } from "framer-motion";   // <-- ADDED

export default function Editor() {
  const { selectedTemplate, cvData, resetCv, templateSettings } = useCv();
  const cvRef = useRef(null);

  const downloadPDF = () => {
    const element = cvRef.current;
    const options = {
      margin: 0,
      filename: "mon_cv.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm",      format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

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
    <main
      className="min-h-screen w-full bg-[#FAF6F2] bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bgImage10})`,
        backgroundSize: "100% auto",
        imageRendering: "high-quality",
        backgroundColor: "#f6eee8",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 pt-4 pb-8">

        <div className="flex flex-col md:flex-row gap-8 mt-[-10px]">

          {/* LEFT FORM SECTION — WITH SLIDE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-lg border border-[#E6D5C4] max-h-[85vh] overflow-auto space-y-6"
          >
            <PersonalInfoForm />
            <LanguagesForm />
            <SkillsForm />
            <EducationForm />
            <ExperienceForm />
            <SummaryForm />
          </motion.div>

          {/* RIGHT PREVIEW SECTION — WITH SLIDE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-1/2"
          >
            <div
              className="
                sticky top-10 bg-white p-6 rounded-2xl shadow-lg 
                border border-[#E6D5C4] max-h-[85vh] overflow-auto space-y-4
              "
            >

              {/* LIVE PREVIEW */}
              <div
                ref={cvRef}
                id="cv-to-print"
                style={{ width: "150mm", padding: "15mm" }}
                className="mx-auto bg-white min-h-[600px] shadow-inner rounded-xl border border-[#E6D5C4]"
              >
                {renderSelectedTemplate()}
              </div>

              {/* PDF DOWNLOAD BUTTON */}
              <div className="mt-4">
                <Link
                  to="/finalPreview"
                  className="w-full px-5 py-3 bg-[#C25569] hover:bg-[#a84557] text-white rounded-xl font-semibold shadow-md transition"
                >
                  Download your Cv
                </Link>
              </div>

              {/* RESET BUTTON */}
              <button
                onClick={resetCv}
                className="w-full mt-3 px-5 py-3 bg-[#f7f2ec] border border-[#E6D5C4] text-gray-700 rounded-xl hover:bg-[#efe2d0] transition shadow-sm"
              >
                Réinitialiser le CV
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
