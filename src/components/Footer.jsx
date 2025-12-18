import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec7f13' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[#221910] text-white pt-12 pb-0 border-t border-[#2d2116]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center pb-10">
        <h2 className="text-3xl sm:text-4xl font-black mb-2">Votre santé mérite ce qu'il y a de mieux</h2>
        <p className="text-white/80 text-base sm:text-lg mb-6 max-w-2xl">Rejoignez la famille Clinique Espoir. Prenez rendez-vous en ligne ou appelez-nous directement.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg shadow transition-colors">Prendre rendez-vous</button>
          <button className="bg-transparent border border-white text-white font-bold px-6 py-3 rounded-lg shadow transition-colors hover:bg-white/10">Nous contacter</button>
        </div>
      </div>
      <div className="bg-[#1a120b] w-full">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonne 1 : Logo & slogan */}
          <div className="flex flex-col gap-3 items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">C</div>
              <span className="text-lg font-bold">Clinique Espoir</span>
            </div>
            <span className="text-sm text-[#e0c7a0]">Soins de qualité au cœur d'Abidjan.</span>
          </div>
          {/* Colonne 2 : Liens rapides */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a className="text-sm text-[#e0c7a0] hover:text-primary transition-colors" href="#">Accueil</a></li>
              <li><a className="text-sm text-[#e0c7a0] hover:text-primary transition-colors" href="#">À Propos</a></li>
              <li><a className="text-sm text-[#e0c7a0] hover:text-primary transition-colors" href="#">Services</a></li>
              <li><a className="text-sm text-[#e0c7a0] hover:text-primary transition-colors" href="#">Carrières</a></li>
            </ul>
          </div>
          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-[#e0c7a0]">
                <span className="material-symbols-outlined text-primary">call</span>
                +225 27 22 44 55 66
              </li>
              <li className="flex items-center gap-2 text-sm text-[#e0c7a0]">
                <span className="material-symbols-outlined text-primary">mail</span>
                info@clinique-espoir.ci
              </li>
            </ul>
          </div>
          {/* Colonne 4 : Localisation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Localisation</h3>
            <div className="overflow-hidden rounded-lg h-24 w-full bg-gray-200 relative mb-2">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDg5HGH_4BMNe2D3Bb09uDLPwFWu7EkpdRTs0RcEQC6yjqKYI1PRvR63w3d4uaDwYMT-FOyORq2mdJZNTBSA7PZ5tSsWJHbW6-7lJcEvnmWPKFmcqcOtg1HjR1qual0MV54dZ0HJz5jbXWxmebFV3wyRYQ9GxHda8cGzyGGxg0YEimG0StHbL8sBCoKeteeJtVV1A7-NOVLJPm-lY4cg-WZwIkChVsE1XZbI40HQIXIWoY7Be8Cuvd3BGXScE7agSVchuAUmU0JDZ8')", backgroundColor: '#e5e7eb'}}>
                <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-400 text-xs">Carte Map</div>
              </div>
            </div>
            <span className="text-xs text-[#e0c7a0]">Cocody Riviera 2, Abidjan</span>
          </div>
        </div>
        <div className="border-t border-[#2d2116] py-6 text-center text-xs text-[#e0c7a0]">
          © {new Date().getFullYear()} Clinique Espoir. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
