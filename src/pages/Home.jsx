import React from "react";
import { Link } from "react-router-dom";
import Cv from '../assets/images/cv.jpg';
import profilcv from '../assets/images/profilecv.jpg';
import Layouts from "../pages/Layouts";
export default function HomePage() {
  return (
    <main className="bg-[#FAF7F2] text-gray-900">
     
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Crée ton CV professionnel
              <span className="block text-gray-600 text-2xl md:text-3xl mt-3">
                en quelques minutes.
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 mt-6 text-base md:text-lg">
              Un éditeur simple et guidé pour construire un CV moderne, lisible par les recruteurs,
              sans compétences en design.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Link
                to="/editor"
                className="inline-block text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold shadow bg-gradient-to-r from-pink-700 to-pink-300 hover:from-pink-800 hover:to-pink-400 
              transition ease-in-out duration-300"
              >
                Créer mon CV — Gratuit
              </Link>
              <Link
                to="/Layouts"
                className="inline-block border border-gray-300 text-gray-800 px-6 md:px-8 py-3 rounded-lg text-base md:text-lg hover:bg-gray-50 transition"
              >
                Voir les templates
              </Link>
            </div>
          </div>
          

          <div className="flex justify-center md:justify-end"> {/*La partie a droite */}
            <img 
                src={Cv} 
                alt="Exemple de CV moderne et professionnel" 
                className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-xl shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition duration-500 ease-in-out" 
            />
          </div>

        </div>
      </section>
      
      {/* --- Reste du contenu inchangé --- */}
      
      {/* FEATURES */}
      

    {/* 🌟 SECTION COMMENT ÇA MARCHE (HOW IT WORKS) 🌟 */}
    <section className="max-w-7xl mx-auto px-6 py-24">
        
    {/* Titre central */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
        Comment CV Online Builder fonctionne
    </h2>

    <div className="space-y-16">
        
        {/* ÉTAPE 1: Ajouter du contenu (Similaire à votre image) */}
        <StepCard
            number={1}
            title="Ajoutez votre contenu"
            content="Notre éditeur simple et guidé vous accompagne à chaque étape pour saisir vos informations professionnelles, garantissant un CV complet et soigné."
            visualContent={
                // Le contenu dans la carte blanche, imitant l'interface
                <>
                    <h4 className="text-lg font-bold mb-4 text-gray-800">Modifier les détails personnels</h4>
                    
                    <label className="block text-sm font-medium text-gray-500 mb-1">Nom complet</label>
                    <div className="bg-gray-100 p-2 rounded-lg mb-4 font-semibold text-gray-700">Brian T. Wayne</div>
                    
                    <label className="block text-sm font-medium text-gray-500 mb-1">Titre du poste</label>
                    <div className="bg-gray-100 p-2 rounded-lg font-semibold text-gray-700">Business Development Consultant</div>
                    
                    <div className="mt-6 flex items-center gap-4">
                        <img 
                            src={profilcv} // REMPLACER PAR VOTRE IMAGE D'EXEMPLE OU UN VRAI PLACEHOLDER
                            alt="Photo de profil" 
                            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        {/* Ce bloc simule l'icône de l'éditeur */}
                        <div className="flex-1 min-w-0">
                            <div className="text-pink-600 text-sm font-semibold hover:underline cursor-pointer">
                                {/* Simulez l'icône de crayon si possible, sinon laissez du texte */}
                                ✏️ Modifier l'image
                            </div>
                        </div>
                    </div>
                </>
            }
        />

        {/* ÉTAPE 2: Choisir le design (L'image est maintenant à droite) */}
        <StepCard
            number={2}
            title="Choisissez le design"
            content="Parcourez nos modèles professionnels, testez les couleurs et les polices. Changez de style en un clic sans perdre vos données, pour un rendu parfait."
            visualContent={
                <div className="space-y-4">
                    <h4 className="text-lg font-bold mb-4 text-gray-800">Sélectionner un modèle & couleurs</h4>
                    <div className="flex justify-around space-x-2">
                        {/* Simulation des vignettes de template */}
                        <div className="w-1/4 h-24 bg-gray-200 border-2 border-pink-600 rounded-lg flex items-center justify-center text-xs font-semibold text-pink-700">Actif</div>
                        <div className="w-1/4 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">Modèle A</div>
                        <div className="w-1/4 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">Modèle B</div>
                    </div>
                    <div className="pt-4">
                        <h5 className="text-sm font-medium text-gray-700">Couleur principale</h5>
                        <div className="flex space-x-3 mt-2">
                            <div className="w-8 h-8 bg-pink-700 rounded-full border-2 border-white shadow cursor-pointer ring-2 ring-pink-300"></div>
                            <div className="w-8 h-8 bg-blue-700 rounded-full border-2 border-gray-300 shadow cursor-pointer"></div>
                            <div className="w-8 h-8 bg-green-700 rounded-full border-2 border-gray-300 shadow cursor-pointer"></div>
                        </div>
                    </div>
                </div>
            }
        />

        {/* ÉTAPE 3: Télécharger (L'image est à nouveau à gauche) */}
            <StepCard
                number={3}
                title="Téléchargez ou partagez"
                content="Obtenez votre CV au format PDF haute résolution, prêt à être envoyé par email, ou générez un lien web public pour le partage en ligne."
                visualContent={
                    <div className="text-center">
                        <div className="text-7xl mb-4">📥</div>
                        <h4 className="text-lg font-bold mb-2">Votre CV est prêt !</h4>
                        <button className="w-full  text-white py-3 rounded-lg font-semibold bg-gradient-to-r from-pink-700 to-pink-300 hover:from-pink-800 hover:to-pink-400 
                          transition ease-in-out duration-300">
                            Télécharger en PDF
                        </button>
                        <button className="w-full mt-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-300">
                            Obtenir un lien de partage
                        </button>
                    </div>
                }
            />
            
        </div>
    </section>
    </main>
  );
}

function Feature({ title, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function StepCard({ number, title, content, visualContent }) {
  // Détermine si le contenu visuel (la carte d'édition) doit être à gauche ou à droite.
  // Vrai pour l'étape 1, 3, 5 (impair)
  const isVisualLeft = number % 2 !== 0; 
  
  return (
    // Utilise une grille sur les grands écrans pour les deux colonnes (texte et image)
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center py-12">

      {/* Colonne du Contenu Visuel (La carte blanche) */}
      <div 
        className={`flex justify-center ${isVisualLeft ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          {visualContent}
        </div>
      </div>
      
      {/* Colonne du Texte de l'Étape */}
      <div className={`${isVisualLeft ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-left`}>
        <p className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-3">
          {number}.
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 mt-4 text-lg">
          {content}
        </p>
      </div>

    </div>
  );
}

function Testimonial({ quote, author }) {
  return (
    <blockquote className="p-6 rounded-xl bg-white shadow-sm">
      <p className="text-gray-700 italic">“{quote}”</p>
      <footer className="mt-4 text-sm text-gray-500">— {author}</footer>
    </blockquote>
  );
}