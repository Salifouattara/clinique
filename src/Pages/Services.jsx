import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineLocalHospital } from "react-icons/md";

// Version React+Tailwind fidèle au HTML fourni, sans header/footer dupliqués (gérés globalement)
const services = [
  {
    icon: 'stethoscope',
    title: 'Médecine Générale',
    desc: 'Consultations de routine, bilans de santé et suivi global pour toute la famille. Votre première ligne de défense.'
  },
  {
    icon: 'child_care',
    title: 'Pédiatrie',
    desc: "Suivi de la croissance, vaccinations et soins spécialisés pour vos enfants, de la naissance à l'adolescence."
  },
  {
    icon: 'pregnant_woman',
    title: 'Gynécologie & Obstétrique',
    desc: "Accompagnement de la femme à chaque étape : suivi de grossesse, accouchement et santé féminine."
  },
  {
    icon: 'cardiology',
    title: 'Cardiologie',
    desc: 'Prévention, diagnostic et traitement des maladies cardiovasculaires avec des équipements de pointe.'
  },
  {
    icon: 'biotech',
    title: "Laboratoire d'Analyses",
    desc: 'Analyses biologiques complètes sur place pour des diagnostics rapides et fiables 24h/24.'
  },
  {
    icon: 'dentistry',
    title: 'Soins Dentaires',
    desc: 'Soins bucco-dentaires, orthodontie et chirurgie dentaire pour un sourire éclatant de santé.'
  },
  {
    icon: 'radiology',
    title: 'Imagerie Médicale',
    desc: 'Radiologie, échographie et scanner pour visualiser et comprendre vos symptômes avec précision.'
  },
  {
    icon: 'ambulance',
    title: 'Urgence 24/7',
    desc: "Une équipe d'urgence réactive et des ambulances équipées prêtes à intervenir à tout moment."
  }
];

export default function Services() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main font-display overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex w-full flex-col overflow-hidden bg-primary-light/30">
        <div className="absolute inset-0 z-0 opacity-10 bg-pattern-light pointer-events-none" />
        <div className="layout-container relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-primary/10 px-4 py-1.5">
                <span className="size-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold uppercase tracking-wide text-primary">Excellence & Proximité</span>
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[#1b140d] dark:text-white md:text-5xl lg:text-6xl">
                Des soins de santé <span className="text-primary">adaptés à vos besoins</span>
              </h1>
              <p className="text-lg font-medium leading-relaxed text-[#5e4b3b] dark:text-gray-300">
                Au cœur d'Abidjan, notre clinique allie expertise médicale moderne et hospitalité ivoirienne. Découvrez l'ensemble de nos services dédiés à votre bien-être.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg transition hover:bg-primary-dark hover:-translate-y-0.5">
                  Prendre Rendez-vous
                </button>
                <button className="flex h-12 items-center justify-center rounded-lg border border-[#d6bda5] bg-white dark:bg-transparent dark:border-gray-600 px-6 text-base font-bold text-[#1b140d] dark:text-white transition hover:bg-[#fcfaf8] dark:hover:bg-white/5">
                  Voir les spécialistes
                </button>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 lg:order-last">
              <img alt="African doctor consulting with a patient in a modern clinic" className="h-full w-full object-cover transition duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCii1tTLi0O6ERBWgRb_RBSS7au9MfRKI-VLj2CPx2T_yHRObJS1WJgtesBo_BQblYPpAHLU43VAj1Y4v98XSxqtkMNCWe_dFKLbduH72teqUlHcylhsauZcGGFTeavl0pT850R7xgsgP8jv9arwL6jyNgPVIEZ44M_XUW2VGi1Sqo1SAtfsPy1bEL5ITP-ZWuTpMZQXhchhh0yOoRzIZY-qDGieDaPfx23kHBm39HZUgl_EfaCa61EjU-VzIlKSZyGSJetEGUXiIY" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-lg bg-white/95 backdrop-blur px-4 py-3 shadow-sm inline-flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img alt="Avatar doctor" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOh3TtXRZpGFLrlpwg7G7VTREl2Qv4tbFywD4AMoz20IZy_YT8xINhhcMrWnsLtde9qqZXTRQH0ubLWClmiaSPZill8Op5gj-Xay-ewM8n9bJGQRbxfyvGIk3d4Rtbm3FTVXbZ9KSQXAvLN_1jg6nCIjSLpevE13j8qHdtG9adRGSdPc5Q1o3ZCfmFBtqRxaE5jGj2OrCINMNleZex1mSR_TO2ENTw8ZQL1GyY4KQ0P2oXcy4VTaBzSyXZtJctnG9_GQ3kcU06WJY" />
                    <img alt="Avatar nurse" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj3xia5tSoIP431FQM4ofMV_jxwsRf96-Un21E-H5-1iPHlKifXWcjDDULR-HP2HQaH6-2cQYU80DdClkJT_gde_Xv5sXOwsNmqO9UzquA5Wf7DCfdirCpZXgYge90DIk1ZMAOgSmRkJiON1kfz5vJx5wh-FqWbCn17GfOKijGtzcOpX9YZvxWDhuaoQaKQd6AZl7J0KV0aI7HIRHYYjVZoDBX1qQavrhEKwG0I2_F69rgImMy7SD5IgaDnapeAsGi5ASKwfo_-dE" />
                    <img alt="Avatar specialist" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd6dv-iniWzHCB6LLm6W63gKA7IoOOuxNbPzEapL0AKywh5Q3pPk6yyA8SAB_jgzqTebGpiBk9r_pEu2VuuVe4pvLyoYKTtGpWrTqLIqtRlerhZrjylN-l4LLJsNdzuP-Y1Ywr9CQlWHvswRXeTkeK2vR3WCj5RmrvUDZyui7jnd5w63o_a4-muW5LD9ORdKLDRGxxNQ1l7DfuZctQhQVkTtLqAkTP8Qv7K7Cef0sL5zghj4BIift4HSUwSWtGRXe7Qh3y2re8iLY" />
                  </div>
                  <p className="text-xs font-bold text-[#1b140d]">+40 Spécialistes à votre écoute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full bg-[#fcfaf8] dark:bg-background-dark py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#1b140d] dark:text-white md:text-4xl">Nos Spécialités Médicales</h2>
            <p className="mt-4 text-lg text-[#5e4b3b] dark:text-gray-400">
              Nous offrons une large gamme de soins pour accompagner chaque étape de votre vie, de la naissance à l'âge adulte.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {services.map((s) => (
              <div key={s.title} className="group relative flex flex-col overflow-hidden rounded-xl border border-[#e7dbcf] bg-white dark:bg-[#2c2219] dark:border-[#3a2d20] p-6 transition hover:shadow-lg hover:border-primary/50">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[32px]">{s.icon}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1b140d] dark:text-white">{s.title}</h3>
                <p className="mb-4 text-[#5e4b3b] dark:text-gray-400 flex-grow">{s.desc}</p>
                <a className="inline-flex items-center text-sm font-bold text-primary hover:underline" href="#">
                  En savoir plus <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
                </a>
              </div>
            ))}
            {/* Service Card 9 (Highlight) */}
            <div className="relative flex flex-col overflow-hidden rounded-xl bg-primary p-6 text-white shadow-lg">
              <div className="absolute -right-6 -top-6 rotate-12 opacity-10">
                <span className="material-symbols-outlined text-[150px]">medical_information</span>
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <h3 className="mb-2 text-xl font-bold">Service non listé ?</h3>
                  <p className="mb-6 text-primary-light text-opacity-90">
                    Contactez notre accueil pour savoir si nous pouvons répondre à votre besoin spécifique. Nous sommes là pour vous aider.
                  </p>
                </div>
                <button className="w-full rounded-lg bg-white py-3 text-sm font-bold text-primary hover:bg-gray-50 transition">
                  Nous Contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full overflow-hidden bg-[#221910] py-16 text-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'#ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center divide-x divide-white/10">
            <div className="flex flex-col items-center p-4">
              <span className="text-4xl font-black text-primary mb-2">15+</span>
              <span className="text-sm font-medium uppercase tracking-wider opacity-80">Années d'expérience</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-4xl font-black text-primary mb-2">40+</span>
              <span className="text-sm font-medium uppercase tracking-wider opacity-80">Médecins Experts</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-4xl font-black text-primary mb-2">12k</span>
              <span className="text-sm font-medium uppercase tracking-wider opacity-80">Patients Satisfaits</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-4xl font-black text-primary mb-2">24/7</span>
              <span className="text-sm font-medium uppercase tracking-wider opacity-80">Service d'Urgence</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#fcfaf8] dark:bg-background-dark py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f8f0e9] to-[#ffffff] border border-[#e7dbcf] dark:from-[#2c2219] dark:to-[#221910] dark:border-[#3a2d20] shadow-xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-12 text-center md:px-12 md:py-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-4xl">calendar_month</span>
              </div>
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-[#1b140d] dark:text-white sm:text-4xl">
                  Besoin d'une consultation ?
                </h2>
                <p className="mt-4 text-lg text-[#5e4b3b] dark:text-gray-300">
                  Nos médecins sont disponibles pour vous accompagner. Prenez rendez-vous en ligne ou contactez-nous pour une urgence.
                </p>
              </div>
              <div className="flex flex-col w-full max-w-sm gap-4 sm:flex-row sm:max-w-md sm:justify-center">
                <button className="flex w-full items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-primary-dark">
                  Prendre Rendez-vous
                </button>
                <button className="flex w-full items-center justify-center rounded-lg border border-primary/30 bg-white dark:bg-transparent px-8 py-3.5 text-base font-bold text-primary transition hover:bg-primary/5">
                  <span className="material-symbols-outlined mr-2">call</span>
                  +225 01 02 03 04
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
       <footer className="bg-background-dark text-white pt-16 pb-8 border-t-4 border-primary">
        <div className="layout-container flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                
              {/* Brand */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined !text-3xl">
                <MdOutlineLocalHospital />
                </span>
                <h2 className="text-white text-xl font-bold">
                    Clinique Ivoire Santé
                </h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                Votre partenaire santé de confiance en Côte d'Ivoire. Nous nous engageons à fournir des soins médicaux d'excellence accessibles à tous.
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4">
                <h3 className="text-primary font-bold uppercase text-sm tracking-wider">
                  Navigation
                </h3>
                <ul className="flex flex-col gap-2 text-gray-300 text-sm">
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Nos Services
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      L'équipe Médicale
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Prendre Rendez-vous
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4">
                <h3 className="text-primary font-bold uppercase text-sm tracking-wider">
                  Contact
                </h3>
                <ul className="flex flex-col gap-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      <CiLocationOn />
                    </span>
                    <span>
                      Cocody Riviera 2, Abidjan,
                      <br />
                      Côte d'Ivoire
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      <IoIosCall />
                    </span>
                    <span>+225 07 07 00 00 00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      <CiMail />
                    </span>
                    <span>contact@ivoiresante.ci</span>
                  </li>
                </ul>
              </div>

              {/* Map Image Placeholder */}
              <div className="flex flex-col gap-4">
                <h3 className="text-primary font-bold uppercase text-sm tracking-wider">
                  Localisation
                </h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden h-32 w-full relative group cursor-pointer">
                  <img
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    data-alt="Map view of Abidjan area"
                    data-location="Abidjan"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkBjGUlyhCHfhbtsveAxqdJSnkIdXBWf0i4W7iAy1q2366ml9vz1inEDKKoyG1-PDE07zBMkLrggmx2-RX02LUBap5qD6sztV7BhnrPcaARcZu7AjZ_up_qEogByTts1eC-I8MvbWeJrivouu4bpKayw4TP11dzi2Cw9CFL2E-ouo9TxAY0pmlhXppImYdnWViS8rbzQcxCEw2h96mezSQqoahfWTABvIGbQqCrrvJLILNHV2m7KvWY1mRJU6W5JDRm8ZEO6ziLGM"
                    alt="Map view of Abidjan area"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/10 backdrop-blur px-3 py-1 rounded text-xs font-bold border border-white/20">
                      Voir sur la carte
                    </span>
                  </div>
                </div>
              </div>

            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>© 2024 Clinique Ivoire Santé. Tous droits réservés.</p>
              <div className="flex gap-6">
                <a className="hover:text-white transition-colors" href="#">
                  Mentions Légales
                </a>
                <a className="hover:text-white transition-colors" href="#">
                  Confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
