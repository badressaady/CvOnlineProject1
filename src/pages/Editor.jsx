import React from "react";
//les formulaires
import { ExperienceForm } from "../components/form/experienceForm";
import { PersonalInfoForm } from "../components/form/PersonalInfoForm";
import { SummaryForm } from "../components/form/summaryForm";
import { LanguagesForm } from "../components/form/languagesForm";
import { SkillsForm } from "../components/form/skillsForm";
import { EducationForm } from "../components/form/educationForm";


import { Link } from "react-router-dom";
//les templates
import Template1 from "../components/templatesDesigns/template1";
import Template2 from "../components/templatesDesigns/template2";
import Template3 from "../components/templatesDesigns/template3";
import { useCv } from "../context/CvContext";
import bgImage10 from "../assets/layouts/bgImage10.png";
import { motion } from "framer-motion";   

export default function Editor() {
  const { selectedTemplate,  resetCv } = useCv();

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
        backgroundImage:`url(${bgImage10})`,
        backgroundSize: "100%", 
        imageRendering: "high-quality",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 pt-4 pb-8"> 
        <div className="flex flex-col md:flex-row gap-8 mt-[-10px]">

          {/*FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} //l'animation commence du gauche , l'opacity au debut est invisible
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

          {/* RIGHT PREVIEW SECTION*/}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-1/2"
          >
            <div
              className="
                sticky top-10 bg-white p-6 rounded-2xl shadow-lg 
                border border-[#E6D5C4] max-h-[900px] overflow-auto space-y-4
              "
            >
              <div
                style={{ width: "150mm", padding: "15mm" }}
                className="mx-auto bg-white min-h-[600px] rounded-xl border border-[#E6D5C4]"
              >
                {renderSelectedTemplate()}
              </div>

              <div className="mt-4 w-full mt-3 px-5 py-3 bg-[#C25569] border border-[#E6D5C4] text-white text-center rounded-xl hover:bg-[#efe2d0] transition shadow-sm">
                <Link
                  to="/finalPreview"
                 
                >
                  Download your Cv
                </Link>
              </div>  
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
