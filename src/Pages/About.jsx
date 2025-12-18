import React from "react";

const About = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display antialiased flex flex-col min-h-screen">
      {/* Navigation - Version simplifiée et corrigée */}

      {/* Main Content - Le reste du code reste inchangé */}
      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section */}
        <div className="w-full relative bg-surface-dark overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
            <img 
              alt="Équipe médicale de la clinique" 
              className="w-full h-full object-cover opacity-80" 
              data-alt="Modern medical team smiling in a bright clinic hallway" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqcSfcF_ATrkn43kPd4phVYg3PboUiowM7envftCS0xS_g1uxBtIFR7KZhtP_TnKxn7phPA_ewik60hr8sOqbQ5Y9SDfHmUBs-wyD6jw-0sz_jOB-EnIOhDn2aK8DwDlU2tL82rpIERRyg7ZvMG72s1CITlMkqq8W0xYNdNFiJQlUXqt-FayChUdl1SkXpf6rDeAPjW4d_ocxKfncWl0zpvkip7-hoee7SqNyesSeHFi0UWl1IrjNl5oJYPo24cgKMA63Av0xq4HE"
            />
          </div>
          <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-2xl flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Depuis 2010</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Notre Histoire, <br/>
                <span className="text-primary">Votre Santé</span>
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
                Une tradition de soins au service de la vie, ancrée dans nos racines ivoiriennes. Découvrez comment nous allions expertise internationale et chaleur humaine.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="h-12 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-transform active:scale-95 flex items-center gap-2">
                  <span>Découvrir notre vision</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button className="h-12 px-6 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold transition-colors">
                  Rencontrer l'équipe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full bg-primary relative -mt-8 z-30 shadow-xl max-w-[1000px] rounded-xl mx-4 overflow-hidden">
          <div className="absolute inset-0 bg-africa-pattern opacity-20"></div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 p-8 text-white text-center divide-x divide-white/20">
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black">15+</span>
              <span className="text-sm font-medium opacity-90">Années d'expérience</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black">50+</span>
              <span className="text-sm font-medium opacity-90">Médecins spécialistes</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black">24/7</span>
              <span className="text-sm font-medium opacity-90">Services d'urgence</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black">10k+</span>
              <span className="text-sm font-medium opacity-90">Patients satisfaits</span>
            </div>
          </div>
        </div>

        {/* Origin Story Section */}
        <div className="w-full py-20 px-4 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  alt="Le fondateur Dr. Koné" 
                  className="w-full h-auto object-cover" 
                  data-alt="Close up of a doctor holding hands with an elderly patient" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzs9OZabnaIFVch6xBCUNsSv0QSaia4Pjy6437QNN9WqBagQo1YqEDdx1Yx-skG8G6R0wtBrQoAAYf_mKJe2JEuTdirOE-YvkM1T4ZEmERehnj39OFwwQdWfWpOZi-3Qx32aJDjT-DdazJDT-_I8DB7z4tfvq7hE5f4pVU_WY2H43psvp42x32vFVCTHEutcqLpaMJ3JYDX8E9x5Wt2LhsSUBx4MVTAnh_o9aDMHBRxMxIKrpBFoZSw0y9cJykzASZELii_nmYvTA"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-medium">Dr. Amara Koné, Fondateur</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-lg -z-10"></div>
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                <span className="material-symbols-outlined text-primary text-sm">history_edu</span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Notre Origine</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark leading-tight">
                Comment tout a commencé
              </h2>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p>
                  Fondée en 2010 par le Dr. Koné, la Clinique Espoir est née d'une volonté simple mais puissante : offrir des soins de qualité internationale accessibles à tous les Abidjanais, tout en préservant cette chaleur humaine propre à notre culture.
                </p>
                <p className="mt-4">
                  Ce qui a commencé comme un petit cabinet de consultation à Cocody est aujourd'hui devenu un centre médical de référence. Chaque brique posée, chaque nouveau service ouvert, a été guidé par une seule boussole : votre bien-être.
                </p>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <img 
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover" 
                      data-alt="Profile of doctor 1" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuANrcbt1G446AtmPZeSronfQ2mT7wqvx5bpbaCflKmgG7_1aoPtUL2VmP8H4Xi2LIAo_crCEn6-LLZlAvjtm31aOzI30Fp1Tj_KIOfj7Gacg09mJaqdUzVY9iNvzQIsq7al4hY37Z5vAg0pCfqw2PhKzg0pui0v_gC_LYUb31pdjejmv5fHM6_v7ESCVHS9Z2yADdKJJt19ETUCuWaFHRh8ejRNGasDYP_NilaasFdT9hCD88VaOw3f2y6wzIg0iugVKBB7FXTc3FE"
                    />
                    <img 
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover" 
                      data-alt="Profile of doctor 2" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIFdGV8ZKEBczdvPHNgHXZ3w0juL844uLWe9zPiGjL8CkUGcYlRI2wt-GQ7IbkVCSPbZLQNSeWmjsmMEvWY-SiMS-17QCR6GmDj7mHduxsF1SCKi0vTlb3_MJxwUWb1wyHE9ue00T6zbJ7IaPdIGJHXZ5R9XScfRRKW99XkkIbuUvHtI-YuDEHSN_3nqC7TbXHbiw4l7ruNUlj8g86RJknyY1ONhD8rZvlq_PPw0-cr3EhAuAWGSWltp5OozJXsjYa7L4DIY7Lyk0"
                    />
                    <img 
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover" 
                      data-alt="Profile of doctor 3" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcS4O0KTjeQ49-Q9X5HfQFy0CuDLGqIOTFjXySFIQ8el4q6pTYE4YLI935kfbz3eCHlFeRSpf6t3L4tXpRj7NsMoY0zP3wJLCs3TtOIrCegrsbNgt2KEkkXCWlCuuNq2arcqAhNxnmKc-3XPnGJYYbngbJyxARYzUCld6Pg8W-Bbg3k2vzcT9kzTvv-ssGGf-xI5d7ZJHEP-XZJv7o7Z_VIdXVRth69bgpMJavXWKko_SBLc2aWVfWVkULVdCPTF4UIt6pLzXNwX0"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Rejoint par +50 experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values/Mission Section */}
        <div className="w-full py-20 bg-surface-light dark:bg-surface-dark relative">
          <div className="absolute inset-0 bg-africa-pattern opacity-[0.03]"></div>
          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">Nos Piliers de Confiance</h2>
              <p className="text-gray-600 dark:text-gray-400">Nous ne soignons pas seulement des symptômes, nous prenons soin de vies humaines avec intégrité et dévouement.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">medical_services</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-light dark:text-text-dark">Excellence Médicale</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Nous investissons continuellement dans les dernières technologies médicales et la formation de nos équipes pour garantir des diagnostics précis.
                </p>
              </div>
              {/* Card 2 */}
              <div className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">handshake</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-light dark:text-text-dark">Proximité & Écoute</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Chaque patient est unique. Nous privilégions une approche humaine où l'écoute est le premier remède que nous administrons.
                </p>
              </div>
              {/* Card 3 */}
              <div className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">diversity_1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-light dark:text-text-dark">Engagement Communautaire</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Nous sommes fiers de servir la communauté d'Abidjan à travers des campagnes de sensibilisation et de dépistage régulières.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="w-full py-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-[800px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-light dark:text-text-dark">Les Grandes Étapes</h2>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-[#e7dbcf] dark:bg-[#3e3226]"></div>
              {/* Item 1 */}
              <div className="flex gap-6 mb-12 relative">
                <div className="z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark border-2 border-primary flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">foundation</span>
                  </div>
                </div>
                <div className="pt-1">
                  <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-bold mb-2">2010</span>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">Fondation à Abidjan</h3>
                  <p className="text-gray-600 dark:text-gray-400">Ouverture de la clinique avec une équipe de 5 personnes et une vision claire : redéfinir les standards de soins.</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex gap-6 mb-12 relative">
                <div className="z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark border-2 border-primary flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">child_friendly</span>
                  </div>
                </div>
                <div className="pt-1">
                  <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-bold mb-2">2015</span>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">Ouverture du pôle Maternité</h3>
                  <p className="text-gray-600 dark:text-gray-400">Pour accompagner la vie dès ses premiers instants, nous inaugurons un service de néonatologie moderne.</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex gap-6 relative">
                <div className="z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark border-2 border-primary flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">biotech</span>
                  </div>
                </div>
                <div className="pt-1">
                  <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-bold mb-2">2020</span>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">Expansion Chirurgicale</h3>
                  <p className="text-gray-600 dark:text-gray-400">Construction de deux nouveaux blocs opératoires équipés de technologies de pointe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full py-20 px-4 bg-surface-light dark:bg-surface-dark">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">Rencontrez nos Spécialistes</h2>
                <p className="text-gray-600 dark:text-gray-400">Une équipe dévouée, formée dans les meilleures institutions et unie par la vocation de soigner.</p>
              </div>
              <a className="text-primary font-bold hover:text-primary-dark flex items-center gap-1 group" href="#">
                Voir toute l'équipe 
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Member 1 */}
              <div className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 z-10 transition-colors duration-300"></div>
                  <img 
                    alt="Dr. Sarah Diallo" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    data-alt="Dr. Sarah Diallo portrait smiling professionally" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcvHB2rUgUVvDjhZO6K6BO6W3uwJcwMo3SFwBvPkqp8kKkKTn-VYeAAG2URcKQlYnKztWOd9baE8vxOqzoOAtNBpcBT4Iei19dF6RO7uVY1vqzMUmA5MiUtm98r3Pnxc86a4Aq6zrMLdNs8xras_DFVLZf7EaqbVp9NE7QDOY-y7GYsk4x4yMr3VfoXxHFwYK4Zw2xQMoJafyn2qwWBd2X_iybXXvdhIImmtT-Tbr_DhXD-ZTI-N93GRaXjt45Vw_XrLkcbzxdF20"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Dr. Sarah Diallo</h3>
                  <p className="text-primary text-sm font-medium">Pédiatre</p>
                </div>
              </div>
              {/* Member 2 */}
              <div className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 z-10 transition-colors duration-300"></div>
                  <img 
                    alt="Dr. Jean-Marc Kouassi" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    data-alt="Dr. Jean-Marc Kouassi portrait with glasses" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZIVtHK7j7FoplPrKAmGx26-xqwhLWrLs8nM4doo2Hq-Yq2g92LIwpRlVzlhVnzvss_8b8J0fGjjQolgtycSyxKefjT4GtDWlk_qyDmd1u9svGBdlbzlbQSljpAVnbtIK85lVQZzc7IREiT6mjtAgOG2GwqodanZLDGMb6SSplvVSfVDbIaANaZ1HxDLwMhyRPsCWXeSsgLKdpA3D0j0DfbVkHmFZNTvvfApT6c2Qda1KM-DujYDDAE8NTMVwoxy3wszT3WkObBB8"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Dr. Jean-Marc Kouassi</h3>
                  <p className="text-primary text-sm font-medium">Cardiologue</p>
                </div>
              </div>
              {/* Member 3 */}
              <div className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 z-10 transition-colors duration-300"></div>
                  <img 
                    alt="Dr. Aminata Touré" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    data-alt="Dr. Aminata Touré portrait looking confident" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlEHG2riThJDW0xg9O0cRT2xbReVxIiQmv4uxFcQ6u9IFVPYpSV512Cw4i18FQ4JS73jZjxxDX-qJ38zGuHkekQScKyhQDtFvb5EZo8ClI7Tjocli5ghunEGlNFKRRK1eE1KBncABdoWsV4IvLEYhI32QpFOpHywgc5pdtb6KCRrLfuVnE9WUzQrxjcf-nCFjwdLK8gWhocKAR5P4O1RiuimYzYQu0Nyr2v8YsHuKKEOkD1eZHEdE3k9zWbXaoAB-nqE0sRZXevOM"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Dr. Aminata Touré</h3>
                  <p className="text-primary text-sm font-medium">Gynécologue</p>
                </div>
              </div>
              {/* Member 4 */}
              <div className="bg-background-light dark:bg-background-dark rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 z-10 transition-colors duration-300"></div>
                  <img 
                    alt="Dr. Michel Yacé" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    data-alt="Dr. Michel Yacé portrait smiling" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaimgZWXNIRnneJdKulNEUnutAhHfpjSKxtuQ3XC1-vR3Hu55HfLhK1E6fwIO7GOmyNpo9kJK7mMCB2Gq_tj2ZU2zl_4x55tr-lz_87TuFt_eaqr0tgowB38YGu6oyY86hNuX2GSONR7R5c6grlGIKZ1tbakBN9f-vSL8OejxHKSCmDbyKSfTOmTOHQWUcuMygVVJhV-rFJ63j76w1ACGPDM4ernNwBn8s9m7baPUpjVjQYtSyKIxWMXpkzSa_V4gyyL5-3Op9M5E"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Dr. Michel Yacé</h3>
                  <p className="text-primary text-sm font-medium">Chirurgien Général</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA / Footer Preview */}
        <section className="relative w-full overflow-hidden bg-[#221910] py-16 text-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
         <div className="w-full py-24 bg-surface-dark relative overflow-hidden">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
          <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Votre santé mérite ce qu'il y a de mieux</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Rejoignez la famille Clinique Espoir. Prenez rendez-vous en ligne ou appelez-nous directement.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 h-14 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1">
                Prendre rendez-vous
              </button>
              <button className="w-full sm:w-auto px-8 h-14 rounded-lg bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-bold text-lg transition-all">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>
        
      </main>

      {/* Simple Footer */}
      <footer className="bg-background-dark text-white pt-16 pb-8 border-t-4 border-primary">
        <div className="layout-container flex justify-center">
          <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined !text-3xl">local_hospital</span>
                  <h2 className="text-white text-xl font-bold">Clinique Ivoire Santé</h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Votre partenaire santé de confiance en Côte d'Ivoire. Nous nous engageons à fournir des soins médicaux d'excellence accessibles à tous.</p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-primary font-bold uppercase text-sm tracking-wider">Navigation</h3>
                <ul className="flex flex-col gap-2 text-gray-300 text-sm">
                  <li><a className="hover:text-primary transition-colors" href="#">Accueil</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Nos Services</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">L'équipe Médicale</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Prendre Rendez-vous</a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-primary font-bold uppercase text-sm tracking-wider">Contact</h3>
                <ul className="flex flex-col gap-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                    <span>Cocody Riviera 2, Abidjan,<br/>Côte d'Ivoire</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">call</span>
                    <span>+225 07 07 00 00 00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">mail</span>
                    <span>contact@ivoiresante.ci</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-primary font-bold uppercase text-sm tracking-wider">Localisation</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden h-32 w-full relative group cursor-pointer">
                  <img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" alt="Map view of Abidjan area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkBjGUlyhCHfhbtsveAxqdJSnkIdXBWf0i4W7iAy1q2366ml9vz1inEDKKoyG1-PDE07zBMkLrggmx2-RX02LUBap5qD6sztV7BhnrPcaARcZu7AjZ_up_qEogByTts1eC-I8MvbWeJrivouu4bpKayw4TP11dzi2Cw9CFL2E-ouo9TxAY0pmlhXppImYdnWViS8rbzQcxCEw2h96mezSQqoahfWTABvIGbQqCrrvJLILNHV2m7KvWY1mRJU6W5JDRm8ZEO6ziLGM" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a href="https://maps.app.goo.gl/2xjd4gBhp1bo5j288" className="bg-white/10 backdrop-blur px-3 py-1 rounded text-xs font-bold border border-white/20">Voir sur la carte</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>© 2025 Clinique Ivoire Santé. Tous droits réservés.</p>
              <div className="flex gap-6">
                <a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
                <a className="hover:text-white transition-colors" href="#">Confidentialité</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;