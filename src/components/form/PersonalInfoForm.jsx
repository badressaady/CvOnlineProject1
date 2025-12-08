import { useCv } from "../../context/CvContext";

export const PersonalInfoForm = () => {
  const { cvData, updatePersonalInfo } = useCv();

  function handleChange(e) {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updatePersonalInfo({ profileImage: imageUrl });
    }
  }
  function handleImageRemove() {
    updatePersonalInfo({ profileImage: "" });
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6 w-full">
      <h2 className="text-xl font-bold text-gray-800">Informations Personnelles</h2>
      
      <div className="flex space-x-6 items-start">

        <div className="w-1/2 space-y-4"> 
          <div className="w-full">
            <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-1">Prénom *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={cvData.personalInfo.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2 outline-none"
              placeholder="Votre prénom"
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-1">Nom *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={cvData.personalInfo.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2 outline-none"
              placeholder="Votre nom"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center pt-2">
          <h3 className="text-sm font-bold text-gray-700 mb-2">Photo</h3>
          
          <div className="relative w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-gray-200">
            <img 
              src={cvData.personalInfo.profileImage || "/default-avatar.png"} 
              
              className="w-full h-full object-cover"
            />

            {!cvData.personalInfo.profileImage && (
              <span className="absolute text-4xl text-gray-400 opacity-75">📷</span>
            )}

            <input
              type="file"
              accept="image/*"
              name="profileImage"
              onChange={handleImageUpload}
              id="profileImage"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
          {cvData.personalInfo.profileImage && (
            <button
              type="button"
              onClick={handleImageRemove}
              className="mt-2 text-sm text-red-600 hover:text-red-800 transition-colors"
            >
              Supprimer la photo
            </button>
          )}
        </div>

      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={cvData.personalInfo.email}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="votre.email@exemple.com"
        />
      </div>

      {/* Champ Téléphone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={cvData.personalInfo.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="+212 76 123 4567"
        />
      </div>

      {/* Champ Adresse */}
      <div>
        <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-1">Adresse</label>
        <input
          type="text"
          id="address"
          name="address"
          value={cvData.personalInfo.address}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="Votre adresse complète"
        />
      </div>

      {/* Champ Titre du Poste */}
      <div>
        <label htmlFor="positionTitle" className="block text-sm font-bold text-gray-700 mb-1">Title</label>
        <input
          type="text" // Changé de tel à text, plus approprié pour un titre
          id="positionTitle" 
          name="positionTitle"
          value={cvData.personalInfo.positionTitle}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-gray-50 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="votre poste (ex: Développeur Full-Stack)"
        />
      </div>
    </div>
  );
};