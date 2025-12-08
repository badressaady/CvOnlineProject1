import { useCv } from "../../context/CvContext";

export const SummaryForm = () => {
  const { cvData, updateSummary } = useCv();

  function handleChange(e) {
    const { value } = e.target;
    updateSummary(value);
  }

  const characterCount = cvData.summary.length;
  const maxCharacters = 500;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-800 text-[18px] font-bold">
          Résumé Professionnel
        </h2>

        <div className="text-gray-600 text-[14px]">
          {characterCount}/{maxCharacters} caractères
        </div>
      </div>

      <div>
        <label className="text-gray-800 mb-[5px] ml-1 inline-block w-full text-[14px] font-bold md:text-[15px]">
          Votre résumé
        </label>

        <textarea
          name="summary"
          value={cvData.summary}
          onChange={handleChange}
          rows="6"
          maxLength={maxCharacters}
          placeholder="Décrivez votre parcours professionnel, vos compétences clés et vos objectifs de carrière..."
          className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
        />
      </div>

      <div className="text-gray-600 text-[13px] ml-1">
        💡 Conseils : Soyez concis (3-5 lignes), mettez en avant vos principales compétences et votre valeur ajoutée.
      </div>
    </div>
  );
};
