import { useCv } from "../../context/CvContext";
import { useState } from "react";

export const LanguagesForm = () => {
  const { cvData, setLanguages } = useCv();
  const [newLanguage, setNewLanguage] = useState({ name: "", level: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewLanguage((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function addLanguage() {
    setLanguages([...cvData.languages, newLanguage]);
    setNewLanguage({ name: "", level: "" });
  }

  function handleDeleteLanguage(indexToDelete) {
    const filtered = cvData.languages.filter((_, i) => i !== indexToDelete);
    setLanguages(filtered);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6 w-full">
      <h2 className="text-black font-bold">Add Language</h2>

      <div className="space-y-3 bg-white">
        
        <div>
          <label className="text-gray-800 mb-[5px] ml-1 inline-block w-full text-[14px] font-bold md:text-[15px]">Language</label>
          <input
            type="text"
            name="name"
            value={newLanguage.name}
            onChange={handleChange}
            placeholder="enter language"
            className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
          />
        </div>

        <div>
          <label className="text-gray-800 mb-[5px] ml-1 inline-block w-full text-[14px] font-bold md:text-[15px]">Level</label>
          <input
            type="text"
            name="level"
            value={newLanguage.level}
            onChange={handleChange}
            placeholder="enter level (e.g., Beginner, Intermediate, Advanced)"
            className="w-full border border-gray-200 bg-gray-100 rounded-lg p-2 outline-none"
          />
        </div>

      </div>

      <button
        onClick={addLanguage}
        className="w-full text-white py-2 rounded-lg 
        bg-gradient-to-r from-pink-700 to-pink-300 hover:from-pink-800 hover:to-pink-400 
        transition ease-in-out duration-300"
      >
        Add Language
      </button>

      <div>
        {cvData.languages.length === 0 ? (
          <p className="text-gray-500">No languages added yet.</p>
        ) : (
          <ul className="space-y-2">
            {cvData.languages.map((lang, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span>{lang.name} — {lang.level}</span>

                <button
                  onClick={() => handleDeleteLanguage(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  supprimer
                </button>

              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};
