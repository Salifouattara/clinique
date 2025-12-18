import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff, MdOutlineVerifiedUser } from "react-icons/md";
import { CiLock, CiMail, CiLocationOn } from "react-icons/ci";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  // Vérification de la validité du formulaire
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormValid = isEmailValid && formData.password.length >= 6;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (error) setError(""); // Effacer l'erreur quand l'utilisateur tape
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Forcer le marquage des champs comme "touchés" pour afficher les erreurs
    setTouched({ email: true, password: true });

    if (!isFormValid) {
      setError("Veuillez remplir correctement tous les champs.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulation d'appel API (Remplacez par votre fetch réel si le serveur est prêt)
      // const response = await fetch("http://localhost:5000/login", { ... });
      
      setTimeout(() => {
        console.log("Connexion réussie :", formData);
        setIsLoading(false);
        // Redirection vers la Home
        navigate("/");
      }, 1500);

    } catch {
      setIsLoading(false);
      setError("Erreur de connexion. Veuillez vérifier vos identifiants.");
    }
  };

  return (
    <div className="bg-[#fcfaf8] dark:bg-[#120d08] font-display text-[#1b140d] dark:text-white flex flex-col min-h-screen antialiased">
      
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl bg-white dark:bg-[#1a120b] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[650px] border border-[#f3ede7] dark:border-white/5">
          
          {/* --- CÔTÉ GAUCHE : VISUEL --- */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-end p-12 group overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFwa_GExClH-6C1yK6PoLc7YXbMXTVN7068lBtP9Jpcn3DP4LpAw9anpIZeD_U7kXPpWTEFYJ94tfbPDHOxYTk8VPxaC2gpVdgbscHwMI5JOvC1Zp9Ik1L6XNJhkxXf0s9nP9uGnDKdGpdceQ98ww4eDR6YV8BmIYmwxYO0SJod-3NKYbffC36d2PoYFwBAjOyvKZziquJCi6JAr97483O41z1uOpxPadfm78gdLXQpbaImRtGAsEoKwKdcyAOh2pzIb22d16a1Ps')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b140d] via-[#1b140d]/40 to-transparent"></div>
            
            <div className="relative z-10 text-white">
              <div className="size-14 rounded-2xl bg-primary/20 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8">
                <MdOutlineVerifiedUser className="text-3xl text-primary" />
              </div>
              <h1 className="text-4xl font-black leading-tight uppercase tracking-tighter mb-4">
                L'excellence médicale <br /><span className="text-primary italic font-serif">à votre portée.</span>
              </h1>
              <p className="text-gray-300 font-medium text-sm max-w-xs leading-relaxed">
                Connectez-vous pour gérer vos soins et consulter vos documents médicaux en toute sécurité.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mt-12">
                <CiLocationOn className="text-lg" />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
          </div>

          {/* --- CÔTÉ DROIT : FORMULAIRE --- */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-sm mx-auto w-full">
              <header className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Bon retour</h2>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Espace Patient Sécurisé</p>
              </header>

              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 text-red-600 dark:text-red-400 text-xs font-bold animate-shake">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500" htmlFor="email">Adresse E-mail</label>
                  <div className="relative group">
                    <CiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary transition-colors" />
                    <input 
                      id="email"
                      type="email"
                      placeholder="nom@exemple.com"
                      className={`w-full h-14 pl-12 pr-4 bg-[#fcfaf8] dark:bg-white/5 border-2 rounded-2xl outline-none transition-all text-sm font-bold ${
                        touched.email && !isEmailValid ? "border-red-500" : "border-transparent focus:border-primary"
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                  {touched.email && !isEmailValid && (
                    <p className="text-[10px] font-bold text-red-500 uppercase italic">Email invalide</p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500" htmlFor="password">Mot de Passe</label>
                    <Link to="/forgot-password" size="text-[10px]" className="text-[10px] font-black uppercase text-primary hover:underline">Oublié ?</Link>
                  </div>
                  <div className="relative group">
                    <CiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary transition-colors" />
                    <input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`w-full h-14 pl-12 pr-12 bg-[#fcfaf8] dark:bg-white/5 border-2 rounded-2xl outline-none transition-all text-sm font-bold ${
                        touched.password && formData.password.length < 6 ? "border-red-500" : "border-transparent focus:border-primary"
                      }`}
                      value={formData.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                    >
                      {showPassword ? <MdOutlineVisibilityOff size={20} /> : <MdOutlineVisibility size={20} />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className={`w-full h-14 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all shadow-xl flex items-center justify-center gap-3 ${
                    isFormValid && !isLoading 
                    ? "bg-[#1b140d] dark:bg-primary text-white hover:scale-[1.02] active:scale-95" 
                    : "bg-gray-200 dark:bg-white/5 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isLoading ? (
                    <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Se connecter <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span></>
                  )}
                </button>

                <div className="relative flex items-center justify-center py-4">
                  <div className="absolute inset-0 flex items-center px-2">
                    <div className="w-full border-t border-gray-100 dark:border-white/5"></div>
                  </div>
                  <span className="relative bg-white dark:bg-[#1a120b] px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Ou</span>
                </div>

                <Link 
                  to="/inscription"
                  className="w-full h-14 rounded-2xl border-2 border-[#f3ede7] dark:border-white/5 flex items-center justify-center text-[11px] font-black uppercase tracking-[0.2em] hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                >
                  Créer un compte
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center space-y-2 opacity-50">
        <p className="text-[9px] font-black uppercase tracking-widest">© 2025 Clinique Espoir International</p>
        <div className="flex justify-center gap-6 text-[9px] font-black uppercase tracking-widest">
          <Link to="/privacy" className="hover:text-primary transition-colors">Confidentialité</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Conditions</Link>
        </div>
      </footer>
    </div>
  );
}