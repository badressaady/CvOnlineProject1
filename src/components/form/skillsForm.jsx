import { useCv } from "../../context/CvContext";
import { useState } from "react";

export const SkillsForm = () => {
  const { cvData, setSkills } = useCv();
  const [newSkill, setNewSkill] = useState("");

  function handleChange(e) {
    setNewSkill(e.target.value);
  }

  function addSkill() {
    if (!newSkill.trim()) return;
    setSkills([...cvData.skills, newSkill]);
    setNewSkill("");
  }

  function handleDeleteSkill(index) {
    const filtered = cvData.skills.filter((_, i) => i !== index);
    setSkills(filtered);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6 w-full">
      <h2 className="text-black font-bold">Add Skill</h2>

      <div className="flex space-x-4">
        <div className="w-2/3">
          <input
            type="text"
            value={newSkill}
            placeholder="enter skill"
            onChange={handleChange}
            className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 outline-none"
          />
        </div>

        <div className="w-1/3">
          <button
            onClick={addSkill}
            className="w-full text-white py-2 rounded-lg 
            bg-gradient-to-r from-pink-700 to-pink-300 hover:from-pink-800 hover:to-pink-400 
            transition ease-in-out duration-300"
          >
            Add Skill
          </button>
        </div>
      </div>

      {cvData.skills.length === 0 ? (
        <p className="text-gray-500">No skills added yet.</p>
      ) : (
        <ul className="space-y-2">
          {cvData.skills.map((skill, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>{skill}</span>

              <button
                onClick={() => handleDeleteSkill(index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
