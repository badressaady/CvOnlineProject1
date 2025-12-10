import React from "react";
import { Link } from "react-router-dom";
import Cv from '../assets/images/cv.jpg';
import step1 from '../assets/images/step1.webp'; 
import step2 from '../assets/images/step2.webp'; 
import  step3  from '../assets/images/Upload.webp';
import comentaire from '../assets/images/comentaire.webp';
export default function HomePage() {
  return (
    <main className="bg-[#FAF7F2] text-gray-900"> 

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* la partie a gauche qui contien le text et les boutons */}
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
                to="/Layouts"
                className="inline-block text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold shadow bg-gradient-to-r from-pink-700 to-pink-300 hover:from-pink-800 hover:to-pink-400 
              transition ease-in-out duration-300"
              >
                Créer mon CV — Gratuit
              </Link>
              <Link
                to="/editor"
                className="inline-block border border-gray-300 text-gray-800 px-6 md:px-8 py-3 rounded-lg text-base md:text-lg hover:bg-gray-50 transition"
              >
                Customize your Cv
              </Link>
            </div>
            <div className="mt-15 w-[276px] ">

                <img src={comentaire} alt="" />
                <p class="text-gray-800  ml-4 lg:text-md font-bold ">
                Approuvé par 4,3 millions d'utilisateurs
                </p>
            </div>
          </div>
          {/*La partie a droite l'image de cv  */}
          <div className=" flex justify-center md:justify-end"> 
            <img 
                src={Cv} 
                alt="Exemple de CV moderne et professionnel" 
                className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-xl shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition duration-500 ease-in-out " 
            />
          </div>
        </div>
      </section>
    {/* SECTION COMMENT ÇA MARCHE */}

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
            Comment CV Designer fonctionne
        </h2>
        <div className="space-y-5">
            <StepCard
                number={1}
                title="Ajoutez votre contenu"
                content="Notre éditeur simple et guidé vous accompagne à chaque étape pour saisir vos informations professionnelles, garantissant un CV complet et soigné."
                visualContent={
                  <>
                  <img src={step1} alt="" />
                  </>
                }
            />
            <StepCard
                number={2}
                title="Choisissez le design"
                content="Parcourez nos modèles professionnels, testez les couleurs et les polices. Changez de style en un clic sans perdre vos données, pour un rendu parfait."
                visualContent={
                    <>
                      <img src={step2} alt="" />
                    </>
                }
            />
            <StepCard
                number={3}
                title="Téléchargez ou partagez"
                content="Obtenez votre CV au format PDF haute résolution, prêt à être envoyé par email, ou générez un lien web public pour le partage en ligne."
                visualContent={
                    <>
                    <img src={step3} alt="" />
                    </>
                }
            />
                
        </div>
      </section>

    </main>
  );
}


function StepCard({ number, title, content, visualContent }) {
  return (
    // Utilise une grille sur les grands écrans pour les deux colonnes (visuel à gauche, texte à droite)
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center py-12">

      {/* Colonne du Contenu Visuel (La carte blanche) */}
      <div className="flex justify-center lg:justify-start">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 transform hover:scale-[1.02] transition duration-500 ease-in-out">
          {visualContent}
        </div>
      </div>
      
      {/* Colonne du Texte de l'Étape */}
      <div className="text-center lg:text-left">
        <p className="text-xl md:text-2xl font-extrabold text-pink-600 mb-3">
          {number}.
        </p>
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 mt-4 text-lg">
          {content}
        </p>
      </div>

    </div>
  );
}