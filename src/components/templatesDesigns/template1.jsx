import { useCv } from "../../context/CvContext"; 
import { templateDefaults } from "../../utils/templateDefaults";

export default function Template1() {
  const { cvData } = useCv();
  const { templateSettings } = useCv();

  const info = cvData?.personalInfo || {};
  const summary = cvData?.summary || "";

  const education = (cvData?.education || []).filter(e => e);
  const experience = (cvData?.experience || []).filter(e => e);
  const skills = (cvData?.skills || []).filter(e => e);
  const languages = (cvData?.languages || []).filter(e => e);  

  const defaults = templateDefaults.template1;

  const defaultTitleColor = defaults.titleColor;
  const defaultHeaderColor = defaults.headerColor;
  const defaultBackgroundColor = defaults.backgroundColor;
  const defaultSideColor = defaults.sideColor;
  const defaultInputColor = defaults.inputColor;

  return (
    <div className="flex h-full relative border border-1">

      {/* HEADER — FIXED: removed bg-blue-700 */}
      <div
        className="absolute top-8 right-10 h-40 left-22 shadow-sm flex-col overflow-hidden"
        style={{
          backgroundColor: templateSettings.headerColor || defaultHeaderColor
        }}
      >
        <div
          id="Header"
          className="mx-20 mt-5 font-bold text-xl h-[27px] break-words mr-[10px] overflow-hidden"
        >
          <h2
            className="break-words mr-[10px]"
            style={{ color: templateSettings.titleColor || defaultTitleColor }}
          >
            {(info.firstName || "Prénom")} {(info.lastName || "Nom")}
          </h2>
        </div>

        <div
          id="job-title"
          className="mx-20 text-[12px] whitespace-pre-line break-words mr-[10px] overflow-hidden"
          style={{ color: templateSettings.titleColor || defaultTitleColor }}
        >
          <p>{info.positionTitle || "Intitulé du poste"}</p>
        </div>
      </div>

      {/* LEFT SIDE */}
      <div
        id="left_side"
        className="w-2/5 p-8 pt-50"
        style={{
          backgroundColor: templateSettings.sideColor || defaultSideColor
        }}
      >
        <h3
          className="font-bold text-sm mb-3"
          style={{ color: templateSettings.titleColor || defaultTitleColor }}
        >
          CONTACT
        </h3>

        <div
          className="text-[11px] whitespace-pre-line break-words mr-[10px]"
          style={{ color: templateSettings.inputColor || defaultInputColor }}
        >
          <p><strong>Email:</strong> {info.email || "exemple@email.com"}</p>
          <p><strong>Téléphone:</strong> {info.phone || "Votre numéro"}</p>
          <p><strong>Adresse:</strong> {info.address || "Votre adresse"}</p>
        </div>

        {/* LANGUAGES */}
        <h3
          className="font-bold text-sm mt-8 mb-3"
          style={{ color: templateSettings.titleColor || defaultTitleColor }}
        >
          LANGUES
        </h3>

        {languages.length > 0 ? (
          <ul
            className="text-[11px] space-y-1"
            style={{ color: templateSettings.inputColor || defaultInputColor }}
          >
            {languages.map((lang, i) => (
              <li key={i}>
                {(lang?.name || "Langue")} — {(lang?.level || "Niveau")}
              </li>
            ))}
          </ul>
        ) : (
          <p
            className="text-[11px]"
            style={{ color: templateSettings.inputColor || defaultInputColor }}
          >
            Aucune langue ajoutée
          </p>
        )}

        {/* SKILLS */}
        <h3
          className="font-bold text-sm mt-8"
          style={{ color: templateSettings.titleColor || defaultTitleColor }}
        >
          COMPÉTENCES
        </h3>

        {skills.length > 0 ? (
          <ul
            className="text-sm space-y-1"
            style={{ color: templateSettings.inputColor || defaultInputColor }}
          >
            {skills.map((s, i) => <li key={i}>• {s}</li>)}
          </ul>
        ) : (
          <p
            className="text-[11px]"
            style={{ color: templateSettings.inputColor || defaultInputColor }}
          >
            Aucune compétence ajoutée
          </p>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div
        id="right_side"
        className="w-3/5 pt-50 pl-10"
        style={{
          backgroundColor:
            templateSettings.backgroundColor || defaultBackgroundColor
        }}
      >
        <h3
          className="font-bold text-sm mb-2"
          style={{ color: templateSettings.titleColor || defaultTitleColor }}
        >
          PROFIL PROFESSIONEL
        </h3>

        <p
          className="text-[11px] mb-6 whitespace-pre-line break-words mr-[10px]"
          style={{ color: templateSettings.inputColor || defaultInputColor }}
        >
          {summary || "Votre résumé apparaîtra ici."}
        </p>

        {/* EXPERIENCE */}
        <h3
          className="font-bold text-sm mb-2"
          style={{ color: templateSettings.titleColor || defaultTitleColor }}
        >
          EXPÉRIENCE PROFESSIONNELLE
        </h3>

        {experience.length > 0 ? (
          <ul
            className="text-[11px] space-y-4 mr-[10px]"
            style={{ color: templateSettings.inputColor || defaultInputColor }}
          >
            {experience.map((exp, i) => (
              <li key={exp.id || i}>
                <strong>{exp.role || "Poste"}</strong> —{" "}
                {exp.company || "Entreprise"}
                <br />
                <span className="text-gray-700 text-[10px]">
                  {exp.from || "??"} - {exp.to || "??"}
                </span>
                <br />
                {exp.description && (
                  <p className="whitespace-pre-line mt-1">
                    {exp.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p
            className="text-[11px]"
            style={{ color: templateSettings.inputColor || defaultInputColor }}
          >
            Aucune expérience ajoutée
          </p>
        )}

        {/* EDUCATION */}
        <h3
          className="font-bold text-sm mt-6 mb-2"
          style={{ color: templateSettings.titleColor || defaultTitleColor }}
        >
          ÉDUCATION
        </h3>

        {education.length > 0 ? (
          <div
            className="text-[11px] space-y-4 mr-[10px]"
            style={{ color: templateSettings.inputColor || defaultInputColor }}
          >
            {education.map((edu, i) => (
              <div key={edu.id || i}>
                <strong>{edu.degree || "Diplôme"}</strong> —{" "}
                {edu.school || "École"}
                <br />
                <span className="text-gray-700 text-[10px]">
                  {edu.from || "??"} - {edu.to || "??"}
                </span>
                <br />
                {edu.description && (
                  <p className="whitespace-pre-line mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p
            className="text-[11px]"
            style={{ color: templateSettings.inputColor || defaultInputColor }}
          >
            Aucune éducation ajoutée
          </p>
        )}
      </div>

      {/* PHOTO */}
      {templateSettings.showPhoto && (
        <div
          id="picture"
          className="rounded-full absolute h-25 w-25 top-14 left-10 border border-1"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img
            className="h-25 w-25 object-cover rounded-full bg-center"
            src={info.profileImage || ""}
            alt=""
          />
        </div>
      )}
    </div>
  );
}
