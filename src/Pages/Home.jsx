// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa";
import { MdOutlineChildCare } from "react-icons/md";
import { MdOutlineBiotech } from "react-icons/md";
import { LuAmbulance } from "react-icons/lu";
import { IoMdArrowForward } from "react-icons/io";
import { MdDiversity1 } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineLocalHospital } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const ServiceCard = ({ icon, title, description, bgColor, textColor }) => (
    <div className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-[#2c241b] p-6 shadow-sm border border-[#e7dbcf] dark:border-white/5 hover:border-primary hover:shadow-md transition-all">
        <div className={`size-12 rounded-full ${bgColor} flex items-center justify-center ${textColor} group-hover:scale-110 transition-transform`}>
            {React.isValidElement(icon)
                ? React.cloneElement(icon, { className: 'text-3xl' })
                : <span className="material-symbols-outlined text-3xl">{icon}</span>
            }
        </div>
        <div className="flex flex-col gap-2">
            <h4 className="text-[#1b140d] dark:text-white text-lg font-bold">{title}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const servicesData = [
    { icon: <FaStethoscope />, title: 'Consultations Générales', description: 'Suivi régulier, bilans de santé et diagnostics précis pour toute la famille.', bgColor: 'bg-orange-100 dark:bg-orange-900/30', textColor: 'text-primary' },
    { icon: <MdOutlineChildCare />, title: 'Pédiatrie & Maternité', description: 'Accompagnement de la grossesse à la naissance et soins spécialisés pour les enfants.', bgColor: 'bg-green-100 dark:bg-green-900/30', textColor: 'text-secondary dark:text-green-400' },
    { icon: <MdOutlineBiotech />, title: 'Laboratoire d\'Analyses', description: 'Plateau technique moderne pour des résultats rapides et fiables sur place.', bgColor: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-600 dark:text-blue-400' },
    { icon: <LuAmbulance />, title: 'Urgences 24/7', description: 'Une équipe de garde prête à intervenir à tout moment du jour et de la nuit.', bgColor: 'bg-red-100 dark:bg-red-900/30', textColor: 'text-red-600 dark:text-red-400' },
];

const FeatureItem = ({ icon, title, description }) => (
    <div className="flex gap-4">
        <div className="mt-1 size-10 min-w-10 rounded-full bg-secondary text-white flex items-center justify-center">
            <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
            <h5 className="text-lg font-bold text-[#1b140d] dark:text-white">{title}</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
        </div>
    </div>
);

export default function Home() {
    return (
        <>
            <div className="layout-container">
                {/* Hero Section */}
                <div className="relative w-full">
                    <div className="px-4 md:px-40 py-5 flex justify-center">
                        <div className="flex flex-col max-w-[1200px] flex-1">
                            <div className="@container">
                                <div className="@[480px]:p-4">
                                    <div className="relative flex min-h-[520px] flex-col gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-start justify-end px-4 pb-10 @[480px]:px-10 shadow-lg" 
                                        style={{
                                            backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(34, 25, 16, 0.85) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiwnizLmGmk0mmY4NEXfsRDN9fZXpCbPaoO9zdaElU5cn6Pc_RMb4DhSE5nCyUV9ZMpaKWHAJkzWMYJd8oR7V3V0qQ2qZ8QQkgj0hfRgMA6z8T0KL340piBRZvyj8mAQIddU7S-Qaxs30-y4oiTPjjOu7BfM1xNtEGB9NgF9kiRio5RNJcqO5S1mAycOTOG0gE322123Q9S-rXkpaW4nyW-bHpY9sNvKuKXHhrz-Ho032zQytMnSywx38XpZUHbfIEUFah_DYGrZI")'
                                        }}>
                                        {/* African Pattern Strip on top of image */}
                                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-700 via-primary to-yellow-500"></div>
                                        <div className="flex flex-col gap-4 text-left max-w-[700px] z-10">
                                            <span className="bg-secondary/90 text-white px-3 py-1 rounded-full text-xs font-bold w-fit uppercase tracking-wider backdrop-blur-sm border border-white/20">
                                                Excellence Médicale à Abidjan
                                            </span>
                                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl drop-shadow-md">
                                                Votre santé, notre priorité au cœur de la Côte d'Ivoire
                                            </h1>
                                            <h2 className="text-gray-200 text-base font-medium leading-relaxed @[480px]:text-lg max-w-[600px]">
                                                Des soins de qualité internationale, une équipe dévouée et une approche humaine ancrée dans nos traditions d'hospitalité.
                                            </h2>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3 z-10 w-full sm:w-auto">
                                            <Link to="/appointment" className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-orange-600 text-white text-base font-bold shadow-lg transition-transform hover:scale-105">
                                                <span className="material-symbols-outlined mr-2"><MdOutlineCalendarMonth /></span>
                                                <span>Prendre rendez-vous</span>
                                            </Link>
                                            <Link to="/doctors" className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur text-white text-base font-bold transition-colors">
                                                <span className="truncate">Nos spécialistes</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div
                    className="bg-gradient-to-b from-[#fff4e6] via-[#ffd8a8] to-[#ec7f13] dark:bg-background-dark py-10"
                    style={{
                        backgroundImage: `linear-gradient(var(--tw-gradient-stops)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec7f13' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                >
                        <div className="layout-container flex justify-center">
                            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 md:px-10">
                                <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between px-4 pb-10">
                                    <div className="flex flex-col gap-3 max-w-[600px]">
                                        <h2 className="text-secondary dark:text-green-400 text-sm font-bold uppercase tracking-widest">Nos Départements</h2>
                                        <h3 className="text-[#1b140d] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                                            Soins Complets pour la Famille
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                                            Nous offrons une gamme complète de services médicaux adaptés aux besoins spécifiques de la population ivoirienne.
                                        </p>
                                    </div>
                                    <Link to="/services" className="text-primary font-bold flex items-center hover:underline">
                                        Voir tous les services <span className="material-symbols-outlined ml-1"><IoMdArrowForward /></span>
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                                    {servicesData.map((service, index) => (
                                        <ServiceCard key={index} {...service} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us / Features */}
                <div className="relative bg-white dark:bg-background-dark py-16">
                    <div className="layout-container flex justify-center">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 md:px-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-secondary/20 z-10"></div>
                                    <img className="w-full h-full object-cover min-h-[400px]" alt="Modern medical equipment and diverse medical team discussing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOFdjvPzKUTD1_3QMPllZBQ4CU-FEJRx941K8aHz7AuHkNVj8NiIjN_pYsW79PUDImrF83Rb7svIlC9sLadWdat2BHAprCigbZyP-eVKKa3XO2kiwgncaAjiC8lvyGPjyg__9oGAbzNpfq3-5hQXOFRp4L3WcvociQM9h130B3PjcBe24Gd7pVZM_JwUxIF6Y8lZyaHO4QjyIWZujqlG1DzCdgWwaBUvgKZhFWvgz41ChbZdGnmvREZoJuw4xN75qsVrwzLHI1GrQ"/>
                                </div>
                                <div className="order-1 lg:order-2 flex flex-col gap-6">
                                    <span className="text-primary text-sm font-bold uppercase tracking-widest">Pourquoi Nous Choisir ?</span>
                                    <h2 className="text-[#1b140d] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                                        Une médecine moderne respectueuse de nos valeurs
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        À la Clinique Ivoire Santé, nous combinons l'expertise médicale internationale avec la chaleur de l'accueil ivoirien.
                                    </p>
                                    <div className="flex flex-col gap-6 mt-4">
                                        <FeatureItem 
                                            icon={<MdDiversity1 />} 
                                            title="Personnel Qualifié & Empathique" 
                                            description="Nos médecins et infirmiers sont formés pour écouter et soigner avec compassion." 
                                        />
                                        <FeatureItem 
                                            icon={<MdDevices />} 
                                            title="Équipements de Pointe" 
                                            description="Des technologies de diagnostic avancées pour des soins plus précis et rapides." 
                                        />
                                        <FeatureItem 
                                            icon={<MdOutlinePayments />} 
                                            title="Tarifs Transparents" 
                                            description="Pas de surprises. Nous travaillons avec la majorité des assurances santé locales." 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <section className="bg-secondary relative overflow-hidden">
                  {/* Abstract patterns for African vibe */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                  <div className="layout-container py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                      <h2 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
                        Prêt à prendre soin de votre santé ?
                      </h2>
                      <p className="text-gray-200 text-lg max-w-[800px] mx-auto">
                        Rejoignez notre communauté de patients satisfaits. Inscrivez-vous en ligne pour gérer vos rendez-vous facilement.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                        <Link to="/register" className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-orange-600 text-white text-base font-bold shadow-lg transition-transform hover:scale-105">
                          Créer un compte patient
                        </Link>
                        <Link to="/contact" className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-transparent border border-white text-white hover:bg-white/10 text-base font-bold">
                          Contacter le support
                        </Link>
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
        </>
    );
}