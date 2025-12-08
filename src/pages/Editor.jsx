import React, { useRef } from "react"; // <-- Import de useRef ajouté
import { ExperienceForm } from "../components/form/experienceForm";
import { PersonalInfoForm } from "../components/form/PersonalInfoForm";
import { SummaryForm } from "../components/form/summaryForm";
import { LanguagesForm } from "../components/form/languagesForm";
import { SkillsForm } from "../components/form/skillsForm";
import { EducationForm } from "../components/form/educationForm";

import html2pdf from "html2pdf.js";
import Template1 from "../components/templatesDesigns/template1";
import Template2 from "../components/templatesDesigns/template2";
import Template3 from "../components/templatesDesigns/template3";

import { useCv } from "../context/CvContext";

export default function Editor() {
  const { selectedTemplate, cvData, resetCv} = useCv(); 
  
  const cvRef = useRef(null);
  // Télécharger PDF 
  const downloadPDF = () => {
    const element = cvRef.current;

    const options = {
      margin: 0,
      filename: "mon_cv.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
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
    <main className="bg-white min-h-[screen]">
      <div className="max-w-7xl mx-auto p-6">

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Formulaire (Design inchangé) */}
          <div className="w-full md:w-1/2 p-4 bg-white rounded-xl shadow overflow-auto max-h-[80vh]">
            <PersonalInfoForm />
            <LanguagesForm />
            <SkillsForm />
            <EducationForm />
            <ExperienceForm />
            <SummaryForm />
          </div>

          <div className="w-full md:w-1/2 p-4 mt-[-10px]">
            <div className="sticky top-16 min-h-[900px] bg-white p-4 rounded-xl shadow max-h-[80vh]  overflow-auto">
              
              <div 
                  ref={cvRef} 
                  id="cv-to-print" 
                  style={{ width: '150mm', padding: '15mm' }} 
                  className="mx-auto min-h-[800px] h-[800px] overflow-auto" 
              >
                  {renderSelectedTemplate()}
              </div>

              <button
                onClick={resetCv}
                className="mt-2 w-full px-4 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition ease-in-out duration-300 border border-gray-300"
              >
                Réinitialiser le CV
              </button>
              <button
                  onClick={downloadPDF}
                  className="w-full px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow"
                >
                  Télécharger en PDF
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}