import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiMail, CiLock } from "react-icons/ci";
import { MdOutlineVisibility, MdOutlineVisibilityOff, MdOutlineHealthAndSafety } from "react-icons/md";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenoms: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const [touched, setTouched] = useState({
    nom: false, prenoms: false, email: false, password: false, confirmPassword: false, acceptTerms: false
  });
  
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError("");
  };

  const handleBlur = (e) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  // Validation robuste
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPasswordMatch = formData.password === formData.confirmPassword;
  const isFormValid = 
    formData.nom.trim().length > 1 &&
    formData.prenoms.trim().length > 1 &&
    isEmailValid &&
    formData.password.length >= 6 &&
    isPasswordMatch &&
    formData.acceptTerms;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      nom: true, prenoms: true, email: true, password: true, confirmPassword: true, acceptTerms: true
    });

    if (!isFormValid) {
      setError("Veuillez remplir correctement tous les champs.");
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulation d'appel API
      console.log("Inscription en cours...", formData);
      setTimeout(() => {
        setIsLoading(false);
        // Redirection vers la page de connexion après succès
        navigate("/connexion");
      }, 2000);
    } catch {
      setIsLoading(false);
      setError("Une erreur est survenue lors de l'inscription.");
    }
  };

  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-background-light dark:bg-[#120d08] antialiased">
      
      {/* Côté Gauche : Formulaire */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12 bg-african-pattern">
        <div className="w-full max-w-lg bg-white dark:bg-[#1a120b] p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-[#f3ede7] dark:border-white/5">
          
          <div className="mb-10">
            <h1 className="text-3xl font-black tracking-tighter uppercase mb-2">Créer un compte</h1>
            <p className="text-sm text-gray-500 font-medium">Votre santé mérite le meilleur suivi numérique en Côte d'Ivoire.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest animate-pulse">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            
            {/* Nom & Prénoms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Nom</label>
                <input 
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full h-12 px-4 rounded-xl border-2 bg-gray-50 dark:bg-white/5 outline-none transition-all font-bold text-sm ${touched.nom && !formData.nom ? "border-red-500" : "border-transparent focus:border-primary"}`}
                  placeholder="Kouassi"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Prénoms</label>
                <input 
                  name="prenoms"
                  value={formData.prenoms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full h-12 px-4 rounded-xl border-2 bg-gray-50 dark:bg-white/5 outline-none transition-all font-bold text-sm ${touched.prenoms && !formData.prenoms ? "border-red-500" : "border-transparent focus:border-primary"}`}
                  placeholder="Jean-Marc"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Adresse E-mail</label>
              <div className="relative group">
                <CiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full h-12 pl-12 pr-4 rounded-xl border-2 bg-gray-50 dark:bg-white/5 outline-none transition-all font-bold text-sm ${touched.email && !isEmailValid ? "border-red-500" : "border-transparent focus:border-primary"}`}
                  placeholder="patient@espoir.ci"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Mot de passe (6+ car.)</label>
              <div className="relative group">
                <CiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full h-12 pl-12 pr-12 rounded-xl border-2 bg-gray-50 dark:bg-white/5 outline-none transition-all font-bold text-sm ${touched.password && formData.password.length < 6 ? "border-red-500" : "border-transparent focus:border-primary"}`}
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPassword ? <MdOutlineVisibilityOff size={20} /> : <MdOutlineVisibility size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Confirmation</label>
              <input 
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full h-12 px-4 rounded-xl border-2 bg-gray-50 dark:bg-white/5 outline-none transition-all font-bold text-sm ${touched.confirmPassword && !isPasswordMatch ? "border-red-500" : "border-transparent focus:border-primary"}`}
                placeholder="Confirmez votre mot de passe"
              />
            </div>

            {/* Conditions */}
            <div className="flex items-start gap-3 py-2">
              <input 
                id="terms" name="acceptTerms" type="checkbox"
                checked={formData.acceptTerms} onChange={handleChange}
                className="mt-1 size-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="terms" className="text-[11px] font-medium text-gray-500 leading-relaxed">
                J'accepte les <span className="text-primary font-bold cursor-pointer">conditions d'utilisation</span> et la politique de protection des données de santé.
              </label>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full h-14 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-xl transition-all flex items-center justify-center gap-3 ${
                isFormValid && !isLoading ? "bg-primary text-white hover:scale-[1.02]" : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {isLoading ? (
                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : "S'inscrire maintenant"}
            </button>
          </form>

          <p className="mt-8 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
            Déjà patient ? <Link className="text-primary hover:underline ml-1" to="/connexion">Se connecter</Link>
          </p>
        </div>
      </div>

      {/* Côté Droit : Visuel Inspirant */}
      <div className="hidden lg:flex w-1/2 relative bg-[#1b140d] items-center justify-center p-20">
        <div className="absolute inset-0 z-0">
          <img alt="Medical Support" className="w-full h-full object-cover opacity-40 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhBeNkgwfPwTLzCLB8uYNPRTzUyRPSy6k30K7ON4QZ8Al9sHFKEH4MG6MQ4FQ1apoWoLhldDiqWVkvfTmmnLLzCGzUnMxIM5cR_B3w0n7HEKx-y_ePwsE_A61VmSaHhz3Em10-FB_8y-b3cz8_eOpOtTRmxS4E6iol34uz8FvrTcuyFq7DD_mT_YXDfYJWnP3H8tdMElC3p_j6Wz1bnmOZc5gJhXtbTpIuhoyA0J_Ws0TALSd8ZM8Szk2o0Z6q9jh7nF4tKrHwpiI"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10"></div>
        
        <div className="relative z-20 text-white space-y-8">
          <div className="size-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
            <MdOutlineHealthAndSafety className="text-4xl text-primary" />
          </div>
          <h2 className="text-5xl font-black tracking-tighter leading-none uppercase">Votre santé, <br/> notre <span className="text-primary italic font-serif">serment.</span></h2>
          <p className="text-lg text-gray-300 font-medium max-w-md leading-relaxed">
            Rejoignez plus de 2,000 Ivoiriens qui font confiance à notre plateforme pour un accès rapide aux soins de santé d'excellence.
          </p>
          
          <div className="flex items-center gap-4 pt-10">
            <div className="flex -space-x-3">
              {[32, 33, 34].map(id => (
                <img key={id} className="size-10 rounded-full border-2 border-[#1b140d] object-cover" src={`http://googleusercontent.com/profile/picture/${id}`} alt="user"/>
              ))}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-primary">+2k Patients Actifs</p>
          </div>
        </div>
      </div>
    </main>
  );
}