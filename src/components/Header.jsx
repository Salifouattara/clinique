// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineLocalHospital } from "react-icons/md";



const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Médecins', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
];

const mobileNavItems = [
    { name: 'Accueil', path: '/', icon: 'home' },
    { name: 'À propos', path: '/about', icon: 'info' },
    { name: 'Services', path: '/services', icon: 'medical_services' },
    { name: 'Médecins', path: '/doctors', icon: 'groups' },
    { name: 'Contact', path: '/contact', icon: 'mail' },
];


export default function Header() {
    const location = useLocation();
    
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#f3ede7] bg-background-light/95 backdrop-blur dark:bg-background-dark/95 dark:border-white/10">
            <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1200px] mx-auto">
                {/* Logo & Nom */}
                <Link to="/" className="flex items-center gap-4">
                    <div className="size-8 text-primary">
                        <span className="material-symbols-outlined !text-4xl"><MdOutlineLocalHospital /></span>
                    </div>
                    <h2 className="text-[#1b140d] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Clinique Ivoire Santé</h2>
                </Link>

                {/* Navigation Desktop */}
                <nav className="hidden md:flex flex-1 justify-center gap-8">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            to={item.path}
                            className={`text-sm font-medium transition-colors ${
                                location.pathname === item.path 
                                    ? 'text-primary border-b-2 border-primary' 
                                    : 'text-[#1b140d] dark:text-gray-200 hover:text-primary'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Boutons Connexion / Inscription */}
                <div className="flex gap-2">
                    <Link to="/connexion" className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 hover:bg-primary/20 text-primary dark:text-primary dark:bg-primary/20 dark:hover:bg-primary/30 text-sm font-bold transition-colors">
                        <span className="truncate">Connexion</span>
                    </Link>
                    <Link to="/inscription" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-orange-600 text-white text-sm font-bold shadow-sm transition-colors">
                        <span className="truncate">S'inscrire</span>
                    </Link>
                </div>
            </div>

            {/* Menu Mobile Simplifié */}
            <div className="md:hidden flex justify-around py-2 border-t border-gray-100 dark:border-white/5 text-xs text-gray-500">
                {mobileNavItems.map((item) => (
                    <Link key={item.name} to={item.path} className={`flex flex-col items-center ${location.pathname === item.path ? 'text-primary' : ''}`}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>
        </header>
    );
}