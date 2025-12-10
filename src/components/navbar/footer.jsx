import logo from '../../assets/images/logo1.png';

export function Footer() {
  return (
    <footer className="bg-[#111827]  shadow-inner text-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-6 py-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center text-xl font-bold mb-2 gap-2">
              <img src={logo} className="h-[60px]" alt="Logo" />
              <span>CV Designer</span>
            </div>
            <p className="text-sm leading-relaxed">
              Générez facilement votre CV professionnel en quelques clics.
              Des templates modernes et un éditeur simple d'utilisation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="hover:text-pink-500 transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/editor" className="hover:text-pink-500 transition">
                  Éditeur
                </a>
              </li>
              <li>
                <a href="/templates" className="hover:text-pink-500 transition">
                  Customize
                </a>
              </li>
              <li>
                <a href="/Layouts" className="hover:text-pink-500 transition">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li>Email : support@cv-online.com</li>
              <li>Téléphone : +212 600 00 00 00</li>
              <li>Adresse : Maroc</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} CV Online Builder — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
