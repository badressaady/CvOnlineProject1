import Slider from "../utils/slider";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useCv } from "../context/CvContext";
import Template1 from "../components/templatesDesigns/template1";
import Template2 from "../components/templatesDesigns/template2";
import Template3 from "../components/templatesDesigns/template3";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage10 from "../assets/layouts/bgImage10.png";
export default function Templates() {
  useEffect(() => {}, []);

  const { resetCv, resetTemplate, selectedTemplate } = useCv();
  resetCv();

  const { updateTemplate, templateSettings } = useCv();
  const cvRef = useRef(null);

  function randomColors() {
    updateTemplate({
      backgroundColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
      inputColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
      headerColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
      sideColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
      titleColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
    });
  }

  function removePhoto() {
    updateTemplate({ showPhoto: false });
  }

  function showPhoto() {
    updateTemplate({ showPhoto: true });
  }

  function resetDefault() {
    resetTemplate();
  }

  function renderSelectedTemplate() {
    if (selectedTemplate === "template1") return <Template1 />;
    if (selectedTemplate === "template2") return <Template2 />;
    if (selectedTemplate === "template3") return <Template3 />;
    return (
      <div className="flex h-full items-center justify-center text-gray-400">
        Veuillez sélectionner un template
      </div>
    );
  }

  const templateLabel =
    selectedTemplate === "template1"
      ? "Template 1 – Classique"
      : selectedTemplate === "template2"
      ? "Template 2 – Bandeau"
      : selectedTemplate === "template3"
      ? "Template 3 – Centré"
      : "Aucun template sélectionné";

  return (
    <div 
      style={{
          backgroundImage: `url(${bgImage10})`,
          backgroundSize: "100% auto",       // fills width without vertical stretch
          imageRendering: "high-quality",
          backgroundColor: "#f6eee8",
        }}
      id="editContainer"
      className="min-h-screen w-full bg-gradient-to-br 
        from-[#F7ECE7] via-[#FDF9F6] to-[#F2E2DD] 
        px-4 py-8 flex justify-center 
        bg-no-repeat bg-center 
        "
    >
      <div className="w-full max-w-6xl flex flex-col gap-6 lg:flex-row">

        {/* ───────────────────────────────────────────────
            LEFT PANEL — PERSONALISATION
        ─────────────────────────────────────────────── */}
        <motion.div
          className="w-full lg:w-[40%] flex-shrink-0"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="rounded-3xl bg-[#20101A]/70 backdrop-blur-sm text-white p-6 lg:p-8 flex flex-col gap-6 shadow-xl">

            {/* TEXT HEADER */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-pink-200">
                Étape 2
              </p>
              <h2 className="text-2xl lg:text-3xl font-semibold">
                Personnaliser le design
              </h2>
              <p className="text-xs lg:text-sm text-pink-100/80 max-w-md">
                Ajustez les couleurs, l’en-tête et la photo pour créer un CV professionnel.
              </p>
            </div>

            {/* COLOR FIELDS */}
            <div className="mt-2 space-y-5">

              {/* TITLE COLOR */}
              <ColorField
                label="Couleur des titres"
                value={templateSettings.titleColor}
                onChange={(v) => updateTemplate({ titleColor: v })}
              />

              {/* TEXT COLOR */}
              <ColorField
                label="Couleur du texte"
                value={templateSettings.inputColor}
                onChange={(v) => updateTemplate({ inputColor: v })}
              />

              {/* MAIN BACKGROUND */}
              <ColorField
                label="Arrière-plan principal"
                value={templateSettings.backgroundColor}
                onChange={(v) => updateTemplate({ backgroundColor: v })}
              />

              {/* HEADER COLOR */}
              <ColorField
                label="Bandeau d’en-tête"
                value={templateSettings.headerColor}
                onChange={(v) => updateTemplate({ headerColor: v })}
              />

              {/* SIDE COLOR */}
              <ColorField
                label="Colonne latérale"
                value={templateSettings.sideColor}
                onChange={(v) => updateTemplate({ sideColor: v })}
              />
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <ButtonFull onClick={randomColors} text="Palette aléatoire" />

              <ButtonOutline onClick={removePhoto} text="Masquer la photo" />
              <ButtonOutline onClick={showPhoto} text="Afficher la photo" />

              <ButtonStrong onClick={resetDefault} text="Réinitialiser" />
            </div>
          </div>
        </motion.div>

        {/* ───────────────────────────────────────────────
            RIGHT SIDE — CV PREVIEW
        ─────────────────────────────────────────────── */}
        <motion.div
          className="w-full lg:w-[60%] flex flex-col gap-4"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#4A2435]">
                Aperçu du CV
              </h3>
              <p className="text-xs text-[#8B5C6C]">
                Aperçu en temps réel des modifications.
              </p>
            </div>

            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium 
              text-[#A33855] shadow-sm border border-[#F0CBD6]">
              {templateLabel}
            </span>
          </div>

          {/* CV PREVIEW BOX — WITH ZOOM OUT */}
          <motion.div
            ref={cvRef}
            id="cv-to-print"
            className="relative bg-white rounded-3xl shadow-xl border border-[#F3D7E0] 
              px-6 py-5 flex flex-col gap-4"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#C2889B]">
              Aperçu en direct
            </span>

            {/* ZOOM OUT HERE */}
            <div className="w-full h-[650px] overflow-auto flex justify-center bg-[#F5F1EE] rounded-2xl p-4">
              <div
                className="
                  bg-white 
                  w-[500px] h-[700px] 
                  rounded-xl 
                  overflow-hidden shadow-inner
                  scale-[0.85]             /* 🔥 ZOOM OUT */
                  origin-top
                "
              >
                {renderSelectedTemplate()}
              </div>
            </div>

            {/* BUTTON UNDER CV */}
            <div className="mt-4 flex justify-between items-center">
              <p className="text-xs text-[#8B5C6C]">
                Étape suivante : compléter votre CV.
              </p>
              <Link
                to="/editor"
                className="inline-flex items-center rounded-full bg-[#A33855] 
                text-white text-xs font-medium px-5 py-2 shadow-md hover:bg-[#8E2744] transition"
              >
                Remplir mon CV
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ░░ COMPONENTS ░░ */

function ColorField({ label, value, onChange }) {
  return (
    <div className="grid grid-cols-[1.4fr_1.7fr_auto] items-center gap-3">
      <p className="text-xs lg:text-sm text-pink-50">{label}</p>
      <input
        type="text"
        className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/30 
        text-xs lg:text-sm placeholder-white/50 focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        type="color"
        className="w-9 h-9 rounded-md border border-white/40 cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function ButtonFull({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="col-span-2 rounded-xl border border-pink-200/70 
      bg-white/5 px-4 py-3 text-xs lg:text-sm font-medium 
      hover:bg-white/15 hover:text-pink-100 transition"
    >
      {text}
    </button>
  );
}

function ButtonOutline({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl border border-pink-200/60 px-3 py-3 
      text-xs lg:text-sm font-medium hover:bg-white/10 transition"
    >
      {text}
    </button>
  );
}

function ButtonStrong({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="col-span-2 rounded-xl bg-white text-[#A33855] 
      px-4 py-3 text-xs lg:text-sm font-semibold hover:bg-white/90 transition"
    >
      {text}
    </button>
  );
}
