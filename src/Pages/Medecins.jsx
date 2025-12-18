import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineLocalHospital } from "react-icons/md";

const doctors = [
  {
    name: "Dr. Kouassi Jean",
    specialty: "Cardiologie",
    experience: "15 ans d'expérience",
    description:
      "Spécialiste renommé en cardiologie interventionnelle. Dr. Kouassi a dirigé le département de cardiologie de l'hôpital général avant de rejoindre notre clinique.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCO4E8kmtNXFj-nR7_0AimIZKoq5yRVNA95KT2SBfcqPLEtxKjUn4p9le7v6B7ihm2K4wJogF4_XAv-w_WL_CLoV_xDdwJMDjNB22nm0PCz6WBoQQE8JrG0Y95uRXAoFLUlpJxvyugEgzrfHn67SXOBJ92wf174QIoL9x1ZrYjeEOM8xYICz-EjnQvycWNoZUTZip1mf-Mm7b29h42nXq8yUKXqr0BOBSB7qwwO3kyUJYPTtlCZbJNmaLXyHMD4-QOMxVXK4VVGnIs",
    tag: "Cardiologie",
  },
  {
    name: "Dr. Touré Aminata",
    specialty: "Pédiatrie",
    experience: "Expertise enfant & nourrisson",
    description:
      "Passionnée par la santé infantile, le Dr. Touré offre un accompagnement bienveillant aux familles, du nouveau-né à l'adolescent.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgaRN4pwXQZZbPWpF4NmewEMcvYGjQOs4Zzv227FrdU3e__9ANkI95zmmqwuXD2KOAOxQ3b_OBhzZIdvF5znWSZJ8qgba9tr7g7YajdCisxyjgfSCTg0YzsjJWejyHWeosvKUKsJbJ1EPLPzj7NaIcF3SShl8xfTCFRyI9A7f4M1HzKfz6yoBOQHDsyDvRkoFue_04VmgfbGetN8InWOQTDcdlVlO_-OhlUZ6rsSpteUgIzHgoRU51HvpURVDm7yt-uHdh_JArXSQ",
    tag: "Pédiatrie",
  },
  {
    name: "Dr. Diallo Fatou",
    specialty: "Gynécologie",
    experience: "Santé de la femme",
    description:
      "Dr. Diallo est spécialisée dans le suivi de grossesse et la santé reproductive, offrant une écoute attentive et des soins modernes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAzHTA-W0lC3IcyWOkYzGHD_mihWLRzSNf9hLC48hV9q5ApEwIsJu1yfjQPseeOtQUVm9D0xc5N47YbdepsNEiPF8J9R0wmgx3Q7LZOGsMBw_3YRkJWaiM9UbIvNMe40ftA7O2UYrjs2b0CB6Ug6swsD9eZU3dzXJBiRM6-bgZMKYEqmOhvU7pBK4wUhutxUIkiDwxTeXxlCAnQ-_Ibv_dZE-Aeg_lOJF7_AwNo6cLwNY_tf_w_7i-U_uFKnzB2QVQuTq1jUqcGL4",
    tag: "Gynécologie",
  },
  {
    name: "Dr. Oka Michel",
    specialty: "Dentaire",
    experience: "Chirurgie dentaire",
    description:
      "Expert en implantologie et esthétique dentaire. Le Dr. Oka redonne le sourire à ses patients grâce aux dernières technologies.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIMo9UZk82pEDbGmmHArA52VeQaKV9fI4VF7vcIHHUwgiP4n_-o56fVuv07eUPc4QOumQlwXKg9GpaWEDCjd3cSgDTmF4sdPkUOnA6B3fvrClvuFmOzwqPW0akORwIOqiB16ffwXyMH_xFjdFLraZt_Zamk8Fdmv8BqDbzN4H8ZttCLXIcWZu57pFV7QLAnPm9zaXZxPbw3b7RS1xhHXhBdUrkNFCIZfhHERw_9Tfjvu_M32nz83kESzpFdcojQ_ltQsLn7lT7Aew",
    tag: "Dentaire",
  },
  {
    name: "Dr. Ba Moussa",
    specialty: "Médecine Générale",
    experience: "Suivi complet",
    description:
      "Une approche globale de la santé pour toute la famille. Le Dr. Ba est votre premier point de contact pour le diagnostic et le suivi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeKiG0b6HZBrHdZfTno8gSDTL1CbTKBWHRpqt4gN48-x7NK4DjxY7wlwa51MF_sxjtR4txTOJz4EAiHHivCwCmDqQ1wxqdk70kOUlEpbm3j39tMjZNasW7BTNKoLBZYEJXOoa_Z05ocWhkgmbEo1o0PyJxUOMk6cCwNFz5CG_S3MkMPrcdgxNzZTx7kCBRzbzNmTsfK8qp64jjAoJoYGOwZUToidEdlMuIobZAi5eYHWp4LMM0W2uGcpqH03Gee8MX2-XYM88YlK8",
    tag: "Médecine Générale",
  },
  {
    name: "Dr. Koffi Serge",
    specialty: "Ophtalmologie",
    experience: "Vision & Soins",
    description:
      "Spécialiste des troubles de la vision et de la chirurgie oculaire. Il utilise des équipements de pointe pour protéger votre vue.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB73Gp9h1uAeZwrKVkw4jGEFl2XuteKYkL7hug3K-juK37D_VkjYkMuwBJCKEsv7c8LB4LZ0VhlyX0E6PcAvpZaikU_K-NgH3_Dr2md9qVeTHLmykWpsNlhyW_w2jwjGzF0fa1FnpGaZGDgLUHuGZKkZt2R4WU_ppW7DsedHRVkUECw4YbtP8CIbZgGC03ihCzBa3vb6OGGq2WVawWSDujKD3QovW4SKyfTrrYaOAE06wKpx-zkGtZA6lUp0yXAuy-VmmLO6N1-cek",
    tag: "Ophtalmologie",
  },
];

export default function Medecins() {
  return (
    <main className="flex flex-col min-h-screen bg-african-pattern">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBD27aVc7HjVbTaGerzs7vEErKkoCQ6z95m8vjKNAB-3vDD8ilnBE2RnECJPD9yk-FqXY_0pKXVJmQ2tE2vw-6WvuQF3PIlX_Zdc1qKl7YEt6mmd2m4KgQfQ9bv2tlOg-cQU7IHz_hJIR0SgIyfvmJ4CexxDXIs0eGvL-zEHR2ghDnG6PFp7vZdJWNGmoSMK477Gt4GXuuEzshadpJNfm6GhFipjGWI8W03BgdsVnDY5XET-iUdKi6doGEIcTJUUU8cdTzYETKCC-o")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32 flex flex-col items-start justify-center min-h-[480px]">
          <span className="mb-4 inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary-light backdrop-blur-sm border border-primary/30">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
            Nos Experts
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl max-w-3xl">
            Une Équipe Dévouée <br />à Votre Santé
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Rencontrez nos spécialistes qualifiés au cœur d'Abidjan. Nous combinons expertise médicale internationale et chaleur humaine ivoirienne.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              Prendre rendez-vous
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-bold transition-all backdrop-blur-sm">
              En savoir plus
            </button>
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="relative z-20 -mt-8 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white p-6 shadow-xl border border-[#f3ede7]">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="w-full lg:w-1/3">
              <label className="relative block w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                  <span className="material-symbols-outlined">search</span>
                </span>
                <input
                  className="w-full rounded-lg border-0 bg-[#f8f7f6] py-3 pl-10 pr-4 text-text-main placeholder:text-text-muted focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
                  placeholder="Rechercher par nom..."
                  type="text"
                  // TODO: Ajouter la logique de recherche
                />
              </label>
            </div>
            {/* Filter Chips */}
            <div className="w-full lg:flex-1 overflow-x-auto pb-2 lg:pb-0">
              <div className="flex gap-3 min-w-max">
                <button className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md transition-transform hover:scale-105">Tous</button>
                <button className="bg-[#f3ede7] hover:bg-primary/10 text-text-main hover:text-primary px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-transparent hover:border-primary/20">Pédiatrie</button>
                <button className="bg-[#f3ede7] hover:bg-primary/10 text-text-main hover:text-primary px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-transparent hover:border-primary/20">Gynécologie</button>
                <button className="bg-[#f3ede7] hover:bg-primary/10 text-text-main hover:text-primary px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-transparent hover:border-primary/20">Cardiologie</button>
                <button className="bg-[#f3ede7] hover:bg-primary/10 text-text-main hover:text-primary px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-transparent hover:border-primary/20">Dentaire</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Doctors Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-[#f3ede7] shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${doc.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <span className="absolute bottom-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {doc.specialty}
                </span>
              </div>
              <div className="flex flex-col p-6 flex-1">
                <h3 className="text-xl font-bold text-text-main mb-1 group-hover:text-primary transition-colors">
                  {doc.name}
                </h3>
                <p className="text-sm font-medium text-text-muted mb-4">{doc.experience}</p>
                <p className="text-text-main/80 text-sm leading-relaxed mb-6 text-truncate-3 flex-1">
                  {doc.description}
                </p>
                <div className="mt-auto pt-4 border-t border-dashed border-gray-200 flex items-center justify-between">
                  <a
                    className="text-sm font-bold text-text-main group-hover:text-primary flex items-center gap-1 transition-colors"
                    href="#"
                  >
                    Voir le profil
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                  <button
                    className="bg-[#f3ede7] hover:bg-primary hover:text-white text-primary p-2 rounded-lg transition-colors"
                    title="Prendre rendez-vous"
                  >
                    <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination / More Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 rounded-lg border border-[#f3ede7] bg-white px-6 py-3 text-sm font-bold text-text-main hover:bg-[#f3ede7] hover:text-primary transition-colors shadow-sm">
            Afficher plus de médecins
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-primary-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 shadow-2xl sm:px-12 sm:py-16">
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Besoin d'une consultation rapide ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Notre équipe est disponible pour vous accompagner. Prenez rendez-vous en ligne ou contactez notre service d'urgence.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-lg bg-white px-8 py-3.5 text-base font-bold text-primary shadow-lg transition-transform hover:scale-105 hover:bg-gray-50">
                  Prendre rendez-vous maintenant
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10">
                  <span className="material-symbols-outlined">call</span>
                  +225 01 02 03 04
                </button>
              </div>
            </div>
            {/* Decorative Circles */}
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-black/10 blur-3xl"></div>
          </div>
        </div>
        <br />
      </section>
      <footer className="bg-background-dark text-white pt-16 pb-8 border-t-4 border-primary">
        <div className="layout-container flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                
              {/* Brand */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                <MdOutlineLocalHospital className="text-3xl text-primary" />
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
                    <CiLocationOn className="text-primary text-lg" />
                    <span>
                      Cocody Riviera 2, Abidjan,
                      <br />
                      Côte d'Ivoire
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoIosCall className="text-primary text-lg" />
                    <span>+225 07 07 00 00 00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CiMail className="text-primary text-lg" />
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
    </main>
  );
}
