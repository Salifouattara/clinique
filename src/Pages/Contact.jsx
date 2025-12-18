import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineLocalHospital } from "react-icons/md";

export default function Contact() {
	return (
		<div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display overflow-x-hidden">
			{/* Hero Section */}
			<section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img alt="Modern medical clinic reception area in warm lighting" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdoMjddaK1Ms4uyNhioz5ewY7huKYhdA7uf5F9zKNTbSA12shXOzDtQpnIFA2Wh2UTvGtMhdDnIjGSt-MxdCD0_hfC2N98r2f0OqwCzB1oCF53OBszlXmdeX1yUCG7z2E3HoUuf1tqsg7OYJey0CWCvJvLzJsDe8eX3Y33aH3NC-fMjVcDrmoW81F9rBXw8QyEkH5iiUCTaMCnY119zwAZddZHxtZwLhfEYloY46JP34PZvMXJxVumvk1UjzKvbPQj9KKwjlzH0s" />
					<div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-background-dark/40"></div>
				</div>
				<div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-10">
					<h1 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-4">
						Nous sommes à votre écoute
					</h1>
					<p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto">
						Notre équipe à Abidjan est disponible pour répondre à vos questions et prendre soin de votre santé.
					</p>
				</div>
			</section>

			{/* Main Content: Contact Info & Form */}
			<div className="relative w-full max-w-[1200px] mx-auto px-4 py-16">
				<div className="absolute top-0 right-0 w-64 h-64 pattern-overlay rounded-full blur-3xl -z-10"></div>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
					{/* Left Column: Information */}
					<div className="lg:col-span-5 flex flex-col gap-8">
						<div>
							<h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">Nos Coordonnées</h2>
							<p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
								Retrouvez-nous au cœur d'Abidjan. Nous sommes ouverts tous les jours pour assurer votre bien-être.
							</p>
						</div>
						<div className="flex flex-col gap-6">
							{/* Address Card */}
							<div className="flex items-start gap-4 p-5 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
								<div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
									<span className="material-symbols-outlined text-2xl">location_on</span>
								</div>
								<div>
									<h3 className="font-bold text-lg text-text-main dark:text-white mb-1">Adresse Physique</h3>
									<p className="text-text-muted dark:text-gray-400">Cocody Riviera 3, Boulevard Mitterrand<br/>Abidjan, Côte d'Ivoire</p>
								</div>
							</div>
							{/* Phone Card */}
							<div className="flex items-start gap-4 p-5 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
								<div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
									<span className="material-symbols-outlined text-2xl">call</span>
								</div>
								<div>
									<h3 className="font-bold text-lg text-text-main dark:text-white mb-1">Téléphone & Urgences</h3>
									<p className="text-text-muted dark:text-gray-400 mb-1">Standard: <a className="hover:text-primary font-medium" href="tel:+225272244XXXX">+225 27 22 44 XX XX</a></p>
									<p className="text-primary font-bold">Urgences 24h/7: <a className="hover:underline" href="tel:+2250707XXXXXX">+225 07 07 XX XX XX</a></p>
								</div>
							</div>
							{/* Hours Card */}
							<div className="flex items-start gap-4 p-5 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
								<div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
									<span className="material-symbols-outlined text-2xl">schedule</span>
								</div>
								<div>
									<h3 className="font-bold text-lg text-text-main dark:text-white mb-1">Heures d'ouverture</h3>
									<table className="text-sm text-text-muted dark:text-gray-400 w-full">
										<tbody>
											<tr>
												<td className="pr-4 py-1">Lundi - Vendredi</td>
												<td className="font-medium text-text-main dark:text-gray-300">08h00 - 18h00</td>
											</tr>
											<tr>
												<td className="pr-4 py-1">Samedi</td>
												<td className="font-medium text-text-main dark:text-gray-300">09h00 - 13h00</td>
											</tr>
											<tr>
												<td className="pr-4 py-1">Dimanche & Jours fériés</td>
												<td className="font-medium text-primary">Urgences uniquement</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							{/* Email Card */}
							<div className="flex items-start gap-4 p-5 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
								<div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
									<span className="material-symbols-outlined text-2xl">mail</span>
								</div>
								<div>
									<h3 className="font-bold text-lg text-text-main dark:text-white mb-1">E-mail</h3>
									<p className="text-text-muted dark:text-gray-400">contact@clinique-espoir.ci</p>
									<p className="text-text-muted dark:text-gray-400">recrutement@clinique-espoir.ci</p>
								</div>
							</div>
						</div>
					</div>
					{/* Right Column: Contact Form */}
					<div className="lg:col-span-7">
						<div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg border border-border-light dark:border-border-dark p-6 md:p-10">
							<h2 className="text-2xl font-bold text-text-main dark:text-white mb-6">Envoyez-nous un message</h2>
							<form className="flex flex-col gap-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Name */}
									<label className="flex flex-col gap-2">
										<span className="text-sm font-bold text-text-main dark:text-gray-200">Nom complet</span>
										<input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-1 focus:ring-primary text-text-main dark:text-white placeholder:text-text-muted/60" placeholder="Votre nom" type="text" />
									</label>
									{/* Phone */}
									<label className="flex flex-col gap-2">
										<span className="text-sm font-bold text-text-main dark:text-gray-200">Téléphone</span>
										<input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-1 focus:ring-primary text-text-main dark:text-white placeholder:text-text-muted/60" placeholder="+225 07 XX XX XX XX" type="tel" />
									</label>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Email */}
									<label className="flex flex-col gap-2">
										<span className="text-sm font-bold text-text-main dark:text-gray-200">Adresse E-mail</span>
										<input className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-1 focus:ring-primary text-text-main dark:text-white placeholder:text-text-muted/60" placeholder="votre@email.com" type="email" />
									</label>
									{/* Subject Dropdown */}
									<label className="flex flex-col gap-2">
										<span className="text-sm font-bold text-text-main dark:text-gray-200">Motif</span>
										<div className="relative">
											<select className="w-full h-12 rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-1 focus:ring-primary text-text-main dark:text-white appearance-none px-4">
												<option>Prise de rendez-vous</option>
												<option>Demande d'information</option>
												<option>Partenariat</option>
												<option>Autre demande</option>
											</select>
											<span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
												<span className="material-symbols-outlined">expand_more</span>
											</span>
										</div>
									</label>
								</div>
								{/* Message */}
								<label className="flex flex-col gap-2">
									<span className="text-sm font-bold text-text-main dark:text-gray-200">Message</span>
									<textarea className="w-full min-h-[140px] rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-1 focus:ring-primary text-text-main dark:text-white placeholder:text-text-muted/60 p-4 resize-y" placeholder="Comment pouvons-nous vous aider ?"></textarea>
								</label>
								{/* Submit Button */}
								<button className="mt-2 w-full md:w-auto self-start h-12 px-8 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md" type="submit">
									<span>Envoyer le message</span>
									<span className="material-symbols-outlined text-lg">send</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="w-full h-[450px] relative mt-8 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
				<div className="w-full h-full relative group">
					<img alt="Stylized map showing city streets of Abidjan" className="w-full h-full object-cover filter grayscale-[20%] opacity-90 group-hover:opacity-100 transition-opacity duration-500" data-location="Abidjan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZMijFnoZsI4Ox-X5DLAWuWXxpIBh5D182yNGPwB7bUvyZsHxgkDj5CPMs3tsxqrSNovWR8n0HM4btnl1UUooKVrSLKZgyunZ-KipIvDmwaQ2Dg1ubxLPFyw1GNCVLGHbX17tzcTEeulTFUFdYsi65ecEgrlFmbkMarNiIUaZpRaphpEejvlQiyzQBUSvjbOAau2j3dlRD8vhcGWvZgprACS32wZtiVflsvgvzcGzUQtHMNxHlgv4f2jy_T3lqAGhdSwQXfOXONpI" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
						<div className="size-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl animate-bounce">
							<span className="material-symbols-outlined text-3xl">medical_services</span>
						</div>
						<div className="bg-white dark:bg-background-dark px-4 py-2 rounded-lg shadow-lg">
							<p className="font-bold text-sm text-text-main dark:text-white whitespace-nowrap">Clinique Espoir Abidjan</p>
						</div>
					</div>
					<div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
				</div>
			</div>

			{/* FAQ Teaser */}
			<div className="bg-primary py-12 px-4">
				<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="text-white text-center md:text-left">
						<h3 className="text-2xl font-bold mb-2">Une question urgente ?</h3>
						<p className="opacity-90">Consultez notre foire aux questions pour des réponses immédiates.</p>
					</div>
					<button className="bg-white text-primary hover:bg-gray-100 font-bold h-12 px-8 rounded-lg transition-colors shadow-lg whitespace-nowrap">
						Consulter la FAQ
					</button>
				</div>
			</div>
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
