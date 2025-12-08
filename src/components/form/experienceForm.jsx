import { useCv } from "../../context/CvContext";
import { useState } from "react";

export const ExperienceForm = () => {
  const { cvData, setExperience } = useCv();

function handleDeleteExperience(id) {
  const filtered = cvData.experience.filter(exp => exp.id !== id);
  setExperience(filtered);
}


  const [newExperience, setNewExperience] = useState({
    id: crypto.randomUUID(),
    company: "",
    role: "",
    from: "",
    to: "",
    description: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewExperience(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function addExperience() {
    setExperience([...cvData.experience, newExperience]);

    setNewExperience({
      id: crypto.randomUUID(),
      company: "",
      role: "",
      from: "",
      to: "",
      description: ""
    });
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6 w-full">
      <h2 className="text-xl font-bold text-gray-800">Experience Professionnelle</h2>
      
      
      <div className="space-y-4">
        <div>
          <label className="text-gray-800 mb-[5px] ml-1 inline-block w-full text-[14px] font-bold md:text-[15px]">Company</label>
          <input
            type="text"
            name="company"
            value={newExperience.company}
            onChange={handleChange}
            placeholder="Enter company"
            className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
          />
        </div>

        <div>
          <label className="text-gray-800 mb-[5px] ml-1 inline-block w-full text-[14px] font-bold md:text-[15px]">Role</label>
          <input
            type="text"
            name="role"
            value={newExperience.role}
            onChange={handleChange}
            placeholder="Enter role"
            className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="text-gray-800 mb-[5px] ml-1 inline-block w-full text-[14px] font-bold md:text-[15px]">From</label>
            <input
              type="text"
              name="from"
              value={newExperience.from}
              onChange={handleChange}
              placeholder="Start date"
              className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
            />
          </div>
          <div className="w-1/2">
            <label className="text-gray-800 mb-[5px] ml-1 inline-block w-full text-[14px] font-bold md:text-[15px]">To</label>
            <input
              type="text"
              name="to"
              value={newExperience.to}
              onChange={handleChange}
              placeholder="End date"
              className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-gray-800 mb-[5px] ml-1 inline-block w-full text-[14px] font-bold md:text-[15px]">Description</label>
          <textarea
            name="description"
            value={newExperience.description}
            onChange={handleChange}
            placeholder="Describe your role..."
            className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
            rows={4}
          />
        </div>

        <button
          onClick={addExperience}
          className="w-full text-white py-2 rounded-lg bg-gradient-to-r from-pink-700 to-pink-300 hover:from-pink-800 hover:to-pink-400 transition ease-in-out duration-300"
        >
          ADD
        </button>
      </div>

      <div className="mt-6 space-y-4">
  {cvData.experience.length === 0 ? (
    <p className="text-gray-500">Aucune expérience ajoutée pour le moment.</p>
  ) : (
    cvData.experience.map(exp => (
      <div 
        key={exp.id} 
        className="border p-4 rounded-lg bg-gray-50 shadow-sm relative"
      >
        {/* TITRE */}
        <h3 className="font-bold text-gray-800">
          {exp.role} chez {exp.company}
        </h3>

        {/* DATES */}
        <p className="text-gray-600">
          {exp.from} - {exp.to}
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-700">{exp.description}</p>

        {/* BOUTON SUPPRIMER */}
        <button
          onClick={() => handleDeleteExperience(exp.id)}
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
