import { useCv } from "../../context/CvContext";
import { useState } from "react";

export const EducationForm = () => {
  const { cvData, setEducation } = useCv();

  const [newEducation, setNewEducation] = useState({
    id: crypto.randomUUID(),
    school: "",
    degree: "",
    from: "",
    to: "",
    description: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewEducation(prev => ({ ...prev, [name]: value }));
  }

  function addEducation() {
    if (!newEducation.school && !newEducation.degree) return; 
    setEducation([...cvData.education.filter( e => e !== null  ), newEducation]);

    setNewEducation({
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      from: "",
      to: "",
      description: ""
    });
  }

  function handleDeleteEducation(id) {
    const filtered = cvData.education.filter(edu => edu.id !== id);
    setEducation(filtered);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6 w-full">
      <h2 className="text-xl font-bold text-gray-800">Parcours Scolaire</h2>
      <div>
        <label className="text-gray-800 mb-1 ml-1 inline-block text-[14px] font-bold md:text-[15px]">
          School
        </label>
        <input
          type="text"
          name="school"
          value={newEducation.school}
          onChange={handleChange}
          placeholder="Enter school"
          className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
        />
      </div>

      <div>
        <label className="text-gray-800 mb-1 ml-1 inline-block text-[14px] font-bold md:text-[15px]">
          Degree
        </label>
        <input
          type="text"
          name="degree"
          value={newEducation.degree}
          onChange={handleChange}
          placeholder="Enter degree"
          className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
        />
      </div>

     
      <div>
        <label className="text-gray-800 mb-1 ml-1 inline-block text-[14px] font-bold md:text-[15px]">
          From
        </label>
        <input
          type="text"
          name="from"
          value={newEducation.from}
          onChange={handleChange}
          placeholder="Start date"
          className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
        />
      </div>

      
      <div>
        <label className="text-gray-800 mb-1 ml-1 inline-block text-[14px] font-bold md:text-[15px]">
          To
        </label>
        <input
          type="text"
          name="to"
          value={newEducation.to}
          onChange={handleChange}
          placeholder="End date"
          className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
        />
      </div>

      
      <div>
        <label className="text-gray-800 mb-1 ml-1 inline-block text-[14px] font-bold md:text-[15px]">
          Description
        </label>
        <textarea
          name="description"
          value={newEducation.description}
          onChange={handleChange}
          placeholder="Describe your studies..."
          rows={4}
          className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
        />
      </div>

      <button
        onClick={addEducation}
        className="w-full text-white py-2 rounded-lg bg-gradient-to-r 
          from-pink-700 to-pink-300 hover:from-pink-800 hover:to-pink-400 
          transition ease-in-out duration-300"
      >
        ADD
      </button>

    <div className="mt-6 space-y-4">
    {cvData.education.length === 0 ? (
      <p className="text-gray-500">Aucun parcours scolaire ajouté pour le moment.</p>
    ) : (
      cvData.education
        .filter(edu => edu && typeof edu === "object")
        .map(edu => (
          <div
            key={edu.id}
            className="border p-4 rounded-lg bg-gray-50 shadow-sm relative"
          >
            <h3 className="font-bold text-gray-800">
              {edu.degree} — {edu.school}
            </h3>

            <p className="text-gray-600">{edu.from} - {edu.to}</p>

            <p className="text-gray-700">{edu.description}</p>

            <button
              onClick={() => handleDeleteEducation(edu.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
            >
              Supprimer
            </button>
          </div>
        ))
    )}
    </div>

    </div>
  );
};
