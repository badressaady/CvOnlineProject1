
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useCv } from "./CvContext";
import Template1 from "../components/templatesDesigns/template1"; 

export default function CVPreview() {
  const { cvData } = useCv();

  const downloadPDF = async () => {
    const cv = document.getElementById("cv-template");

    const canvas = await html2canvas(cv, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("mon-cv.pdf");
  };

  return (
    <div className="p-6">
      <button
        onClick={downloadPDF}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Télécharger PDF
      </button>

      <div
        id="cv-template"
        className="bg-white p-6 w-[800px] mt-4 shadow rounded"
      >
        <Template1 cvData={cvData} />
      </div>
    </div>
  );
}
